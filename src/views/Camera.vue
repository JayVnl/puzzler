<template>
  <div class="h-full w-full">
    <qrcode-stream @decode="onDecode" @init="onInit" />
    <div
      class="absolute flex flex-col items-center right-6 bottom-6 p-2 rounded-xl border-b-4"
      :class="countPieces > 3 ? 'bg-[#6DE287] border-b-[#69D981] text-white' : 'bg-white border-b-[#D3D3D3]'"
    >
      <img src="../assets/puzzle-icon.png" alt="puzzle-icon" />
      <p class="text-xl font-medium">{{ countPieces }}/4</p>
    </div>
    <div
      @click="goBack()"
      class="absolute bg-white left-5 top-5 p-4 rounded-full flex justify-center items-center"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.75 13.75H8.925l4.537-5.45a1.251 1.251 0 1 0-1.925-1.6l-6.25 7.5c-.042.06-.08.122-.112.188 0 .062 0 .1-.087.162A1.25 1.25 0 0 0 5 15c.001.154.03.307.088.45 0 .063 0 .1.087.163.033.065.07.127.112.187l6.25 7.5a1.248 1.248 0 0 0 .963.45 1.25 1.25 0 0 0 .963-2.05l-4.538-5.45H23.75a1.25 1.25 0 0 0 0-2.5Z"
          fill="#000"
        />
      </svg>
    </div>
    <div
      v-if="isQrDecoded"
      class="bg-white flex flex-col absolute left-1/2 top-1/2 w-10/12 h-auto -translate-y-1/2 -translate-x-1/2 px-6 py-4"
    >
      <p class="text-xl font-medium mb-4">You found piece number {{ pieceNumber }}!</p>
      <img :src="pieces[pieceNumber - 1]" class="w-full h-auto mb-5" alt="piece popup" />
      <button v-if="countPieces != 4" @click="closePopup" class="bg-gray-200 py-3 rounded-lg">Close</button>
      <button v-else @click="toPuzzlePage" class="bg-gray-200 py-3 rounded-lg">Form the puzzle</button>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue3-qrcode-reader';
import firstPiece from '../assets/piece-1.png';
import secondPiece from '../assets/piece-2.png';
import thirdPiece from '../assets/piece-3.png';
import fourthPiece from '../assets/piece-4.png';
import router from '../router';

export default {
  components: { QrcodeStream },
  data() {
    return {
      countPieces: 0,
      isQrDecoded: false,
      pieceNumber: null,
      pieces: [
        firstPiece,
        secondPiece,
        thirdPiece,
        fourthPiece
      ]
    }
  },
  methods: {
    onDecode(result) {
      const number = parseInt(result);
      if (number > 0) {
        this.isQrDecoded = true;
        this.pieceNumber = number;
        this.countPieces++;
      }
    },
    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permission"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    },
    toPuzzlePage() {
      router.push('/puzzle');
    },
    closePopup() {
      this.isQrDecoded = false;
      this.pieceNumber = null;
    },
    goBack() {
      router.go(-1);
    }
  }
}
</script>
