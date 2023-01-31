<template>
  <p class="text-2xl">{{ props.title }}</p>
  <div
    class="w-full grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4 content-evenly justify-center"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
