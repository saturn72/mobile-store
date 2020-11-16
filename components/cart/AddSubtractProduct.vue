<template>
  <v-text-field
    dense
    append-outer-icon="mdi-minus-circle-outline"
    :append-icon="icon"
    prepend-icon="mdi-plus-circle-outline"
    @click:prepend="incrementCartItem(product)"
    @click:append-outer="decrementCartItem(product)"
    outlined
    readonly
    rounded
    v-bind:value="getCartItemQuantity(product)"
  >
  </v-text-field>
</template>
<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import { Product } from '@/domain/models'

import Vue from 'vue'
export default Vue.extend({
  props: {
    product: { type: Object as () => Product },
    icon: { type: String },
  },
  computed: {
    ...mapGetters('cart', ['getCartItemQuantity']),
  },
  methods: {
    ...mapActions(['incrementCartItem', 'decrementCartItem']),
  },
})
</script>
