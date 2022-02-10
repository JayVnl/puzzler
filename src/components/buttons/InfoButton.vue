<script setup>
import router from '../../router';

defineProps({
  title: String,
  info: String,
  path: String
})

function navigateTo(path) {
  router.push(path);
}
</script>

<template>
  <div
    @click="navigateTo(path)"
    class="flex flex-col relative w-100 h-auto bg-gray-300 mt-4 py-2 px-3"
  >
    <p class="text-xl font-medium">{{ title }}</p>
    <p class>{{ info }}</p>
  </div>
</template>
