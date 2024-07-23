import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { prompt, languages, licenses } = await request.json();

  // const { text } = await generateText({
  //   model: openai("gpt-3.5-turbo-0125"),
  //   system: "You are a recommended programming libraries",
  //   prompt: `Request: ${prompt}
  //   Languages: ${languages}
  //   Author/Organization: Any
  //   License: ${licenses}
  //   You must respond with an array of objects with the fields: name, language, description, link, publication_date (format yyyy-mm-dd). Answer only with the array. Delivers 1 library per language.`,
  // });

  // console.log(text);

  const text = `[
    {
      "name": "Nodemailer",
      "language": "JavaScript",
      "description": "A module for Node.js applications to allow easy email sending.",
      "link": "https://nodemailer.com/",
      "publication_date": "2021-09-15"
    },
    {
      "name": "Emails",
      "language": "TypeScript",
      "description": "A TypeScript library for sending emails with ease.",
      "link": "https://github.com/emails-ts/emails",
      "publication_date": "2021-11-20"
    },
    {
      "name": "smtplib",
      "language": "Python",
      "description": "A built-in SMTP library in Python for sending emails.",
      "link": "https://docs.python.org/3/library/smtplib.html",
      "publication_date": "2021-03-10"
    }
  ]`;

  return Response.json({ libraries: text });
}
