<template>
  <SelectableContainer :title="$t('items')">
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
import { AtomAvatar, SelectableContainer } from "@/components";

import { useMainStore } from "@/store";
import type { Item } from "@/types";

const mainStore = useMainStore();

const clickHandler = (item: Item) => {
  mainStore.toggleItems(item);
};
</script>
