<template>
  <div>
    <AtomButton @click.once="handleClick" v-if="!isLoading">
      {{ $t("generateStory") }}
    </AtomButton>
    <ButtonOompa v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storyGenerator } from "@/services/ai";
import { ButtonOompa, AtomButton } from "@/components";
import { useI18n } from "vue-i18n";
import { useMainStore } from "@/store";

const { t } = useI18n({
  inheritLocale: true,
  useScope: "global",
});

const emit = defineEmits(["new-story"]);

const isLoading = ref(false);
const isGenerating = ref(false);

const mainStore = useMainStore();

const handleClick = async () => {
  let characters = "";
  let places = "";

  mainStore.getCharactersActived().forEach((character, index) => {
    characters +=
      index % 2 !== 0 ? ` with ${character.name} ` : ` ${character.name} `;
  });

  mainStore.getPlacesActived().forEach((place) => {
    places += ` and use this locations  ${place.name} `;
  });

  mainStore.getItemsActived().forEach((items) => {
    places += ` and in the story someone have a ${items.name} `;
  });

  const text =
    "I want a story in spanish that starts with once upon a time about " +
    characters +
    places;

  isLoading.value = true;

  if (!isGenerating.value) {
    isGenerating.value = true;
    const story = await storyGenerator(text);

    mainStore.saveStory({
      story,
      characters: mainStore.getCharactersActived(),
      locations: mainStore.getPlacesActived(),
      items: mainStore.getItemsActived(),
    });

    isLoading.value = false;

    emit("new-story", story);
  }
};
</script>
