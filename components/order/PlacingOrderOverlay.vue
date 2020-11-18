<template>
  <v-card>
    <v-card-title> Placing Order... </v-card-title>
    <v-card-text>
      <v-row justify="center">
        <v-progress-circular indeterminate></v-progress-circular>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      progress: true,
    }
  },
})
</script>