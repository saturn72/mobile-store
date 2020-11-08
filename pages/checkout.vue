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
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col>
              <CartSummary />
            </v-col>
          </v-row>
          <v-row align="start">
            <v-col class="d-flex" cols="7">
              <v-text-field
                outlined
                dense
                clearable
                v-model="orderPhoneNumber"
                placeholder="טלפון"
                type="number"
                :rules="phoneNumber.rules"
                v-bind:maxlength="phoneNumber.requiredPhoneLength"
                v-bind:minlength="phoneNumber.requiredPhoneLength"
              ></v-text-field>
            </v-col>
            <v-col class="d-flex" cols="5" sm="5">
              <v-select
                autofocus
                :items="phoneNumber.phonePrefixOptions"
                label="קידומת"
                dense
                outlined
                v-model="orderPhonePrefix"
              ></v-select>
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
          <v-row align="center" justify="space-around">
            <v-col cols="10">
              <v-btn
                class="mx-2"
                :disabled="!canPlaceOrder()"
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
        </v-form>
      </v-card-text>
      <v-overlay v-model="orderOverlay" v-bind:dark="false">
        <PlacingOrderOverlay />
      </v-overlay>
    </v-card>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['cartItemsCount']),
  },
  methods: {
    canPlaceOrder() {
      return this.valid && this.cartItemsCount() > 0
    },
    placeOrder() {
      this.orderOverlay = true
    },
  },
  data() {
    return {
      valid: false,
      orderOverlay: false,
      orderComment: '',
      orderPhonePrefix: '',
      orderPhoneNumber: '',
      phoneNumber: {
        requiredPhoneLength: 7,
        value: '',
        phonePrefixOptions: ['050', '051', '052', '053', '054', '055', '058'],
        rules: [
          (v) => !!v || 'מספר טלפון נדרש לביצוע הזמנה',
          (v) =>
            (v && v.length === this.phoneNumber.requiredPhoneLength) ||
            'נא להזין מספר טלפון חוקי (ללא קידומת)',
        ],
      },
      submittingOrder: false,
    }
  },
}
</script>