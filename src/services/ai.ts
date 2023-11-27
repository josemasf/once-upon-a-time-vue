const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function storyGenerator(
  input = "I want a story about a dragon, a girl and a dog in japan "
) {
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo",
    prompt: `${input}`,
    temperature: 0.85,
    max_tokens: 1211,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const text = response.choices[0].text ?? "";

  return formatStory(text);
}

function formatStory(text: string) {
  const textFormat = text
    .replaceAll("\n\n", "\n")
    .replaceAll("\n", "---")
    .replace("---", "");

  let textParra = "";

  textFormat.split("---").forEach((p: string) => (textParra += `<p>${p}</p>`));

  if (!textParra.startsWith("<p>")) textParra = "<p>" + textParra;

  return textParra;
}

export async function titleGenerator(input: string) {
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo",
    prompt: `${input}`,
    temperature: 0.85,
    max_tokens: 750,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.choices[0].text ?? "No title";
}

export async function imageGenerator(input: string) {
  const response = await openai.images.generate({
    prompt: `${input}`,
    n: 1,
    size: "1024x1024",
  });
  return response.data[0].url;
}
