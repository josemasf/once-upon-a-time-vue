<template>
  <SelectableContainer :title="$t('places')">
    <AtomAvatar
      :src="`/imgs/${place.name}.webp`"
      :alt="place.name"
      :active="place.active"
      v-for="place in mainStore.getPlaces().value"
      @click="clickHandler(place)"
      :key="place.name"
    />
  </SelectableContainer>
</template>

<script setup lang="ts">
import { AtomAvatar, SelectableContainer } from "@/components";
import { useMainStore } from "@/store";

const mainStore = useMainStore();

const clickHandler = (item: any) => {
  mainStore.toggleLocation(item);
};
</script>
