<template>
  <div class="div_1">
    <div class="search_area">
      <v-text-field
        class="search_input"
        clearable
        placeholder="Cauta"
        append-inner-icon="mdi-magnify"
        variant="solo"
      ></v-text-field>
    </div>
  </div>
</template>

<style scoped>
.div_1 {
  display: flex;
  background-color: aquamarine;
  width: 400px;
  height: 400px;
  text-align: center;
}
.search_area {
  margin: 100px;
  background-color: brown;
  top: 20%;
}
</style>
