<script setup lang="ts">
import { BookstoreContainer, AtomButton } from "@/components";
import { useMainStore } from "@/store";

const mainStore = useMainStore();
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
    <BookstoreContainer v-if="mainStore.getStories().value.length > 0" />
    <main
      v-else
      class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]"
    >
      <h1 class="text-9xl font-extrabold text-white tracking-widest">
        bookstore
      </h1>
      <div class="bg-[#FF6A3D] px-2 text-3xl rounded rotate-12 absolute">
        Empty
      </div>
      <AtomButton primay class="mt-4">
        <router-link to="/">Go Home</router-link>
      </AtomButton>
    </main>
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
