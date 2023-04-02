<template>
  <article
    class="max-w-2/3 px-6 py-10 mx-auto space-y-16 dark:bg-gray-800 dark:text-gray-50"
  >
    <div
      class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          v-if="story.title"
        >
          {{ story.title }}
        </h5>
        <div class="m-8 rounded w-2/3 animate-pulse h-32" v-else>
          <div class="px-4 py-8 dark:bg-gray-900">
            <div class="w-full h-6 rounded dark:bg-gray-700"></div>
          </div>
        </div>
      </a>
      <div
        role="status"
        class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
        v-if="!img"
      >
        <div
          class="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700"
        >
          <svg
            class="w-12 h-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path
              d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
            />
          </svg>
        </div>
      </div>
      <div v-else>
        <img :src="img" />
      </div>

      <div
        class="mb-3 font-normal text-gray-700 dark:text-gray-400 content-story"
        v-html="story.story"
      ></div>
      <dd
        class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5 m-3"
      >
        <img
          :src="`/imgs/${element.name}.webp`"
          :alt="element.name"
          class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
          loading="lazy"
          v-for="element in [
            ...story.locations,
            ...story.items,
            ...story.characters,
          ]"
          :key="element.name"
        />
      </dd>
    </div>
  </article>
  <StoryDetailPagination
    :current-page="currentPage"
    :total-pages="totalStories"
    @page-changed="pageChangedHandler"
  />
  <AtomSpeech :text="theStory" :key="id"></AtomSpeech>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import type { Story } from "@/types";
import { useMainStore } from "@/store";
import { StoryDetailPagination, AtomSpeech } from "@/components";
import { useRoute } from "vue-router";

import { titleGenerator, imageGenerator } from "@/services/ai";

const story: Story = reactive({
  story: "",
  characters: [],
  locations: [],
  items: [],
});

const router = useRoute();

const id = computed(() => Number(router.params.id));
const totalStories = ref();
const img = ref();
const currentPage = ref(id.value + 1);

const mainStore = useMainStore();

onMounted(async () => {
  totalStories.value = mainStore.getStories().value.length;

  setStory(id.value);
});

watch(id, (newId) => {
  setStory(newId);
});

const setStory = (id: number) => {
  const response = mainStore.getStory(id);

  story.story = response.story;
  story.characters = response.characters;
  story.locations = response.locations;
  story.items = response.items;
  story.title = response.title;

  if (!story.title) {
    createTitle();
    createImage();
  }
};
const pageChangedHandler = (payload: number) => {
  currentPage.value = payload;
};
const createTitle = async () => {
  story.title = await titleGenerator(
    `give me a short title for this story " ${story.story}"`
  );

  mainStore.setStories(Number(router.params.id), story);
};
const createImage = async () => {
  const { characters, locations, items } = story;

  let propomt = "";

  characters.forEach((character) => (propomt += " " + character.name));
  locations.forEach((location) => (propomt += " " + location.name));
  items.forEach((item) => (propomt += " " + item.name));

  img.value = await imageGenerator(propomt);
};

const theStory = computed(() =>
  story.story.replace("<p>", "").replace("</p>", "")
);
</script>

<style scoped>
.content-story :deep(p) {
  margin: 15px auto;
}
</style>
