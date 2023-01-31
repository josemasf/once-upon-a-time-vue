<template>
  <ButtonGenerator @new-story="newStoryHandler" />
  <transition name="fade">
    <div
      v-if="isModalVisible"
      class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div
        @click="onToggle"
        class="absolute bg-black opacity-70 inset-0 z-0 bottom-25"
      ></div>
      <div
        class="w-full p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white dark:bg-gray-800"
      >
        <div>
          <div class="p-3 flex-auto justify-center leading-6">
            <div
              class="mb-4 text-lg text-2xl text-gray-500 dark:text-gray-400 overflow-x-auto max-h-screen"
            >
              <div v-html="story"></div>
            </div>
          </div>
          <div class="p-3 mt-2 text-center space-x-4 md:block">
            <button
              class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
            >
              Save
            </button>
            <button
              @click="onToggle"
              class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ButtonGenerator from "./ButtonGenerator.vue";

const isModalVisible = ref(false);
const story = ref();

const newStoryHandler = (payload: any) => {
  isModalVisible.value = true;

  story.value = payload;
};

const onToggle = () => {
  isModalVisible.value = !isModalVisible.value;
};
</script>
