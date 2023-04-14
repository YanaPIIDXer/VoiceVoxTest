<script lang="ts" setup>
import PrimeButton from "primevue/button";
import PrimeTextArea from "primevue/textarea";
import DropDown from "primevue/dropdown"
import type { Speaker } from "../interfaces/settings/Speaker";
import { speakers } from "../constants/settings/Speaker";
import { ref } from "vue";

const emits = defineEmits<{
  (el: "on-select", text: string, speaker: Speaker): void
}>();

const text = ref("");
const speaker = ref(speakers[0]);

/**
 * 再生ボタン押下
 */
const onPlay = () => {
  emits("on-select", text.value, speaker.value);
};
</script>

<template>
  <div>
    <PrimeTextArea :auto-resize="true" v-model="text" placeholder="テキストを入力" /><br />
    <DropDown :options="speakers" option-label="name" v-model="speaker" /><br />
    <PrimeButton label="再生" :disabled="!text" @click="onPlay" />
  </div>
</template>

<style lang="sass" scoped>
</style>
