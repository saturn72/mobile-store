<template>
  <v-simple-table fixed-header dense>
    <template>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Price</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Item Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ci in cartItems()" :key="ci.product.id" flex>
          <td>
            <v-row
              ><ProductAvatar :product="ci.product" v-bind:size="40"
            /></v-row>
            <v-row>{{ ci.product.name }}</v-row>
          </td>
          <td>{{ ci.product.price }}</td>
          <td>{{ ci.quantity }}</td>
          <td>{{ (ci.product.price * ci.quantity).toFixed(2) }}</td>
        </tr>
        <tr>
          <td>Cart Total</td>
          <td></td>
          <td></td>
          <td>{{ cartTotal().toFixed(2) }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['cartItems', 'cartTotal']),
  },
}
</script>