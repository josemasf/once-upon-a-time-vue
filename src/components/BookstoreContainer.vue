<template>
  <div
    class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center"
  >
    <StoryCard
      v-for="(story, index) in mainStore.getStories().value"
      :elements="[...story.characters, ...story.locations, ...story.items]"
      :story="story.story"
      :id="index"
      @open-story="openStoryHandler"
      :key="index"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        v-if="story.title"
      >
        {{ story.title }}
      </h5>
      <div
        v-html="story.story"
        class="max-h-[260px] text-clip overflow-hidden"
      />
    </StoryCard>
  </div>
</template>

<script setup lang="ts">
import { StoryCard } from "@/components";

import { useMainStore } from "@/store";
import { ref } from "vue";

const mainStore = useMainStore();

const openStoryHandler = (payload: any) => {
  story.value = payload;
};

const story = ref();
</script>
