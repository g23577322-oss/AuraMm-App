import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY as string 
});

const SYSTEM_INSTRUCTION = `You are a helpful, empathetic, and knowledgeable pregnancy health assistant named Bloom AI. 
Your goal is to provide supportive, non-medical advice and general information related to pregnancy, wellness, and baby development.
Always prioritize maternal well-being and remind the user that you are an AI, not a doctor. 
If a user mentions severe symptoms (heavy bleeding, intense pain, etc.), strongly advise them to contact their healthcare provider immediately.
Your tone should be elegant, soothing, and sophisticated, matching the Bloom & Bébé brand.`;

export async function getAIResponse(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.";
  }
}
