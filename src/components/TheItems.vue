<template>
  <SelectableContainer :title="'Items'">
    <AtomAvatar
      :src="`/imgs/${item.name}.webp`"
      :alt="item.name"
      :active="item.active"
      v-for="item in mainStore.getItems().value"
      @click="clickHandler(item)"
      :key="item.name"
    />
  </SelectableContainer>
</template>

<script setup lang="ts">
import AtomAvatar from "./Atom/AtomAvatar.vue";
import SelectableContainer from "./SelectableContainer.vue";

import { useMainStore } from "../store";
import type { Item } from "@/types";

const mainStore = useMainStore();

const clickHandler = (item: Item) => {
  mainStore.toggleItems(item);
};
</script>
