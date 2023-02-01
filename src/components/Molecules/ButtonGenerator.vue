<template>
  <div>
    <AtomButton @click="handleClick" v-if="!isLoading">
      Generate a story
    </AtomButton>
    <ButtonOompa v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storyGenerator } from "@/services/ai";
import { ButtonOompa, AtomButton } from "@/components";

import { useMainStore } from "../../store";

const emit = defineEmits(["new-story"]);

const isLoading = ref(false);

const mainStore = useMainStore();

const handleClick = async () => {
  let characters = "";
  let places = "";

  mainStore.getCharactersActived().forEach((character, index) => {
    characters +=
      index % 2 !== 0 ? ` with ${character.name} ` : ` ${character.name} `;
  });

  mainStore.getPlacesActived().forEach((place) => {
    places += ` and use this locations  ${place.name} `;
  });

  mainStore.getItemsActived().forEach((items) => {
    places += ` and in the story someone have a ${items.name} `;
  });

  const text =
    "I want a story that starts with once upon a time about " +
    characters +
    places;

  isLoading.value = true;
  const value = await storyGenerator(text);

  const story = value;

  mainStore.saveStory({
    story,
    characters: mainStore.getCharactersActived(),
    locations: mainStore.getPlacesActived(),
    items: mainStore.getItemsActived(),
  });

  isLoading.value = false;

  emit("new-story", story);
};
</script>
