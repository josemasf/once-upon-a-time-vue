export async function getTTS() {
  const encodedParams = new URLSearchParams();
  encodedParams.append(
    "src",
    ' Once upon a time, in a small village in Japan, a dog named Shiba was raised by a gargoyle named Chi. Shiba loved Chi, and Chi loved Shiba. They were best friends.  One day, Shiba was walking through the forest when he heard a strange sound. It sounded like a dog barking. Shiba followed the sound until he came to a clearing. In the clearing was a dog. The dog was a shiba. Shiba sniffed the other dog and realized that it was his friend Chi. Chi had a gargoyle friend. The gargoyle was a green color and had sharp claws. The gargoyle was named Yama.  Shiba and Chi played together all day. When the sun set, Shiba went to bed. Chi stayed up and played with Yama. The two friends had a wonderful time playing together.  In the morning, Shiba went to wake up Chi. Chi was still asleep. Shiba nudged Chi until he finally opened his eyes.  "Wake up, Chi! It\'s time to go for a walk."  Chi got up and dressed. He packed a small bag with some food. Then, he and Shiba walked through the forest. They played together all day long.  In the evening, when Chi was getting ready for bed, he couldn\'t find Shiba. Shiba was sleeping in the sun, but he wasn\'t alone. In the forest, Chi had made a nest for Shiba with some moss and branches. Chi had even placed a blanket in the nest for Shiba to sleep on.  Shiba was so happy to have Chi with him. He had never spent a day without his friend before. He knew that Chi would always be there for him.  One day, many years later, a dog named Jack and a gargoyle named Norman walked into the forest. They saw a shiba and a chi sitting in the clearing.  "Hello!" Jack said. "We\'re looking for a place to play."  "I\'m sorry," Chi replied. "Shiba and I are already busy playing today."  Norman bowed and then left.  Jack was surprised. He had never met a gargoyle before. He knew that Chi and Shiba were playing together in the forest, but he couldn\'t believe it. He knew that gargoyles were usually very serious and weren\'t interested in playing with dogs.  He wondered why Chi and Shiba were playing together. Then, it hit him. Chi had a gargoyle friend! Norman was a green gargoyle. Jack and Norman decided to play a game together. They each picked a color and ran around the forest looking for other dogs and their gargoyles that matched their color.'
  );
  encodedParams.append("hl", "en-gb");
  encodedParams.append("r", "0");
  encodedParams.append("c", "mp3");
  encodedParams.append("f", "ulaw_44khz_stereo");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "37tBguLOEDmshHUPiqPX6JRnfb4Np1elamejsnieeeDjgjSVcx",
      "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
    },
    body: encodedParams,
  };

  fetch(
    "https://voicerss-text-to-speech.p.rapidapi.com/?key=567d1b4c6da941d791fd3da8e5da4ffd",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const audio = new Audio(response);
      audio.play();
    })
    .catch((err) => console.error(err));
}
