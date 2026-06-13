import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/generateContent', async (req, res) => {
  const API_KEY = process.env.ANTIGRAVITY_API_KEY;
  if (!API_KEY) {
    return res.status(500).json({ error: "API key is not configured on the server." });
  }

  try {
    const { prompt } = req.body;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({ error: "Prompt cannot be empty" });
    }

    const systemPrompt = `You are a concise tutor explaining Indian Knowledge Systems (IKS) to a student.
Rules:
- Keep all answers strictly under 120 words.
- Use very simple English.
- Do NOT use markdown headings, bold text, italics, horizontal lines, or bulleted lists.
- Do NOT use mathematical notation or LaTeX ($ symbols).
- Do NOT write articles or long essays.
- Do NOT start with greetings like "Great to connect".
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
            maxOutputTokens: 120,
            temperature: 0.3
          }
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      return res.status(502).json({ error: `API Error: ${response.status}` });
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

    return res.status(200).json({ content: cleanText });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
