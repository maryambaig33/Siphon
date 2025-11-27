import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

try {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
} catch (error) {
  console.error("Failed to initialize GoogleGenAI. Make sure API_KEY is set.", error);
}

const SYSTEM_INSTRUCTION = `
You are the "Head Virtual Barista" at Siphon Coffee. 
Your goal is to help customers choose drinks and food from our menu based on their mood, weather, or taste preferences.
We specialize in the Siphon brewing method (halogen burners), which produces a tea-like, vibrant, and aromatic cup of coffee.

Our Key Menu Items to suggest:
- Siphon Coffee (The signature experience, $8)
- Honey Lavender Latte (Sweet and floral, $6)
- The "Siphon" Toast (Avocado, poached egg, chili flakes, $12)
- Breakfast Tacos (Chorizo or Potato, $4.50)
- Cold Brew (Nitrogen infused, $5)
- Craft Beer & Wine selection (for later in the day)

Tone: Warm, knowledgeable, hipster-chic, but approachable. Keep responses concise (under 50 words) unless asked for a detailed explanation of the Siphon method.
`;

export const sendMessageToBarista = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm currently having trouble connecting to the coffee mind hive. Please check your API key.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the chat history for the API
    // Note: The SDK manages history in the chat session, but since we might recreate the session 
    // or need statelessness in some architectures, we'll initialize a new chat with history here for simplicity in this demo context,
    // or use the chat object if we persisted it. 
    // For this implementation, we will use a fresh chat with history injected to keep it robust.

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Error talking to Barista:", error);
    return "I spilled the beans! Something went wrong. Please try again.";
  }
};
