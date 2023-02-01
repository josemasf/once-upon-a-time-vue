<template>
  <div>
    <button @click="$emit('click')" type="button" :class="classButton">
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  isButtonOompa: Boolean,
});

const classButton = computed(() =>
  props.isButtonOompa
    ? "pointer-none w-80 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
    : "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
);
</script>
