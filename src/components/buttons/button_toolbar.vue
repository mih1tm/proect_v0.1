<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
    },
  },
}
</script>

<template>
  <div>
    <v-btn class="button" :ripple="{ class: 'text-red' }" variant="text" :to="to">{{
      title
    }}</v-btn>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: red;
}
.button {
  display: flex;
  margin: 10px;
  padding: 10px;
  font-size: 0.8em;
  border-radius: 0;
  color: rgb(0, 0, 0);
}
a:hover {
  background-color: hsla(255, 0, 0);
}
</style>
