import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export const dynamic = "force-dynamic";

export async function POST() {
  // const { text } = await generateText({
  //   model: openai("gpt-3.5-turbo-0125"),
  //   system: "You are a recommended programming libraries",
  //   prompt: `Request: Libraries for working with whastapp
  // Languages: JavaScript, Python
  // Author/Organization: Any
  // License: Any
  // You must respond with an array of objects with the fields: name, language, description, link, publication_date (format yyyy-mm-dd). Answer only with the array.`,
  // });

  // console.log(text);

  const text = `[
      {
          "name": "whatsapp-web.js",
          "language": "JavaScript",
          "description": "A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app.",
          "link": "https://github.com/pedroslopez/whatsapp-web.js",
          "publication_date": "2020-08-28"
      },
      {
          "name": "yowsup",
          "language": "Python",
          "description": "A Python library that enables building applications which use WhatsApp service.",
          "link": "https://github.com/tgalal/yowsup",
          "publication_date": "2012-11-21"
      },
      {
          "name": "Chat-API",
          "language": "PHP",
          "description": "A PHP library to send and receive messages using WhatsApp.",
          "link": "https://github.com/mgp25/Chat-API",
          "publication_date": "2014-11-06"
      }
  ]`;

  return Response.json({ libraries: text });
}
