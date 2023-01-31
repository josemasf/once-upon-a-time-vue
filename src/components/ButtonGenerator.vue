<template>
  <div>
    <button
      @click="handleClick"
      v-if="!isLoading"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
    >
      Generate a story
    </button>

    <button
      v-else
      type="button"
      class="pointer-none w-80 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
    >
      Our Oompa Loompas are creating an amazing story...
      <Oompa />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storyGenerator } from "../services/ai";
import { Oompa } from "./Atom/";

import { useMainStore } from "../store";

const emit = defineEmits(["new-story"]);

const isLoading = ref(false);

const mainStore = useMainStore();

const handleClick = async () => {
  let characters = "";
  let places = "";

  mainStore.getCharactersActived.forEach((character, index) => {
    characters +=
      index % 2 !== 0 ? ` with ${character.name} ` : ` ${character.name} `;
  });

  mainStore.getPlacesActived.forEach((place, index) => {
    places += ` and use this locations  ${place.name} `;
  });

  mainStore.getItemsActived.forEach((items, index) => {
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
    characters: mainStore.getCharactersActived,
    locations: mainStore.getPlacesActived,
    items: mainStore.getItemsActived,
  });
  isLoading.value = false;

  emit("new-story", story);
};
</script>
