<script setup>
import button_toolbar from './buttons/button_toolbar.vue'
import Button_toolbar_menu from './buttons/button_toolbar_menu.vue'
</script>

<script>
export default {
  components: {
    button_toolbar,
  },
}
</script>

<template>
  <header id="header" class="header">
    <div class="notification_bar">!!! text notification_bar !!!</div>
    <div class="main_toolbar">
      <div class="app_logo_area"><img src="@/assets/logo_brand1.jpeg" /></div>
      <div class="search_area">
        <v-text-field
          class="search_input"
          clearable
          label="Cauta"
          append-inner-icon="mdi-magnify"
          variant="solo"
        ></v-text-field>
      </div>
      <div class="log_in">
        <v-btn class="button_login" prepend-icon="mdi-login" variant="text"> Log in </v-btn>
      </div>
    </div>
    <div class="buttons_toolbar">
      <Button_toolbar_menu title="abracadabra"
        ><v-menu activator="parent">
          <v-list>
            <v-list-item link>
              <v-list-item-title>Catalog Materiale</v-list-item-title>
              <v-menu location="end" activator="parent" open-on-click>
                <v-list>
                  <v-list-item link>
                    <v-list-item-title>Tipuri de materiale</v-list-item-title>
                  </v-list-item>
                  <v-list-item link>
                    <v-list-item-title>Culori</v-list-item-title>
                  </v-list-item>
                  <v-list-item link>
                    <v-list-item-title>Idei Design</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Sunt un titlu</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>titlu3</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>titlu4</v-list-item-title>
            </v-list-item>
            <v-btn> sdaad </v-btn>
          </v-list>
        </v-menu></Button_toolbar_menu
      >
      <button_toolbar to="/aboutapp" title="test" />
      <button_toolbar class="test" color="blue" title="contactsapp" to="/contactsapp">
      </button_toolbar>
      <button_toolbar title="aboutapp" to="/aboutapp" />
      <button_toolbar title="dede" />
      <button_toolbar title="ffff" />
      <button_toolbar title="hhhyy" />
    </div>
  </header>
</template>

<style scoped>
.test {
  background-color: transparent;
}
.header {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: rgb(255, 255, 255);
  width: 100%;
}
.header > .notification_bar {
  background-color: rgba(19, 79, 92, 1);
  margin: 0;
  padding: 0;
  font-size: 30px;
  color: white;
  text-align: center;
  height: 50px;
}
.header > .main_toolbar {
  background-color: #fffbf0;
  margin: 0;
  padding: 0;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  height: 57px;
}
.header > .buttons_toolbar {
  background-color: #9a9a9a;
  margin: 0;
  padding: 0;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 57px;
}
.header > .main_toolbar > .app_logo_area {
  background-color: black;
}
.main_toolbar > .search_area {
  width: 40%;
}
.main_toolbar > .log_in {
  background-color: rgb(255, 255, 255);
  margin: 0;
  padding: 0;
}
.search_input {
  width: 100%;
  border-radius: 0;
}
.search_input .v-input__control {
  border-radius: 0 !important;
}
.search_input .v-input__slot {
  border-radius: 0 !important;
}
.button_login {
  height: 10px;
  background-color: black;
  color: rgb(255, 255, 255);
  border-radius: 0;
}
.app_logo {
  height: 100%;
  width: 100%;
}
</style>
