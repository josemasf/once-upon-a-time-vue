const COHERE_API_KEY = import.meta.env.PUBLIC_COHERE_API_KEY;
const COHERE_API_GENERATE_URL = "https://api.cohere.ai/generate";

export async function storyGenerator(
  input = "I want a story about a dragon, a girl and a dog in japan "
) {
  const data = {
    model: "command-medium-nightly",
    prompt: `${input}`,
    max_tokens: 1400,
    temperature: 1.3,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: "NONE",
  };

  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: "POST",
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  const { text } = response.generations[0];

  return formatStory(text);
}

function formatStory(text) {
  let textFormat = text
    .substr(text.search(/once/i), text.length)
    .replaceAll("\n\n", "\n")
    .replaceAll("\n", "---")
    .replace("---", "");

  let textParra = "";

  textFormat.split("---").forEach((p) => (textParra += `<p>${p}</p>`));

  if (!textParra.startsWith("<p>")) textParra = "<p>" + textParra;

  return textParra;
}

export async function titleGenerator(input) {
  const data = {
    model: "command-xlarge-20221108",
    prompt: `${input}`,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: "NONE",
  };

  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: "POST",
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  const { text } = response.generations[0];

  return text;
}
