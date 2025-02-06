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
    <v-btn
      :ripple="{ class: 'text-red' }"
      class="button"
      variant="text"
      :to="to"
      active-class
      >{{ title }}</v-btn
    >
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
</style>
