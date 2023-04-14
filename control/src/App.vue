<script setup lang="ts">
import PrimeButton from "primevue/button";
import { FetchAudio } from "./classes/FetchAudio";
import { speakers } from "./constants/settings/Speaker";

// 仮
import { ref } from "vue";

const soundRef = ref("");

/**
 * テキスト再生
 * @param text 再生するテキスト
 */
const playSound = async (text: string): Promise<void> => {
  soundRef.value = "";
  const fetchAudio = new FetchAudio(speakers[0], text);
  try {
    const result = await fetchAudio.fetch();
    soundRef.value = result;
  } catch (error) {
    alert("Error");
    console.error(error);
  }
}

/**
 * とりあえず実行
 */
const onExecForNow = (): void => {
  playSound("はろーわーるど")
}
</script>

<template>
  <div class="root">
    <header>
      <h1>VOICEVOX 実験</h1>
    </header>
    <main>
      <PrimeButton label="とりあえず実験" @click="onExecForNow" />
      <template v-if="soundRef">
        <audio :src="soundRef" autoplay />
      </template>
    </main>
  </div>
</template>

<style lang="sass" scoped>
</style>
