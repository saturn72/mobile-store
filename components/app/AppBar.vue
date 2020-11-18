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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      shrink-on-scroll
      collapse-on-scroll
      elevate-on-scroll
      prominent
      src="https://kedemmarket.co.il/wp-content/uploads/2020/07/logodesign-scaled.jpg"
      fade-img-on-scroll
      color="blue-grey lighten-4"
    >
      <UserMenu v-bind:size="100" />

      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  data() {
    return {
      clipped: false,
      menuDrawer: false,
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