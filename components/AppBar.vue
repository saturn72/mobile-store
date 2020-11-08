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
    <v-navigation-drawer
      v-model="cartDrawer"
      fixed
      app
      left
      width="auto"
      height="80%"
    >
      <v-card>
        <v-list-item>
          <v-list-item-content>
            <v-row>
              <v-list-item-title class="title">
                <v-list-item-avatar>
                  <v-icon>mdi-cart</v-icon>
                </v-list-item-avatar>
                Shopping Cart
              </v-list-item-title>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <CartSummary />
        <v-btn
          class="ma-2"
          block
          color="success"
          to="/checkout"
          :disabled="cartItemsCount() === 0"
        >
          <v-icon>mdi-cart-check</v-icon>
          Checkout
        </v-btn>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="menuDrawer = !menuDrawer" />
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="cartDrawer = !cartDrawer">
        <v-badge
          v-if="cartItemsCount() > 0"
          v-bind:content="cartItemsCount()"
          color="success"
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
    ...mapGetters('cart', ['cartItemsCount', 'cartItems']),
  },
  data() {
    return {
      clipped: false,
      menuDrawer: false,
      cartDrawer: false,
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
}
</script>