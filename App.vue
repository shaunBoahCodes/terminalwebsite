<template>
  <Matrix v-if="store.showIntro"></Matrix>
  <Home v-if="!store.showIntro"></Home>
</template>

<script setup>
import UserInput from '@/components/textbox/UserInput'
import SelfType from '@/components/SelfType'
import Matrix from '@/components/Matrix'
import Home from '@/components/Home'
import { matrixStore } from '@/store/matrixStore.js'
const store = matrixStore()
import { ref } from 'vue'


</script>

<style>

</style>
