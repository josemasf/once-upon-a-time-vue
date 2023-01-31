<script setup lang="ts">
import { BookstoreContainer } from "@/components";
</script>

<template>
  <div class="grid gap-2">
    <div>
      <h1
        class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >Story</span
        >
        bookstore.
      </h1>
    </div>
    <BookstoreContainer />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
