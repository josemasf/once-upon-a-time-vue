const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function storyGenerator(
  input = "I want a story about a dragon, a girl and a dog in japan "
) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${input}`,
    temperature: 0.85,
    max_tokens: 1211,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const { data } = response;

  const text = data.choices[0].text ?? "";

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
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${input}`,
    temperature: 0.85,
    max_tokens: 750,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const { data } = response;

  return data.choices[0].text ?? "No title";
}

export async function imageGenerator(input: string) {
  const response = await openai.createImage({
    prompt: `${input}`,
    n: 1,
    size: "1024x1024",
  });
  return response.data.data[0].url;
}
