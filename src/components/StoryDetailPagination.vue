<template>
  <div class="items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
    <span class="block"
      >Page {{ props.currentPage }} of {{ props.totalPages }}</span
    >
    <div class="space-x-1">
      <a
        title="previous"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
        :href="previous"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </a>
      <a
        title="next"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
        :href="next"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
});

const id = ref(Number(window.location.toString().split("/").reverse()[0]));

const previous = computed(() => {
  if (id.value - 1 >= 0) return `/bookstore/${id.value - 1}`;
  else return `/bookstore/${id.value}`;
});
const next = computed(() => {
  if (props.totalPages && id.value + 1 < props.totalPages)
    return `/bookstore/${id.value + 1}`;
  else return `/bookstore/${id.value}`;
});
</script>
