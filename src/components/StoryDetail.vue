<template>
  <article
    class="max-w-2/3 px-6 py-10 mx-auto space-y-16 dark:bg-gray-800 dark:text-gray-50"
  >
    <div
      class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#" v-if="props.title">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ props.title }}
        </h5>
      </a>
      <p
        class="mb-3 font-normal text-gray-700 dark:text-gray-400"
        v-html="story.content"
      ></p>
      <dd
        class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5 m-3"
      >
        <img
          :src="`.././imgs/${element.name}.png`"
          :alt="element.name"
          class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
          loading="lazy"
          v-for="element in story.elements"
        />
      </dd>
    </div>
  </article>
  <StoryDetailPagination :current-page="id + 1" :total-pages="totalStories" />
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useMainStore } from "../store";
import StoryDetailPagination from "./StoryDetailPagination.vue";

const props = defineProps({
  title: String,
});

const story = reactive({
  content: "",
  elements: [],
});

const id = Number(window.location.toString().split("/").reverse()[0]);

const totalStories = ref();

onMounted(async () => {
  const mainStore = useMainStore();

  totalStories.value = mainStore.getStories.length;

  const response = await mainStore.getStory(id);

  story.content = response.story;

  story.elements = [
    ...response.characters,
    ...response.locations,
    ...response.items,
  ];
});
</script>

<style>
p {
  margin: 5px auto;
  font-size: 1.2em;
}
</style>
