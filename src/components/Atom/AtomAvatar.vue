<template>
  <img
    class="rounded w-36 h-36 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
    :src="props.src"
    :alt="props.name"
    :class="{ 'grayscale-0 border-4 border-yellow-500/75': props.active }"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  src: String,
  active: Boolean,
  name: String,
});
</script>
