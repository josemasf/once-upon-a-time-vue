import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    characteres: useStorage("characteres", [
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
    ]),
    places: useStorage("places", [
      { name: "paris", active: false },
      { name: "japan", active: false },
      { name: "village", active: false },
      { name: "far-far-land", active: false },
      { name: "planet", active: false },
      { name: "river", active: false },
      { name: "countryside", active: false },
    ]),
    items: useStorage("items", [
      { name: "treasure", active: false },
      { name: "magic-stone", active: false },
    ]),
    stories: useStorage("stories", []),
  }),
  getters: {
    getCharacters: (state) => state.characteres,
    getCharactersActived: (state) =>
      state.characteres.filter((character) => character.active),
    getPlaces: (state) => state.places,
    getPlacesActived: (state) =>
      state.places.filter((location) => location.active),
    getItems: (state) => state.items,
    getItemsActived: (state) => state.items.filter((items) => items.active),
    getStories: (state) => state.stories,
  },
  actions: {
    toggleCharacter(character) {
      const status = this.characteres.find(
        (char) => char.name === character.name
      ).active;

      this.characteres.find((char) => char.name === character.name).active =
        !status;
    },
    toggleLocation(item) {
      const status = this.places.find(
        (place) => place.name === item.name
      ).active;

      this.places.find((place) => place.name === item.name).active = !status;
    },
    toggleItems(item) {
      const status = this.items.find((it) => it.name === item.name).active;

      this.items.find((it) => it.name === item.name).active = !status;
    },
    saveStory(story) {
      this.stories.push(story);
    },
    getStory(id) {
      return this.stories[id];
    },
  },
});
