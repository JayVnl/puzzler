<script setup>
import NormalButton from '../components/buttons/NormalButton.vue'
</script>

<template>
  <div class="flex flex-col px-9 py-16 h-full w-full">
    <h1 class="text-center text-4xl">Puzzle Finder</h1>
    <div class="grow"></div>
    <NormalButton title="Start" path="/setup" />
    <NormalButton title="Quick Guide" path="/guide" />
  </div>
</template>