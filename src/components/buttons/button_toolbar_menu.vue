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
    <v-btn class="button" variant="text" :ripple="{ color: 'red' }" :to="to" active-class>
      {{ title }}
    </v-btn>
    <slot></slot>
  </div>
</template>

<style scoped>
a:hover {
  background-color: hsla(0, 0, 0, 0);
}
.button {
  display: flex;
  margin: 10px;
  padding: 10px;
  font-size: 0.8em;
  border-radius: 0;
  color: rgb(0, 0, 0);
}
</style>
