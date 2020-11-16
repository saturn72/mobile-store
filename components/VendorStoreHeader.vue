<template>
  <v-sheet height="auto">
    <v-container class="fill-height" align="center" justify="center">
      <h1 class="text-center display-3">{{ storeTitle }}</h1>
    </v-container>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    storeTitle: { type: String, default: 'קדם מרקט' },
  },
})
</script>
