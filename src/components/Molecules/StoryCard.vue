<template>
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
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      <slot />
    </p>
    <dd
      class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5 m-3"
    >
      <img
        :src="`/imgs/${element.name}.webp`"
        :alt="element.name"
        class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
        loading="lazy"
        v-for="element in elements"
        :key="element.name"
      />
    </dd>

    <RouterLink
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      :to="`/bookstore/${props.id}`"
    >
      Read more
      <svg
        aria-hidden="true"
        class="w-4 h-4 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  story: String,
  id: Number,
  elements: Array<{ name: string; active: boolean }>,
});
</script>

<style>
p {
  margin: 5px auto;
  font-size: 1.2em;
}
</style>
