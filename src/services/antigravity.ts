const API_KEY = import.meta.env.VITE_ANTIGRAVITY_API_KEY;

export const generateStudyContent = async (prompt: string) => {
    if (!API_KEY) {
        throw new Error("Antigravity API key is not configured.");
    }
    
    try {
        // As standard Antigravity generates text with Google GenAI API endpoint. We will use the standard fetch API since there are no provided antigravity libraries to use, or we mock it with direct Gemini API fetch format.
        // Wait, the project `package.json` had `"@google/genai": "^1.39.0"`. I should use it. 
        // Wait, the user specifically mentioned "Use Antigravity API for AI features (I will provide the API key), Add a function: generateStudyContent(prompt)"
        // And "Example structure: const API_KEY = import.meta.env.VITE_ANTIGRAVITY_API_KEY ... Fetch response using async/await."
        // I will use fetch for the Gemini API matching @google/genai or simple REST since it's an API Key string provided.
        // Actually, the simplest standard fetch for Gemini text generation:
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
            }),
          }
        );
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    } catch (error) {
        console.error("Error generating study content:", error);
        throw error;
    }
};
