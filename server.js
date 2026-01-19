
import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/api/ai", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt required" });
  }

  const systemPrompt = `
You are a reflective writing assistant.
You do NOT give medical, psychological, or legal advice.
You do NOT diagnose.
You ONLY provide general educational reflection prompts.
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt }
      ]
    })
  });

  const data = await response.json();
  res.json({ reply: data.choices[0].message.content });
});

app.listen(3001, () => console.log("AI server running on port 3001"));
