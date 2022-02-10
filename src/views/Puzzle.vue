<template>
  <div class="flex flex-col py-10 h-full w-full">
    <h1 class="text-3xl font-medium mx-6">Form the puzzle</h1>
    <p class="mx-6">Use all the pieces to complete the puzzle</p>
    <div class="grow"></div>
    <div class="relative border-4 mx-6">
      <img class="w-full h-auto opacity-0" src="../assets/full.png" />
      <img v-if="pieces[0]" class="absolute w-auto h-1/2 top-0 left-0" src="../assets/piece-1.png" />
      <img v-if="pieces[1]" class="absolute w-1/2 h-auto top-0 right-0" src="../assets/piece-2.png" />
      <img
        v-if="pieces[2]"
        class="absolute w-1/2 h-auto bottom-0 left-0"
        src="../assets/piece-3.png"
      />
      <img
        v-if="pieces[3]"
        class="absolute w-auto h-1/2 bottom-0 right-0"
        src="../assets/piece-4.png"
      />
    </div>
    <div class="grow"></div>
    <div
      class="flex space-x-4 overflow-x-scroll overflow-visible overflow-y-hidden px-6 transition-all duration-500"
      :class="complete ? 'h-0' : 'h-32'"
    >
      <img
        v-if="!pieces[0]"
        @click="addToPuzzle(0)"
        class="w-auto h-32"
        src="../assets/piece-1.png"
      />
      <img
        v-if="!pieces[1]"
        @click="addToPuzzle(1)"
        class="w-auto h-32"
        src="../assets/piece-3.png"
      />
      <img
        v-if="!pieces[2]"
        @click="addToPuzzle(2)"
        class="w-auto h-32"
        src="../assets/piece-2.png"
      />
      <img
        v-if="!pieces[3]"
        @click="addToPuzzle(3)"
        class="w-auto h-32"
        src="../assets/piece-4.png"
      />
    </div>
    <ConfettiExplosion
      v-if="complete"
      class="absolute left-1/2 top-14 -translate-x-1/2"
      :particleCount="150"
      :force="0.3"
      :stageHeight="1000"
    />
  </div>
</template>

<script>
import ConfettiExplosion from "vue-confetti-explosion";

export default {
  components: { ConfettiExplosion },
  data() {
    return {
      complete: false,
      pieces: [
        false,
        false,
        false,
        false
      ]
    }
  },
  methods: {
    addToPuzzle(index) {
      this.pieces[index] = true;
      this.complete = this.pieces.every(el => el == true);
    }
  }
}
</script>