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
      fab
      small
      color="primary"
      :disabled="cartTotal() === 0"
      @click="toCheckout()"
    >
      <v-icon>mdi-cart-check</v-icon>
    </v-btn>
    <v-btn fab dark small color="green">
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['cartTotal']),
  },
  methods: {
    toCheckout: function () {
      this.$router.push('/checkout')
    },
  },
  data() {
    return {
      fab: false,
    }
  },
}
</script>
