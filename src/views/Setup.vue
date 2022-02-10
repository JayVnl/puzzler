<script setup>
import InfoButton from '../components/buttons/InfoButton.vue'
</script>

<template>
  <div class="flex flex-col px-6 py-10 h-full w-full">
    <h1 class="text-center text-3xl">What should be the difficulty of completing the puzzle?</h1>
    <div class="grow"></div>
    <InfoButton title="Simple" info="Collect 4 puzzle pieces" path="/camera" />
    <InfoButton title="Medium" info="Collect 8 puzzle pieces" path="/camera" />
    <InfoButton title="Hard" info="Collect 12 puzzle pieces" path="/camera" />
    <InfoButton title="Ambitious" info="Collect 20 puzzle pieces" path="/camera" />
  </div>
</template>