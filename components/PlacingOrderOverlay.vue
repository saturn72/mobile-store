<template>
  <v-card>
    <v-card-title> Placing Order... </v-card-title>
    <v-card-text>
      <v-row justify="center">
        <v-progress-circular indeterminate></v-progress-circular>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row v-if="!progress">
        <v-btn color="green">
          <v-icon color="white">mdi-whatsapp</v-icon> Send to Whatsapp
        </v-btn>
        <v-btn to="/" class="mx-2 btn-links" x-small text link color="accent">
          <v-icon class="mx-1">mdi-home-outline</v-icon>
          To Home
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      progress: true,
    }
  },
}
</script>