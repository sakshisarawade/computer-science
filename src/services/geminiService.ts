import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function identifyMonument(base64Image: string, mimeType: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: [
        {
          parts: [
            {
              text: "Identify the monument in this image. If it is an Indian monument, provide its details in JSON format. If it is NOT an Indian monument, return 'NOT_INDIAN'. If you cannot identify it, return 'UNKNOWN'.",
            },
            {
              inlineData: {
                data: base64Image.split(',')[1],
                mimeType: mimeType,
              },
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            status: { type: Type.STRING, description: "IDENTIFIED, NOT_INDIAN, or UNKNOWN" },
            name: { type: Type.STRING },
            location: { type: Type.STRING },
            description: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "2-3 paragraphs of rich historical description"
            },
            builtYear: { type: Type.STRING },
            architect: { type: Type.STRING },
            significance: { type: Type.STRING },
            nearbyMonuments: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  distance: { type: Type.STRING }
                }
              }
            },
            interestingFacts: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error identifying monument:", error);
    throw error;
  }
}
