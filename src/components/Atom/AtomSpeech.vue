<template>
  <div>
    <div v-if="!isSupported">
      Your browser does not support SpeechSynthesis API,
      <a href="https://caniuse.com/mdn-api_speechsynthesis" target="_blank"
        >more details</a
      >
    </div>
    <div v-else>
      <label class="font-bold mr-2 hidden">Language</label>
      <div
        bg="$vp-c-bg"
        border="$vp-c-divider 1"
        inline-flex
        items-center
        relative
        rounded
        class="hidden"
      >
        <i i-carbon-language absolute left-2 opacity-80 pointer-events-none />
        <select
          v-model="voice"
          px-8
          border-0
          bg-transparent
          h-9
          rounded
          appearance-none
        >
          <option bg="$vp-c-bg" disabled>Select Language</option>
          <option
            v-for="(voice, i) in voices"
            :key="i"
            bg="$vp-c-bg"
            :value="voice"
          >
            {{ `${voice.name} (${voice.lang})` }}
          </option>
        </select>
        <i
          i-carbon-chevron-down
          absolute
          right-2
          opacity-80
          pointer-events-none
        />
      </div>

      <div class="mt-2 flex gap-2">
        <AtomButton @click="play()" v-if="!isPlaying">
          {{ status === "pause" ? "Continue" : "Speak" }}
        </AtomButton>
        <AtomButton @click="pause()" v-if="isPlaying"> Pause </AtomButton>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable no-undef -->
<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useSpeechSynthesis } from "@vueuse/core";
import AtomButton from "./AtomButton.vue";
const voice = ref<SpeechSynthesisVoice>(
  undefined as unknown as SpeechSynthesisVoice
);

const props = defineProps({
  text: String,
});

const text = computed(() => props.text);
const { isSupported, isPlaying, status, toggle, speak } = useSpeechSynthesis(
  text.value ?? "",
  {
    voice,
  }
);

let synth: SpeechSynthesis;
const voices = ref<SpeechSynthesisVoice[]>([]);
onMounted(() => {
  if (isSupported.value) {
    // load at last
    setTimeout(() => {
      synth = window.speechSynthesis;
      voices.value = synth.getVoices();
      voice.value = voices.value[0];
    });
  }
});
function play() {
  if (status.value === "pause") {
    window.speechSynthesis.resume();
  } else {
    speak();
  }
}
function pause() {
  //window.speechSynthesis.cancel();
  toggle(false);
}
</script>
