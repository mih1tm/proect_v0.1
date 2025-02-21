<script>
import materialeFilter from '@/components/filters/materialeFilter.vue'
// import baseCard from '@/components/cards/baseCard.vue'
import PrototypebaseCard from '@/components/cards/prototypebaseCard.vue'
import Brad_Nebrodi_rustic from '@/assets/images/Brad_Nebrodi_rustic.webp'
import Stejar_lamelar from '@/assets/images/Stejar_lamelar.webp'
import Stejar_Casella_natur_deschis from '@/assets/images/Stejar_Casella_natur_deschis.webp'

export default {
  components: {
    materialeFilter,
    // baseCard,
    PrototypebaseCard,
  },
  data() {
    return {
      cardData: [
        {
          title: 'Brad Nebrodi',
          subtitle: 'H011 G8',
          source: Brad_Nebrodi_rustic,
          id: 2.4,
        },
        {
          title: 'Stejar lamelar',
          subtitle: 'H193 ST12 ',
          source: Stejar_lamelar,
          id: 2.4,
        },
        {
          title: 'Stejar Casella natur deschis',
          subtitle: 'H1367 ST40',
          source: Stejar_Casella_natur_deschis,
          id: 2.4,
        },
        {
          title: 'mdf1.melaminat',
          subtitle: 'def',
          source: '',
          id: 3.1,
        },
        {
          title: 'mdf2.melaminat',
          subtitle: 'def',
          source: '',
          id: 3.1,
        },
        {
          title: 'mdf3.infoliat',
          subtitle: 'def',
          source: '',
          id: 3.2,
        },
        {
          title: 'mdf4.infoliat',
          subtitle: 'def',
          source: '',
          id: 3.2,
        },
        {
          title: 'mdf4.infoliat',
          subtitle: 'def',
          source: '',
          id: 3.2,
        },
        {
          title: 'mdf4',
          subtitle: 'def',
          source: '',
          id: 3.2,
        },
        {
          title: 'mdf4.vopsit',
          subtitle: 'def',
          source: '',
          id: 3.3,
        },
        {
          title: 'mdf.vopsit',
          subtitle: 'def',
          source: '',
          id: 3.3,
        },
        {
          title: 'Lemn',
          subtitle: 'def',
          source: '',
          id: 4,
        },
        {
          title: 'altele1',
          subtitle: 'def',
          source: '',
          id: 5,
        },
        {
          title: 'blat.postformate 38mm',
          subtitle: 'def',
          source: '',
          id: 6.1,
        },
        {
          title: 'blat.hpc',
          subtitle: 'def',
          source: '',
          id: 6.2,
        },
        {
          title: 'blat.lemn',
          subtitle: 'def',
          source: '',
          id: 6.3,
        },
        {
          title: 'contrablat1',
          subtitle: 'def',
          source: '',
          id: 7,
        },
        {
          title: 'contrablat2',
          subtitle: 'def',
          source: '',
          id: 7,
        },
      ],
    }
  },
  computed: {
    selection() {
      return this.$store.state.selection.map((item) => item.id)
    },
    filteredResults() {
      return this.cardData.filter((card) => this.selection.includes(card.id))
    },
  },
  methods: {
    logFilter() {
      console.log(this.$store.state.selection)
      console.log(this.selection)
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="NaviFilter">
      <materialeFilter class="materialeFilter" />
      <p>{{ this.$store.state.selection }}</p>
      <v-btn @click="logFilter" />
    </div>
    <div class="showcase">
      <v-sheet class="d-flex align-content-start flex-wrap bg-surface-variant" min-height="200">
        <v-sheet v-for="n in filteredResults.length" :key="n" class="ma-2 pa-2">
          <PrototypebaseCard :cardItems="filteredResults[n - 1]" />

          <!-- <baseCard
            title="H1384 ST40"
            subtitle="Stejar Casella alb"
            source="https://cdn.egger.com/img/pim/8854529900574/8854529933342/AR_16_9.webp?width=720&srcext=png"
          /> -->
        </v-sheet>
      </v-sheet>
    </div>
  </div>
</template>

<style scoped>
.bg-surface-variant {
  background-color: rgba(0, 0, 0, 0) !important;
}
.v-sheet {
  background-color: rgba(0, 0, 0, 0);
}
.materialeFilter {
  width: 100%;
}

.container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.NaviFilter {
  background-color: rgb(231, 3, 3);
  height: 100vh;
  width: 18%;
}

.showcase {
  background-color: rgb(18, 218, 61);
  height: 100vh;
  width: 82%;
}
</style>
