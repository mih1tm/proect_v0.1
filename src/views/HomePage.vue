<script setup>
import { RouterView } from 'vue-router'
import MainBar from '../components/MainBar.vue' /* PartiallyEnd: #3632/scriptSetup.vue */
</script>

<template>
  <div class="mainDiv">
    <div class="mainBar"><MainBar /></div>

    <div class="routerview">
      <RouterView />
    </div>
  </div>
  <!-- <div class="about">sunt jos in pagina</div> -->
</template>

<style scoped>
.mainDiv {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

.about {
  bottom: 0px;
}

.mainBar {
  height: 164px;
  width: 100%;
}

.routerview {
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}
</style>
