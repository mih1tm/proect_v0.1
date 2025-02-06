<script setup>
import baseMenu from './baseMenu.vue'
const menuData = [
  {
    title: 'Bucatarii',
  },
  {
    title: 'Dressinguri',
  },
  {
    title: 'Living Room',
  },
  {
    title: 'Office',
  },
  {
    title: 'Altele',
  },
]
</script>

<template>
  <baseMenu :menuItems="menuData" />
</template>
