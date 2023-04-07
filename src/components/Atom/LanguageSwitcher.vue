<template>
  <div>
    <div class="flex">
      <button
        class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
        @click="showOptions = !showOptions"
      >
        <img
          :src="selectedLanguage.flag"
          alt="{{ selectedLanguage.language }} Flag"
        />

        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 fixed right-8 mt-10"
        :class="{ hidden: showOptions === false }"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="states-button"
        >
          <li
            v-for="option in languageOptions"
            :key="option.language"
            @click="changeLanguage(option)"
          >
            <button
              type="button"
              class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div class="inline-flex items-center w-4 h-4 ml-1">
                <img :src="option.flag" :alt="`${option.language}`" />
                <span class="ml-5">{{ option.language }}</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-for="option in languageOptions"
      :key="option.language"
      @click="changeLanguage(option)"
      class="hidden"
    >
      <img :src="option.flag" alt="{{ option.language }} Flag" />
    </div>
  </div>
</template>

<script setup lang="ts">
import spainFlag from "@/assets/flags/4x3/es.svg";
import ukFlag from "@/assets/flags/4x3/gb.svg";
import franceFlag from "@/assets/flags/4x3/fr.svg";
import euskadiFlag from "@/assets/flags/4x3/es-pv.svg";

import { useI18n } from "vue-i18n";
import { reactive, ref } from "vue";

const { locale } = useI18n({
  inheritLocale: true,
  useScope: "global",
});

const showOptions = ref(false);

const selectedLanguage = reactive({
  language: "English",
  flag: ukFlag,
  code: "en",
});

const languageOptions = [
  { language: "Spanish", flag: spainFlag, code: "es" },
  { language: "English", flag: ukFlag, code: "en" },
  { language: "French", flag: franceFlag, code: "fr" },
  { language: "Basque", flag: euskadiFlag, code: "es-pv" },
];

function changeLanguage(language: any) {
  locale.value = language.code;
  showOptions.value = false;

  selectedLanguage.code = language.code;
  selectedLanguage.flag = language.flag;
  selectedLanguage.language = language.language;
}
</script>
