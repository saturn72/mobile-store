<template>
  <v-card>
    <v-card-actions>
      <LinkButton text="Signin" v-on:clicked="signin()" />
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    signin() {
      this.$router.push({
        name: 'login',
        query: {
          signInSuccessUrl: this.$route.path,
        },
      })
    },
  },
})
</script>