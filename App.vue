<template>
<!--  <Matrix v-if="store.showIntro"></Matrix> -->
  <Home></Home>
</template>

<script setup>
import Matrix from '@/components/Matrix'
import Home from '@/components/Home'
import { ref } from 'vue'
import { matrixStore } from '@/store/matrixStore.js'
const store = matrixStore()



</script>

<style>

</style>
