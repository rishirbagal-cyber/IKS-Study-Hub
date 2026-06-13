export default async (req) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  const API_KEY = process.env.ANTIGRAVITY_API_KEY;
  if (!API_KEY) {
    return new Response(JSON.stringify({ error: "API key is not configured on the server." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const { prompt } = await req.json();

    if (!prompt || !prompt.trim()) {
      return new Response(JSON.stringify({ error: "Prompt cannot be empty" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const systemPrompt = `You are a concise tutor explaining Indian Knowledge Systems (IKS) to a student.
Rules:
- Keep all answers short, maximum 100-150 words.
- Use very simple English.
- Do NOT use markdown headings, bold text, italics, horizontal lines, or bulleted lists.
- Do NOT use mathematical notation or LaTeX ($ symbols).
- Do NOT write articles or long essays.
- Do NOT start with greetings like "Great to connect" or motivational filler.
- Answer directly and plainly.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            maxOutputTokens: 150,
            temperature: 0.3
          }
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Gemini API Error Response:", errorData);
      return new Response(JSON.stringify({ error: `API Error: ${response.status} - ${errorData}` }), {
        status: 502,
        headers: { "Content-Type": "application/json" }
      });
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

    // Clean the markdown output before sending to client
    const cleanText = rawText
      .replace(/^#+\s+/gm, '') // Remove markdown headings
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italics
      .replace(/^[-*]\s+/gm, '') // Remove list bullets
      .replace(/^---+$/gm, '') // Remove horizontal lines
      .replace(/\$/g, '') // Remove LaTeX symbols
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/`(.*?)`/g, '$1') // Remove inline code
      .replace(/\n{3,}/g, '\n\n') // Remove excessive newlines
      .trim();

    return new Response(JSON.stringify({ content: cleanText }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Server Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
