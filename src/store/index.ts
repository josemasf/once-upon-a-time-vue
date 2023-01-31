import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { reactive } from "vue";
import type { Story } from "@/types";

export const useMainStore = defineStore("main", () => {
  const characteres = reactive(
    useStorage("characteres", [
      { name: "boy", active: false },
      { name: "cowboy", active: false },
      { name: "dog", active: false },
      { name: "dragon", active: false },
      { name: "drawing", active: false },
      { name: "gargoyle", active: false },
      { name: "girl", active: false },
      { name: "king", active: false },
      { name: "lion", active: false },
      { name: "monkey", active: false },
      { name: "thief", active: false },
      { name: "villain", active: false },
    ])
  );
  const places = reactive(
    useStorage("places", [
      { name: "paris", active: false },
      { name: "japan", active: false },
      { name: "village", active: false },
      { name: "far-far-land", active: false },
      { name: "planet", active: false },
      { name: "river", active: false },
      { name: "countryside", active: false },
    ])
  );
  const items = reactive(
    useStorage("items", [
      { name: "treasure", active: false },
      { name: "magic-stone", active: false },
    ])
  );

  const stories = reactive(useStorage("stories", [] as Array<Story>));

  const getCharacters = () => characteres;
  const getCharactersActived = () =>
    characteres.value.filter((character) => character.active);

  const getPlaces = () => places;
  const getPlacesActived = () =>
    places.value.filter((location) => location.active);
  const getItems = () => items;
  const getItemsActived = () => items.value.filter((items) => items.active);
  const getStories = () => stories;

  const toggleCharacter = (character: { name: string }) => {
    const characterInfo = characteres.value.find(
      (char) => char.name === character.name
    );

    if (characterInfo) {
      const status = characterInfo.active;

      characterInfo.active = !status;
    }
  };
  const toggleLocation = (item: { name: string }) => {
    const placeInfo = places.value.find((place) => place.name === item.name);

    if (placeInfo) {
      const status = placeInfo.active;

      placeInfo.active = !status;
    }
  };

  const toggleItems = (item: { name: string }) => {
    const itemInfo = items.value.find((it) => it.name === item.name);

    if (itemInfo) {
      const status = itemInfo.active;

      itemInfo.active = !status;
    }
  };

  const saveStory = (story: Story) => {
    stories.value.push(story);
  };

  const getStory = (id: number) => {
    return stories.value[id];
  };

  return {
    characteres,
    items,
    places,
    getCharacters,
    getCharactersActived,
    getPlaces,
    getPlacesActived,
    getItems,
    getItemsActived,
    getStories,
    toggleCharacter,
    toggleItems,
    toggleLocation,
    saveStory,
    getStory,
  };
});
