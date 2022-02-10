<template>
  <div class="h-full w-full">
    <qrcode-stream @decode="onDecode" @init="onInit" />
    <div
      v-if="isQrDecoded"
      class="bg-white flex flex-col absolute left-1/2 top-1/2 w-9/12 h-auto -translate-y-1/2 -translate-x-1/2 px-6 py-4"
    >
      <p class="text-xl font-medium mb-4">You found piece number {{ pieceNumber }}</p>
      <img :src="pieces[pieceNumber - 1]" class="w-full h-auto mb-5" />
      <button @click="closePopup" class="bg-gray-200 py-3">Close</button>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue3-qrcode-reader'
import firstPiece from '../assets/piece-1.png';
import secondPiece from '../assets/piece-2.png';
import thirdPiece from '../assets/piece-3.png';
import fourthPiece from '../assets/piece-4.png';

export default {
  components: { QrcodeStream },
  data() {
    return {
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
      this.isQrDecoded = true;
      this.pieceNumber = result;

      // this.pieceURL = this.getImagePath(result);
    },
    // getImagePath(number) {
    //   const path = require('~/assets/piece-1.png');
    //   console.log(path);
    //   // return require(`\src\assets\piece-1.png`);
    // },
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
    closePopup() {
      this.isQrDecoded = false;
      this.pieceNumber = null;
      this.pieceURL = "";
    }
  }
}
</script>
