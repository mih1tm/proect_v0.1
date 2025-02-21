<script>
export default {
  data: () => ({
    open: ['Users'],
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ],
  }),
}
</script>

<template>
  <v-container class="pa-0 ma-0" :fluid="true">
    <v-col class="pa-0 ma-0 mainContainer">
      <v-list class="pa-0 ma-0 sideBar">
        <v-card class="mx-auto" width="300">
          <v-list v-model:opened="open">
            <v-list-item prepend-icon="mdi-archive" title="Proiectele mele"> </v-list-item>
            <v-list-item >
              <v-btn elevation="0">Adauga</v-btn>
              <v-btn elevation="0">Sterge</v-btn>
            </v-list-item>
            <v-list-group value="Users">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  prepend-icon="mdi-account-circle"
                  title="Users"
                ></v-list-item>
              </template>

              <v-list-group value="Admin">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Admin"></v-list-item>
                </template>

                <v-list-item
                  v-for="([title, icon], i) in admins"
                  :key="i"
                  :prepend-icon="icon"
                  :title="title"
                  :value="title"
                >
                </v-list-item>
              </v-list-group>

              <v-list-group value="Actions">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Actions"></v-list-item>
                </template>

                <v-list-item
                  v-for="([title, icon], i) in cruds"
                  :key="i"
                  :prepend-icon="icon"
                  :title="title"
                  :value="title"
                >
                </v-list-item>
              </v-list-group>
            </v-list-group>
          </v-list>
        </v-card>
      </v-list>
      <v-sheet class="pa-0 ma-0 rightContainer"> sunt in sheet </v-sheet>
    </v-col>
  </v-container>
</template>

<style scoped>
.rightContainer {
  width: 80%;
  height: 100vh;
  background-color: antiquewhite;
}
.sideBar {
  width: 20%;
  background-color: lightgray;
}
.mainContainer {
  display: flex;

  height: 100vh;
}
</style>

class="pa-0 ma-0 sideBar"
