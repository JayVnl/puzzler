<script setup>
import router from '../../router';

defineProps({
  title: String,
  path: String
})

function navigateTo(path) {
  router.push(path);
}
</script>

<template>
  <div
    @click="navigateTo(path)"
    class="flex justify-center items-center relative w-100 h-[4.5rem] bg-gray-300 mt-6"
  >
    <p class="uppercase text-2xl font-medium">{{ title }}</p>
  </div>
</template>
