<template>
  <v-card>
    <v-row dense justify="center">
      <v-card-title>Thank you for your order!</v-card-title>
    </v-row>
    <v-img
      class="mx-auto"
      max-width="700"
      src="https://media.giphy.com/media/yo6r0bd9pbqQE/giphy.gif"
    ></v-img>
    <v-card-actions>
      <v-row align="center" justify="space-around">
        <v-col cols="10">
          <v-btn class="mx-2" color="success" block @click="toWhatsapp()">
            <v-icon class="mx-1">mdi-whatsapp</v-icon>
            Send to Whatsapp
          </v-btn>
        </v-col>
        <v-spacer />
        <v-col>
          <v-btn to="/" class="mx-2 btn-links" x-small text link color="accent">
            <v-icon class="mx-1">mdi-storefront-outline</v-icon>
            Back to Store
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Order } from '~/domain/models'
import Vue from 'vue'
import orderUtil from '~/utilities/orderUtil'
import routeUtils from '~/utilities/routeUtils'
import { mapGetters } from 'vuex'
export default Vue.extend({
  created() {
    this.order = this.$route.params.order
  },
  computed: {
    ...mapGetters('cart', ['getInternationalPhoneNumber']),
  },
  data(): any {
    return {
      order: {},
    }
  },
  methods: {
    toWhatsapp() {
      const text = orderUtil.orderToWhatsappText(this.order)
      routeUtils.redirectToWhatsapp(
        this.getInternationalPhoneNumber().slice(1),
        text
      )
    },
  },
})
</script>