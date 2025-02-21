<script>
export default {
  props: {
    selectionType: {
      type: String,
      default: 'leaf',
    },
    items: {
      type: Array,
    },
  },
  data() {
    return {}
  },
  methods: {
    show_selection() {
      console.log(this.selection)
    },
  },
  computed: {
    selection: {
      get() {
        return this.$store.state.selection
      },
      set(newValue) {
        this.$store.dispatch('setFilter', newValue)
      },
    },
  },
}
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-treeview
          class="treeview"
          v-model:selected="selection"
          :items="items"
          :select-strategy="selectionType"
          item-value="id"
          return-object
          selectable
        ></v-treeview>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.v-container {
  width: 100%;
}
.treeview {
  width: 100%;
}
.v-row {
  width: 100%;
}
</style>
