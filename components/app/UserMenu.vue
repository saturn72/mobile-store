<template>
  <v-menu offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }">
      <v-avatar
        class="profile"
        color="grey"
        :size="size"
        v-bind="attrs"
        v-on="on"
      >
        <v-img :src="img">
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
    </template>

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
        <v-btn text @click="menu = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
<script lang="ts">
import Vue from 'vue'
import consts from '~/utilities/consts'
import fb from '~/utilities/firebaseAdapter'

export default Vue.extend({
  props: {
    size: { type: Number, default: 100 },
    img: { type: String, default: consts.UserImage },
  },
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