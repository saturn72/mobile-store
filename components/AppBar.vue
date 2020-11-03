<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app right>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="fixed = !fixed">
        <v-badge
          v-if="cartItemsCount() > 0"
          v-bind:content="cartItemsCount()"
          color="success"
          offset-x="5"
        >
        </v-badge>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['cartItemsCount']),
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      title: 'קדם מרקט',
    }
  },
}
</script>