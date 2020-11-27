<template>
  <v-card>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
          <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item>
        <v-list-item-action>
          <v-switch v-model="hints" color="purple"></v-switch>
        </v-list-item-action>
        <v-list-item-title>Enable hints</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-list-item>
      <v-list-item-action>
        <v-switch v-model="message" color="cyan"></v-switch>
      </v-list-item-action>
      <v-list-item-title>Enable messages</v-list-item-title>
    </v-list-item>
    <v-card-actions>
      <v-btn ripple text color="primary" @click="signout()">
        <small><v-icon>mdi-logout</v-icon> Signout</small>
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import consts from '~/utilities/consts'
import fb from '~/utilities/firebaseAdapter'

export default Vue.extend({
  methods: {
    signout() {
      fb.signout()
    },
  },
  data() {
    return {
      message: false,
      hints: false,
      fav: false,
    }
  },
})
</script>