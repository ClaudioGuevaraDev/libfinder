import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { prompt, languages, licenses, model, recommendations } =
    await request.json();

  const { text } = await generateText({
    model: openai(model),
    system: "You are a recommended programming libraries",
    prompt: `Request: ${prompt}
    Languages: ${languages}
    License: ${licenses}
    You must respond with an array of objects with the fields: name, language, description, link, publication_date (format yyyy-mm-dd). Answer only with the array. Delivers ${recommendations} library per language.`,
  });

  return Response.json({ libraries: text });
}
