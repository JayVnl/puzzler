<script setup>
import InfoButton from '../components/buttons/InfoButton.vue'

const data = [
  {
    title: "Simple",
    amount: 4,
  },
  {
    title: "Medium",
    amount: 8,
  },
  {
    title: "Hard",
    amount: 12,
  },
  {
    title: "Ambitious",
    amount: 20,
  }
]
</script>

<template>
  <div class="flex flex-col px-6 py-10 h-full w-full">
    <h1 class="text-center text-3xl">What should be the difficulty of completing the puzzle?</h1>
    <div class="grow"></div>
    <InfoButton
      v-for="(btn, index) in data"
      :key="'infobutton: ' + index"
      :title="btn.title"
      :info="`Collect ${btn.amount} puzzle pieces`"
      path="/camera"
    />
  </div>
</template>