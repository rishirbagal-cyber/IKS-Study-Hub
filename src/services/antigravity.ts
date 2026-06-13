export const generateStudyContent = async (prompt: string) => {
    if (!prompt || !prompt.trim()) {
        throw new Error("Prompt cannot be empty");
    }
    
    try {
        const API_URL = import.meta.env.VITE_API_URL || '';
        const response = await fetch(`${API_URL}/api/generateContent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Server Error: ${response.status}`);
        }
        
        const data = await response.json();
        return data.content;
    } catch (error) {
        throw error;
    }
};
