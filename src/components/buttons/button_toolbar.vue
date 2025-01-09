<script>
export default {
  props: {
    title: String,
  },
}
</script>

<template>
  <v-btn class="button" variant="text">
    {{ title }}
  </v-btn>
</template>

<style scoped>
.button {
  margin: 0px;
  padding: 10px;
  align-items: stretch;
  font-size: 0.8em;
  height: 100%;
  border-radius: 0;
  color: black;
}
</style>
