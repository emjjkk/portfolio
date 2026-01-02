import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text, targetLang } = await req.json();
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) return NextResponse.json({ error: "Missing API key" }, { status: 500 });

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
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
Do NOT add commentary, explanation, summary.
Preserve markdown, HTML, code blocks, spacing, everything else.`
          },
          { role: "user", content: text }
        ],
        temperature: 0
      })
    });

    const data = await res.json();
    const translation = data.choices?.[0]?.message?.content ?? "";
    return NextResponse.json({ translation });
  } catch (err) {
    console.error("Translation API error:", err);
    return NextResponse.json({ translation: "", error: "Translation failed" }, { status: 500 });
  }
}
