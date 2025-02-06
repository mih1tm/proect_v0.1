<script setup>
import { RouterView} from 'vue-router'
import MainBar from '../components/MainBar.vue' /* PartiallyEnd: #3632/scriptSetup.vue */
</script>

<template>
  <main>
    <div>
      <MainBar />
    </div>
    <div>
      <RouterView />
    </div>
    <div class="about">sunt jos in pagina</div>
  </main>
</template>

<style scoped>
.about {
  bottom: 0px;
}
</style>
