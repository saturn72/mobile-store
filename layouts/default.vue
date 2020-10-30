<template>
  <v-app dir="rtl">
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
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation
      fixed
      shift
      hide-on-scroll
      background-color="blue-grey lighten-4"
      color="teal darken-3"
    >
      <v-btn value="wishlist">
        <span>Wishlist</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn value="messages">
        <span>Messages</span>
        <v-icon>mdi-message</v-icon>
      </v-btn>
      <v-btn value="account">
        <span>Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn value="home">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
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
