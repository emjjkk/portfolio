// /app/api/translate/route.ts
export async function POST(req: Request) {
  const { text, targetLang } = await req.json();
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) return new Response("Missing API key", { status: 500 });

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "qwen/qwen2.5-7b-instruct",
      messages: [
        {
          role: "system",
          content: `You are a translation engine.
Translate ONLY the user text into the target language.
Do NOT add commentary.
Do NOT explain.
Do NOT summarize.
Do NOT change formatting.
Do NOT remove or add markdown, HTML, code blocks, backticks, or spacing.
Preserve EVERYTHING exactly EXCEPT the natural language itself.`
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0
    })
  });

  const data = await response.json();
  const translation = data.choices?.[0]?.message?.content ?? "";
  return Response.json({ translation });
}
