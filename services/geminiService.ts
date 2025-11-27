import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

try {
  // Ensure we use the environment variable as per instructions
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
} catch (error) {
  console.error("Failed to initialize GoogleGenAI. Make sure API_KEY is set.", error);
}

const SYSTEM_INSTRUCTION = `
You are the "Head Barista" at Siphon Coffee in Houston, Texas.
Your persona is knowledgeable, warm, slightly scientific (due to our brewing methods), and passionate about coffee.

About Siphon Coffee:
- We are famous for our "Siphon" (Vacuum Pot) brewing method using Halogen beam heaters.
- The Siphon method produces a very clean, tea-like, aromatic cup with no sediment.
- We also serve espresso, cold brew (Kyoto style slow drip), beer, and wine.
- We have a full food menu (Siphon Toast, Tacos, Quiche).

Your Goal:
- Help customers decide what to order based on their preferences (e.g., "I want something sweet", "I need energy", "I'm hungry").
- If asked about the Siphon method, explain it simply: "It uses vapor pressure and vacuum force to fully immerse the coffee, creating a vibrant and clean flavor profile."
- Keep responses concise (under 50 words) unless explaining a complex topic.
- Suggest "The Siphon Signature" to new guests.

Menu Highlights to Recommend:
- Siphon Signature ($8)
- Honey Lavender Latte ($6)
- Kyoto Cold Brew ($6.50)
- The Siphon Toast ($12)
`;

export const sendMessageToBarista = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm currently having trouble connecting to the coffee mind hive. Please check your connection.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Create a new chat session with the provided history
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
    return "I spilled the beans! Something went wrong. Please try again in a moment.";
  }
};