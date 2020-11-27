<template>
  <v-app-bar
    dense
    :clipped-left="clipped"
    fixed
    app
    shrink-on-scroll
    collapse-on-scroll
    elevate-on-scroll
    prominent
    fade-img-on-scroll
    color="blue-grey lighten-4"
  >
    <v-row align="center" justify="center">
      <UserMenu v-if="shouldBeVisible()" v-bind:size="60" />
      <v-spacer />
      <v-avatar
        class="profile"
        color="grey"
        width="230"
        :size="95"
        v-bind="attrs"
        v-on="on"
      >
        <v-img
          src="https://kedemmarket.co.il/wp-content/uploads/2020/07/logodesign-scaled.jpg"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="black"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-avatar>

      <!-- 
    g
        alt="logo"
    </v-avatar>
      /> -->
    </v-row>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue'

const notVisibleInRouteNames = ['login']
export default Vue.extend({
  methods: {
    shouldBeVisible(): boolean {
      const curRouteName = this.$route.name
      return !notVisibleInRouteNames.some((n) => n === curRouteName)
    },
  },
  data() {
    return {
      clipped: false,
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