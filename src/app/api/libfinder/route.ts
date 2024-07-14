import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export const dynamic = "force-dynamic";

export async function POST() {
  const { text } = await generateText({
    model: openai("gpt-3.5-turbo-0125"),
    system: "You are a recommended programming libraries",
    prompt: `Request: Libraries for working with whastapp
  Languages: JavaScript, Python
  Posted ago: 1 year ago
  Author/Organization: Any
  License: Any
  You must respond with an array of objects with the fields: name, language, description, link, publication_date. Answer only with the array.`,
  });

  //   const text = `[
  //   {
  //     "name": "whatsapp-web.js",
  //     "language": "JavaScript",
  //     "description": "A library for interacting with WhatsApp Web to send and receive messages programmatically.",
  //     "link": "https://github.com/pedroslopez/whatsapp-web.js",
  //   },
  //   {
  //     "name": "yowsup",
  //     "language": "Python",
  //     "description": "A Python library to interact with WhatsApp's protocol.",
  //     "link": "https://github.com/tgalal/yowsup",
  //   }
  // ]`;

  console.log(text);

  return Response.json({ libraries: text });
}
