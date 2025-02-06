<script setup>
import baseMenu from './baseMenu.vue'
const menuData = [
  {
    title: 'Panouri Decorative',
    to: '/MaterialePage',
    childrenItems: [
      {
        title: 'PAL',
        to: '',
        grandchildrenItems: [
          {
            title: 'Uni',
          },
          {
            title: 'Nelucios',
          },
          {
            title: 'Lucios',
          },
        ],
      },
      {
        title: 'MDF',
        to: '/MDFPage',
        grandchildrenItems: [
          {
            title: 'Vopsit',
          },
          {
            title: 'Infoliat',
          },
          {
            title: 'Melaminat',
          },
        ],
      },
      {
        title: 'Lemn',
      },
      {
        title: 'Altele',
      },
    ],
  },
  {
    title: 'Blaturi de lucru',
    to: '/BlaturiDeLucru',
    childrenItems: [
      {
        title: 'Postformate 38mm',
      },
      {
        title: 'HPC',
      },
      {
        title: 'Contrablaturi',
      },
    ],
  },
  {
    title: 'Contrablaturi',
  },
  {
    title: 'Culori',
    childrenItems: [
      {
        title: 'Uni',
      },
      {
        title: 'Infoliate',
      },
      {
        title: 'Vopsite',
      },
      {
        title: 'Imitatie Lemn',
      },
      {
        title: 'RAL',
      },
    ],
  },
]
</script>

<template>
  <baseMenu :menuItems="menuData" />
</template>
