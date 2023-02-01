<template>
  <ButtonGenerator @new-story="newStoryHandler" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ButtonGenerator } from "@/components";
import { useMainStore } from "../store";
import router from "@/router";

const story = ref();

const newStoryHandler = (payload: string) => {
  const mainStore = useMainStore();

  router.push(`/bookstore/${mainStore.getStories().value.length - 1}`);

  story.value = payload;
};
</script>
