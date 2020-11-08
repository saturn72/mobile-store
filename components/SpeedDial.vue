<template>
  <v-speed-dial direction="top" bottom left fixed class="mb-12" v-model="fab">
    <template v-slot:activator>
      <v-btn v-model="fab" color="primary" elevation="24" dark fab out>
        <v-icon v-if="fab"> mdi-close </v-icon>

        <div v-else>
          <v-row dense>
            <v-col>
              <v-icon small class="mb-n3 mx-n3"> mdi-cart-check </v-icon>
            </v-col>
            <v-col>
              <v-icon small class="mt-n6 mx-n2"> mdi-dots-horizontal </v-icon>
            </v-col>
            <v-col>
              <v-icon small class="mb-n3 mx-n3"> mdi-whatsapp </v-icon>
            </v-col>
          </v-row>
        </div>
      </v-btn>
    </template>
    <v-btn
      v-if="!isCheckoutPage()"
      fab
      small
      color="primary"
      :disabled="cartItemsCount() === 0"
      @click="checkout()"
    >
      <v-icon>mdi-cart-check</v-icon>
    </v-btn>
    <v-btn fab dark small color="orange" @click="phone()">
      <v-icon>mdi-phone</v-icon>
    </v-btn>
    <v-btn fab dark small color="green" @click="whatsapp()">
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>
const CheckoutPath = 'checkout'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['cartItemsCount']),
  },
  methods: {
    isCheckoutPage() {
      const idx = $nuxt.$route.path.toLowerCase().indexOf(CheckoutPath)
      return idx === 0 || idx === 1
    },
    checkout: function () {
      this.$router.push('/checkout')
    },
    phone() {
      this.redirectTo('tel:+972542204119')
    },
    whatsapp() {
      this.redirectTo('https://wa.me/972542204119?text=יש%20לי%20שאלה:%0D%0A')
    },
    redirectTo(url) {
      window.location.replace(url)
    },
  },
  data() {
    return {
      fab: false,
    }
  },
}
</script>
