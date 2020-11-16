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
                placeholder="Feel free to add any comment and/or request you may have"
                rows="2"
                prepend-icon="mdi-comment-text-outline"
                single-line
                dense
                class="mx-2"
                v-model="comment"
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
                <v-icon class="mx-1">mdi-cart-arrow-right</v-icon>
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
<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import orderUtil from '@/utilities/orderUtil'
import routeUtil from '@/utilities/routeUtils'

const legalPhoneLength: number = 7
export default Vue.extend({
  computed: {
    ...mapGetters('cart', [
      'getCart',
      'getCartItemsCount',
      'getPhonePrefix',
      'getPhoneNumber',
      'getComment',
    ]),
    phonePrefix: {
      get: function (): string {
        return this.getPhonePrefix()
      },
      set: function (prefix: string): void {
        this.setPhonePrefix(prefix)
      },
    },
    phoneNumber: {
      get: function (): string {
        return this.getPhoneNumber()
      },
      set: function (num: string): void {
        this.setPhoneNumber(num)
      },
    },
    comment: {
      get: function (): string {
        return this.getComment()
      },
      set: function (c: string): void {
        this.setComment(c)
      },
    },
  },
  methods: {
    ...mapActions([
      'setPhonePrefix',
      'setPhoneNumber',
      'setComment',
      'clearCart',
    ]),
    canPlaceOrder() {
      return this.valid && this.getCartItemsCount() > 0
    },
    async placeOrder() {
      this.orderOverlay = true
      const order = await orderUtil.placeOrder(this.getCart())
      this.clearCart()
      this.orderOverlay = false
      const text = orderUtil.orderToWhatsappText(order)
      routeUtil.redirectToWhatsapp(text)
    },
  },
  data: () => ({
    valid: false,
    orderOverlay: false,
    requiredPhoneLength: legalPhoneLength,
    phoneNumberMeta: {
      value: '',
      phonePrefixOptions: ['050', '051', '052', '053', '054', '055', '058'],
      rules: [
        (v: string) => !!v || 'מספר טלפון נדרש לביצוע הזמנה',
        (v: string) =>
          (v && v.length === legalPhoneLength) ||
          'נא להזין מספר טלפון חוקי (ללא קידומת)',
      ],
    },
    submittingOrder: false,
  }),
})
</script>