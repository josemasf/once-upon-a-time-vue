import { rest } from "msw";

const handlers = [
  rest.post(`http://localhost:3000/api/generate`, (req, res, context) => {
    console.log("aa");
    return res(
      context.status(200),
      context.json({
        id: "7bb45a7f-4d6b-4d36-921f-a89dad71b290",
        generations: [
          {
            id: "664de1b5-03d7-4535-9f7b-c25ff2e91b98",
            text: "and make a story\nOnce upon a time in the old Kingdom of Japan, a poor family of three lived in a tiny hut in the forests of the hills. The father was a proud hunter, and the mother a hardworking weaver. They were happy and content, but had little else but each other and their small cottage.\n\nOne day, as the family was out gathering wood, they came across a strange, shiny object in the forest. It was a large, black stone, and when the father picked it up and rubbed it, a beautiful, bright light radiated from it. The father was amazed and took the stone home.\n\nHe showed the stone to his wife, and they both realized that it was magic. They knew that with this magic stone, they could accomplish anything they set their minds to. So, the next day, the mother took the stone to town and sold it for the most beautiful dress she could find. She brought it home and wore it to a fancy banquet, where she met a handsome man named Taro.\n\nTaro was a kind and generous man, and he fell in love with the lovely weaver. They married and started a family of their own. The stone was passed down through the generations, and it was used for all sorts of magical things. The family was happy and content, and their love for one another grew deeper with each passing day.\n\nOne day, as the family was out for a walk in the forest, they came across a group of mischievous monkeys. The mother warned the children not to be scared of them, but they were nonetheless frightened. The mother quickly ran to the stone and held it out to the monkeys, commanding them to leave the family alone. The monkeys did as they were told, and the family was grateful for the mother's quick thinking.\n\nFrom that day on, the stone was always close to the mother's heart, and she used it to protect her family from harm. She was known throughout the land as the strongest and most powerful mage of all, and her name was revered for all time.",
          },
        ],
        prompt:
          "I want a story that starts with once upon a time about  lion  with monkey  and use this locations  japan  and in the story someone have a magic-stone",
      })
    );
  }),
];

export { handlers, rest };
