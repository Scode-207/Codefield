
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

// Always use the named parameter for API Key as per SDK rules.
// The build tool (Vite) will now correctly inject this value from your environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMatchmakingAdvice = async (projectDescription: string, coderProfiles: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a world-class CTO and recruiter for Codefield.
      
      Project Description: "${projectDescription}"
      
      Available Coders:
      ${coderProfiles}
      
      Task: Based on the project description, suggest the top 1 coder who would be the best fit. Explain why in exactly two minimalist sentences. Be elegant, brief, and objective. Use a tone of understated sophistication.`,
    });
    return response.text;
  } catch (error) {
    console.error("Matchmaking error:", error);
    return "The system is momentarily occupied. Please trust your intuition or try again.";
  }
};

export const chatWithAiAdvisor = async (history: Message[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(h => h.content).join("\n"),
      config: {
        systemInstruction: "You are the Codefield Concierge. You assist founders in vetting candidates and defining project scopes. Your responses are brief, sophisticated, and insightful. Avoid corporate jargon. Speak like a minimalist architect.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "I apologize, my connection to the field is unstable.";
  }
};
