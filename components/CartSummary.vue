<template>
  <v-sheet>
    <v-simple-table fixed-header dense>
      <template>
        <thead>
          <tr>
            <th class="text-right">Name</th>
            <th class="text-right">Quantity</th>
            <th class="text-right">Prices</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ci in getCart().cartItems" :key="ci.product.id" flex>
            <td>
              <v-row>
                <ProductAvatar :product="ci.product" v-bind:size="40" />
              </v-row>
              <v-row>{{ ci.product.name }}</v-row>
            </td>
            <td><AddSubtractProduct :product="ci.product" icon="" /></td>
            <td>
              <v-row>
                <small>
                  Unit: <strong>{{ ci.product.price }} </strong></small
                ></v-row
              >
              <v-row>
                <small>Item Total: </small
                >{{ (ci.product.price * ci.quantity).toFixed(2) }}
              </v-row>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider />
    <v-row align="center" justify="space-around">
      <v-col> <h3>Cart Total:</h3> </v-col>
      <v-spacer />
      <v-col>
        <v-chip>{{ getCartTotal().toFixed(2) }} </v-chip>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script lang="ts">
import { mapGetters } from 'vuex'

import Vue from 'vue'
export default Vue.extend({
  computed: {
    ...mapGetters('cart', ['getCart', 'getCartTotal']),
  },
})
</script>