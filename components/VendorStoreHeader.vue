<template>
  <v-sheet height="auto">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <h1 class="text-center display-3">{{ storeTitle }}</h1>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      storeTitle: 'This is vendor store header',
    }
  },
}
</script>
