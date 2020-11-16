<template>
  <v-footer>
    <v-bottom-navigation
      app
      fixed
      grow
      background-color="blue-grey lighten-4"
      color="orange darken-3"
    >
      <!--
      shift
      -->
      <v-btn
        v-for="btn in buttons"
        :key="btn.name"
        :value="btn.value"
        :to="btn.to"
        @click="setBadgeColor(btn.badgeColor)"
      >
        <span>{{ btn.text }}</span>
        <v-icon>{{ btn.icon }} </v-icon>
        <BadgeCartItemCount v-if="btn.hasBadge" :color="cartBadgeColor" />
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    const c =
      this.buttons.find((b: any) => b.value === this.$route.name)?.badgeColor ||
      'accent'
    this.setBadgeColor(c)
  },
  methods: {
    setBadgeColor(color: string | undefined) {
      this.cartBadgeColor = color
    },
  },
  data(): any {
    return {
      cartBadgeColor: undefined,
      buttons: [
        {
          icon: 'mdi-cart',
          text: 'Checkout',
          value: 'checkout',
          to: '/checkout',
          badgeColor: undefined,
          hasBadge: true,
        },
        {
          icon: 'mdi-message-outline',
          text: 'Messages',
          value: 'messages',
          to: '/messages',
          badgeColor: 'accent',
          hasBadge: false,
        },
        {
          icon: 'mdi-account-outline',
          text: 'Account',
          value: 'account',
          to: '/account',
          badgeColor: 'accent',
          hasBadge: false,
        },
        {
          icon: 'mdi-login-variant',
          text: 'Login',
          value: 'login',
          to: '/login',
          badgeColor: 'accent',
          hasBadge: false,
        },
        {
          icon: 'mdi-storefront-outline',
          text: 'Store',
          value: 'store',
          to: '/store',
          badgeColor: 'accent',
          hasBadge: false,
        },
      ],
    }
  },
})
</script>