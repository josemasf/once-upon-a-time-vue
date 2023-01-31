<template>
  <SelectableContainer :title="'Items'">
    <AtomAvatar
      :src="`/imgs/${item.name}.png`"
      :alt="item.name"
      :active="item.active"
      v-for="item in mainStore.getItems"
      @click="clickHandler(item)"
      :key="item.name"
    />
  </SelectableContainer>
</template>

<script setup lang="ts">
import AtomAvatar from "./Atom/AtomAvatar.vue";
import SelectableContainer from "./SelectableContainer.vue";

import { useMainStore } from "../store";

const mainStore = useMainStore();

const clickHandler = (item: any) => {
  mainStore.toggleItems(item);
};
</script>
