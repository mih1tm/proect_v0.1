<script>
import baseFilter from './baseFilter.vue'
export default {
  components: {
    baseFilter,
  },
  data: () => ({
    select: 'classic',

    filterData: [
      //PAL: 2.x
      //mdf: 3.x
      //lemn: 4
      //altele: 5
      //blaturi de lucru: 6.x
      //contrablaturi: 7
      {
        title: 'Panouri Decorative',
        children: [
          {
            title: 'PAL',
            children: [
              { id: 2.1, title: 'Culori Uni' },
              { id: 2.2, title: 'Nelucios' },
              { id: 2.3, title: 'Lucios' },
              { id: 2.4, title: 'Imitatie Lemn' },
            ],
          },
          {
            title: 'MDF',
            children: [
              { id: 3.1, title: 'Melaminat' },
              { id: 3.2, title: 'Infoliat' },
              { id: 3.3, title: 'Vopsit' },
            ],
          },
          {
            id: 4,
            title: 'Lemn',
          },
          {
            id: 5,
            title: 'Altele',
          },
        ],
      },
      {
        title: 'Blaturi de lucru',
        children: [
          { id: 6.1, title: 'Postformate 38mm' },
          { id: 6.2, title: 'HPC' },
          { id: 6.3, title: 'Lemn' },
        ],
      },
      {
        id: 7,
        title: 'Contrablaturi',
      },
    ],
  }),
}
</script>

<template>
  <baseFilter :items="filterData" :selectionType="select" />
</template>

<style scoped>
.baseFilter {
  width: 100%;
}
</style>
