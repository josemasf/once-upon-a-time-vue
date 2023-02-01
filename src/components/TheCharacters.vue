<template>
  <SelectableContainer :title="'Characters'">
    <AtomAvatar
      :src="`/imgs/${character.name}.webp`"
      :alt="character.name"
      :active="character.active"
      v-for="character in mainStore.getCharacters().value"
      :key="character.name"
      @click="clickHandler(character)"
    />
  </SelectableContainer>
</template>

<script setup lang="ts">
import AtomAvatar from "./Atom/AtomAvatar.vue";
import SelectableContainer from "./SelectableContainer.vue";

import { useMainStore } from "../store";

const mainStore = useMainStore();

const clickHandler = (item: any) => {
  mainStore.toggleCharacter(item);
};
</script>
