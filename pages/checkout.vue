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
                v-model="phoneNumber"
                placeholder="טלפון"
                type="number"
                :rules="phoneNumberMeta.rules"
                v-bind:maxlength="phoneNumberMeta.requiredPhoneLength"
                v-bind:minlength="phoneNumberMeta.requiredPhoneLength"
              ></v-text-field>
            </v-col>
            <v-col class="d-flex" cols="5" sm="5">
              <v-select
                autofocus
                :items="phoneNumberMeta.phonePrefixOptions"
                label="קידומת"
                dense
                outlined
                v-model="phonePrefix"
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
import { mapGetters, mapActions } from 'vuex'
import orderHandler from '@/services/orderHandler'
export default {
  computed: {
    ...mapGetters('cart', [
      'getCartItemsCount',
      'getPhonePrefix',
      'getPhoneNumber',
    ]),
    phonePrefix: {
      get: function () {
        return this.getPhonePrefix()
      },
      set: function (prefix) {
        console.log(prefix)
        this.setPhonePrefix(prefix)
      },
    },
    phoneNumber: {
      get: function () {
        return this.getPhoneNumber()
      },
      set: function (num) {
        this.setPhoneNumber(num)
      },
    },
  },
  methods: {
    ...mapActions(['setPhonePrefix', 'setPhoneNumber']),
    canPlaceOrder() {
      return this.valid && this.getCartItemsCount() > 0
    },
    async placeOrder() {
      this.orderOverlay = true
      await orderHandler.placeOrder()
      this.orderOverlay = false
    },
  },
  data() {
    return {
      valid: false,
      orderOverlay: false,
      orderComment: '',
      phoneNumberMeta: {
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