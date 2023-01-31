<script setup lang="ts">
import {
  TheCharacters,
  ThePlaces,
  TheItems,
  StoriesGenerator,
} from "../components";
</script>

<template>
  <main>
    <div class="grid gap-2">
      <div>
        <h1
          class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
            >One upon a time</span
          >
          a story.
        </h1>
      </div>

      <TheCharacters />
      <ThePlaces />
      <TheItems />

      <div class="flex spac-x-2 justify-center fixed bottom-5 right-10">
        <StoriesGenerator />
      </div>
    </div>
  </main>
</template>
