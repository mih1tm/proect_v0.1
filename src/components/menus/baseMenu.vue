<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <v-menu class="menu" activator="parent">
    <v-list>
      <v-list-item v-for="(item, index) in menuItems" :key="index" router :to="item.to" link>
        <v-list-item-title
          >{{ item.title
          }}<v-icon v-if="item.childrenItems && item.childrenItems.length > 0"
            >mdi-chevron-right</v-icon
          ></v-list-item-title
        >
        <v-menu
          v-if="item.childrenItems && item.childrenItems.length > 0"
          location="end"
          activator="parent"
          open-on-hover
        >
          <v-list>
            <v-list-item
              v-for="(item, index) in item.childrenItems"
              :key="index"
              router
              :to="item.to"
              link
            >
              <v-list-item-title
                >{{ item.title
                }}<v-icon v-if="item.grandchildrenItems && item.grandchildrenItems.length > 0"
                  >mdi-chevron-right</v-icon
                ></v-list-item-title
              >
              <v-menu
                v-if="item.grandchildrenItems && item.grandchildrenItems.length > 0"
                location="end"
                activator="parent"
                open-on-hover
              >
                <v-list>
                  <v-list-item
                    v-for="(item, index) in item.grandchildrenItems"
                    :key="index"
                    router
                    :to="item.to"
                    link
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
