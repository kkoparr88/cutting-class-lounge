
import { GoogleGenAI, Type } from "@google/genai";

export async function getStyleAdvice(userPrompt: string, base64Image?: string) {
  // Initialize the AI client within the function scope to ensure the current process.env.API_KEY is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';
  
  let parts: any[] = [{ text: userPrompt }];
  
  if (base64Image) {
    parts.push({
      inlineData: {
        mimeType: 'image/jpeg',
        data: base64Image
      }
    });
  }

  // Request content generation using the specified model and cinematic system instructions
  const response = await ai.models.generateContent({
    model,
    contents: { parts },
    config: {
      systemInstruction: "You are 'BladeGPT', the official AI Style Consultant for Cutting Class Lounge, a premium, modern barbershop with a 'thug life' and cinematic aesthetic. Your advice should be sharp, professional, yet edgy and confident. Recommend hairstyles (fades, tapers, etc.) based on descriptions or images. Always keep it high-class and urban.",
      temperature: 0.8,
      topP: 0.95
    }
  });

  // Directly access the .text property from the GenerateContentResponse object
  return response.text;
}
