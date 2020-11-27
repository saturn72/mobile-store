<template>
  <v-btn ripple text link color="primary" @click="clicked()">
    <small><v-icon>mdi-login</v-icon> {{ text }}</small>
  </v-btn>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: { type: String },
  },
  methods: {
    clicked(event: any): void {
      this.$emit('clicked', event)
    },
  },
})
</script>