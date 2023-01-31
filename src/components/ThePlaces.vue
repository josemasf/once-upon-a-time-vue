<template>
  <SelectableContainer :title="'Places'">
    <AtomAvatar
      :src="`/imgs/${place.name}.png`"
      :alt="place.name"
      :active="place.active"
      v-for="place in mainStore.getPlaces"
      @click="clickHandler(place)"
      :key="place.name"
    />
  </SelectableContainer>
</template>

<script setup lang="ts">
import AtomAvatar from "./Atom/AtomAvatar.vue";
import SelectableContainer from "./SelectableContainer.vue";

import { useMainStore } from "../store";

const mainStore = useMainStore();

const clickHandler = (item: any) => {
  mainStore.toggleLocation(item);
};
</script>
