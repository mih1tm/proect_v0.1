<script></script>

<template>
  <v-menu activator="parent">
    <v-list>
      <v-list-item link>
        <v-list-item-title>Sunt un titlu</v-list-item-title>
        <v-menu activator="parent" open-on-hover submenu>
          <v-list-item link>
            <v-list-item-title>Sunt un titlu</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Sunt un titlu</v-list-item-title>
          </v-list-item>
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
  </v-menu>
</template>
