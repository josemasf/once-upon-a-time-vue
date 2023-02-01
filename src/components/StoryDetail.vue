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

      <p
        class="mb-3 font-normal text-gray-700 dark:text-gray-400"
        v-html="story.story"
      ></p>
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
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import type { Story } from "@/types";
import { useMainStore } from "../store";
import StoryDetailPagination from "./StoryDetailPagination.vue";
import { useRoute } from "vue-router";

import { titleGenerator } from "@/services/ai";

const story: Story = reactive({
  story: "",
  characters: [],
  locations: [],
  items: [],
});

const router = useRoute();

const id = computed(() => Number(router.params.id));
const totalStories = ref();
const currentPage = ref(id.value + 1);

const mainStore = useMainStore();

onMounted(async () => {
  totalStories.value = mainStore.getStories().value.length;

  const response = mainStore.getStory(id.value);

  story.story = response.story;
  story.characters = response.characters;
  story.locations = response.locations;
  story.items = response.items;
  if (!story.title) createTitle();
});

watch(id, (newId) => {
  const response = mainStore.getStory(newId);

  story.story = response.story;
  story.characters = response.characters;
  story.locations = response.locations;
  story.items = response.items;
  story.title = response.title;

  currentPage.value = id.value + 1;

  if (!story.title) createTitle();
});
const pageChangedHandler = (payload: number) => {
  currentPage.value = payload;
};
const createTitle = async () => {
  story.title = await titleGenerator(
    `give me a short title for this story " ${story.story}"`
  );

  mainStore.setStories(id.value, story);
};
</script>

<style>
p {
  margin: 5px auto;
  font-size: 1.2em;
}
</style>
