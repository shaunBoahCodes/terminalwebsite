<template>
<div class="bar"></div>
  <div class="container" id="container">
    <div class="row">
      <div class="column" v-for="(column, colIn) in store.columnID" :key="column">
        <div class="item" :id="obj" v-for="(obj, index) in store.fillID[colIn]" :key="index"></div>
      </div>
    </div> 
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { matrixStore } from '@/store/matrixStore.js'
const store = matrixStore()

async function randomTicks() {
  var randomElement, randomID
  console.log('started')
  for (let i = 1; i < 50000; i++) {
    setTimeout(() => {
      if (randomElement) {
        randomElement.classList.remove("animated")
        randomElement.style.opacity = 0.1
      }
      randomID = store.columnID[store.ranNum(0, store.x - 1)] + store.ranNum(1, 37)
      randomElement = document.getElementById(randomID)
      randomElement.innerText = store.alphabet.charAt(store.ranNum(0, 34))
      randomElement.classList.add("animated")
    }, i * 3000)
  }
}

onMounted(() => {
  for (let i = 0; i < 5; i++) randomTicks()
})
</script>

<style>
.item {
  opacity: 0;
}
.animated {
  animation: blink 3s ease-in-out ;
}
@keyframes blink {
  0% {scale: 1;}
  50% {
    opacity: 0.5;
    scale: 1.1;
    }
  100% {
    scale: 1;
    opacity: 0.1;
    }
}
</style>
