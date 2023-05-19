<template>
  <div class="container" id="container">
    <div class="row">
      <div class="column" v-for="(column, colIn) in store.columnID" :key="column">
        <div :id="obj" v-for="(obj, index) in store.fillID[colIn]" :key="index"></div>
      </div>
    </div> 
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { matrixStore } from '@/store/matrixStore.js'
const store = matrixStore()

async function randomTicks() {
  var randomID
  console.log('started')
  for (let i = 1; i < 50000; i++) {
    setTimeout(() => {
      if (randomID) document.getElementById(randomID).style.opacity = 0.1
      randomID = store.columnID[store.ranNum(0, store.x - 1)] + store.ranNum(1, 37)
      document.getElementById(randomID).innerText = store.alphabet.charAt(store.ranNum(0, 34))
      document.getElementById(randomID).style.opacity = 0.2
    }, i * 50)
  }
}

onMounted(() => {
  randomTicks()
})
</script>

<style>

</style>