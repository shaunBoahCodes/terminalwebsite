<template>
  <GlobalEvents v-if="store.showIntro" @keydown="skip" @click="skip"/>
  <div class="container" id="container">
    <div class="row">
      <div class="column" v-for="(column, colIn) in store.columnID" :key="column">
        <div :id="obj" v-for="(obj, index) in store.fillID[colIn]" :key="index"></div>
      </div>
    </div> 
  </div>
  <div class="intro">
    blahblah.com
  </div>
  <div class="press-any">
    <span>PRESS</span>
    <span style="margin-left: 16px">ANY</span>
    <span style="margin-left: 16px">KEY</span>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, onBeforeMount } from 'vue'
import { GlobalEvents } from 'vue-global-events'
import { matrixStore } from '@/store/matrixStore'
const store = matrixStore()

const rainSpeed = 120


async function rain2(colNum, speed, wave, duration) {
  const colAlp = store.columnID[colNum - 1]
  await store.delay(store.ranNum(wave * duration, (wave * duration) + duration))
  for (let i = 1; i <= store.y; i++){
    setTimeout(() => {
      document.getElementById(`${colAlp}${i}`).innerText = store.alphabet.charAt(store.ranNum(0, 34))
      for (let k = 0; k <= (i < 10 ? i - 1 : 9); k++) {
        var opacity = 1 - (k * 0.1)
        document.getElementById(`${colAlp}${i - k}`).style.opacity = opacity
      }
    }, i * speed)
  }
}

function skip() {
  store.showIntro = false
  document.getElementById('container').style.opacity = 0.5
}


onBeforeMount(() => {
  for (let q = 0; q <= 1; q++) {
    for (let i = 1; i <= store.x; i++) rain2(i, rainSpeed, q, 4800)
  }  
})
</script>

<style>
@import '@/assets/global.css';

.column {
  display: grid;
  grid-template-columns: 15px;
  grid-template-rows: repeat(60, 15px);
  gap: 5px;
}
.row {
  display: flex;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
}
.down {
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: -3px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.05) 0, rgba(255, 255, 255, 0.05) calc(100% - 300px), white 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: 16px;
  margin-left: 0px;
  margin-right: 0;
}
.intro {
  position: absolute;
  top: calc(50% - 80px);
  left: calc(50% - 250px);
  height: 160px;
  width: 500px;
  background: var(--primary-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  animation: pulse 6s infinite linear;
}
@keyframes pulse {
  50% {font-size: 42px;}
}
.press-any {
  position: absolute;
  top: 60px;
  left: calc(50% - 105px);
  color: var(--acc-1);
  letter-spacing: 5px;
  animation: appear 4s linear;
  opacity: 1;
}
span {
  background: var(--primary-dark)
}
@keyframes appear {
  0% {opacity: 0;}
  33% {opacity: 0;}
  100% {opacity: 1;}
}
</style>