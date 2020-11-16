<template>
  <div>
    <v-navigation-drawer v-model="menuDrawer" fixed app right>
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
    <v-app-bar :clipped-left="clipped" fixed app collapse-on-scroll>
      <v-app-bar-nav-icon
        title="mdi-magnify"
        @click="menuDrawer = !menuDrawer"
        @click.stop="searchActive = false"
      />
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click="searchActive = !searchActive"
        @click.stop="menuDrawer = false"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'AppBar',
  data() {
    return {
      clipped: false,
      menuDrawer: false,
      searchActive: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-cart-check',
          title: 'Checkout',
          to: '/checkout',
        },
      ],
      title: 'קדם מרקט',
    }
  },
})
</script>