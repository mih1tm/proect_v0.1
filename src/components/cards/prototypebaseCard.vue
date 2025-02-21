<script>
export default {
  props: {
    cardItems: {
      title: {
        type: String,
      },
      subtitle: {
        type: String,
      },
      source: {
        type: String,
      },
    },
  },

  // props: {
  //   title: {
  //     type: String,
  //   },
  //   subtitle: {
  //     type: String,
  //   },
  //   source: {
  //     type: String,
  //   },
  // },

  data: () => ({
    reveal: false,
  }),
}
</script>

<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <p class="text-h4 font-weight-black">{{ cardItems.title }}</p>

      <p>{{ cardItems.subtitle }}</p>

      <div class="text-medium-emphasis">
        <v-img :src="cardItems.source"></v-img>
        <!-- relating to or dependent on charity; charitable; charitable donations. Pertaining to
        alms.<br />
        "an eleemosynary educational institution." -->
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn text="Detalii" variant="text" @click="reveal = true"></v-btn>

      <v-btn text="adauga"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card v-if="reveal" class="position-absolute w-100" height="100%" style="bottom: 0">
        <v-card-text class="pb-0">
          <p class="text-h4">Origin</p>

          <p class="text-medium-emphasis">
            late 16th century (as a noun denoting a place where alms were distributed): from
            medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē
            ‘compassion’
          </p>
        </v-card-text>

        <v-card-actions class="pt-0">
          <v-btn color="teal-accent-4" text="Close" variant="text" @click="reveal = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>
