<script setup>
import MainBar from '../components/MainBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <div>
      <MainBar />
    </div>
    <div>
      <RouterView />
    </div>
    <div>sunt jos in pagina</div>
  </main>
</template>
