<template>
  <v-badge
    v-if="getCartItemsCount() > 0"
    v-bind:content="getCartItemsCount()"
    :color="color"
  >
  </v-badge>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  props: {
    color: { type: String, default: 'success' },
  },
  computed: {
    ...mapGetters('cart', ['getCartItemsCount']),
  },
})
</script>
