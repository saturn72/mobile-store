<template>
  <v-container>
    <SpeedDial />
    <v-card>
      <v-card-title>
        <v-icon>mdi-cart</v-icon>
        <v-spacer />
        Shipping Cart Summay
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <CartSummary />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-textarea
              auto-grow
              clearable
              clear-icon="mdi-close"
              full-width
              flat
              outlined
              placeholder="Feel free to add any commentand/or request you may have"
              rows="2"
              prepend-icon="mdi-comment-text-outline"
              single-line
              dense
              class="mx-2"
              v-model="orderComment"
            >
            </v-textarea>
          </v-col>
        </v-row>
        {{ orderComment }}
        <v-row align="center" justify="space-around">
          <v-col cols="10">
            <v-btn
              :disabled="cartTotal() === 0"
              class="mx-2"
              color="success"
              block
              @click="placeOrder()"
            >
              <v-icon class="mx-1">mdi-check-outline</v-icon>
              Approve Order
            </v-btn>
          </v-col>
          <v-spacer />
          <v-col>
            <v-btn
              to="/"
              class="mx-2 btn-links"
              x-small
              text
              link
              color="accent"
            >
              <v-icon class="mx-1">mdi-storefront-outline</v-icon>
              Back to Store
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-overlay v-model="orderOverlay" light
        ><v-card>
          <v-card-title> Placing Order...</v-card-title>
          <v-card-actions>
            <v-btn class="mx-2" block @click="orderOverlay = false">
              <v-icon class="mx-1">mdi-check-outline</v-icon>
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-overlay>
    </v-card>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['cartTotal']),
  },
  methods: {
    placeOrder() {
      this.orderOverlay = true
    },
  },
  data() {
    return {
      orderOverlay: false,
      orderComment: '',
    }
  },
}
</script>