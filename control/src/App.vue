<script setup lang="ts">
import PrimeButton from "primevue/button";

/**
 * とりあえず実行
 */
const onExecForNow = async () => {
  alert("とりあえず実行");
}
</script>

<template>
  <div class="root">
    <header>
      <h1>VOICEVOX 実験</h1>
    </header>
    <main>
      <PrimeButton label="とりあえず実験" @click="onExecForNow" />
    </main>
  </div>
</template>

<style lang="sass" scoped>
</style>
