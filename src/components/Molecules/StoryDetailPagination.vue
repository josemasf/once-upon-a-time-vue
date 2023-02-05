<template>
  <div class="items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
    <span class="block">Page {{ currentPage }} of {{ props.totalPages }}</span>
    <div class="space-x-1">
      <router-link
        title="previous"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
        :to="previous"
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
      </router-link>

      <router-link
        title="next"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
        :to="next"
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
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
});

const currentPage = computed(() => props.currentPage);

const router = useRoute();

const emits = defineEmits(["page-changed"]);

const previous = computed(() => {
  if (Number(router.params.id) - 1 >= 0) {
    emits("page-changed", Number(router.params.id) - 1);
    return `/bookstore/${Number(router.params.id) - 1}`;
  } else return `/bookstore/${Number(router.params.id)}`;
});
const next = computed(() => {
  if (props.totalPages && Number(router.params.id) <= props.totalPages - 1) {
    emits("page-changed", Number(router.params.id) + 1);
    return `/bookstore/${Number(router.params.id) + 1}`;
  } else return `/bookstore/${Number(router.params.id)}`;
});
</script>
