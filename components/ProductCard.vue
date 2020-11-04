<template>
  <v-card class="mx-auto" max-height="auto">
    <v-row dense>
      <v-col cols="4" dense>
        <ProductAvatar :product="product" class="mr-1" />
      </v-col>
      <v-col cols="8" dense>
        <v-card-title> {{ product.name }} </v-card-title>
        <v-card-subtitle>
          {{ product.shortDescription }}
        </v-card-subtitle>
        <v-row dense justify="center">
          <h3 class="font-weight-bold accent--text">{{ product.price }} ₪</h3>
          <v-spacer></v-spacer>

          <v-btn
            class="mx-auto"
            color="green lighten-2"
            text
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            <v-spacer></v-spacer>
            More info
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="8" dense>
        <v-text-field
          dense
          append-outer-icon="mdi-minus-circle-outline"
          append-icon="mdi-cart"
          prepend-icon="mdi-plus-circle-outline"
          @click:prepend="incrementCartItem(product)"
          @click:append-outer="decrementCartItem(product)"
          v-bind:key="product.id"
          outlined
          readonly
          rounded
          v-bind:value="cartItemQuantity(product)"
        >
        </v-text-field>
      </v-col>
      <v-col cols="4" dense> </v-col>
    </v-row>

    <v-expand-transition>
      <div v-show="show">
        <v-carousel hide-delimiters height="auto">
          <v-carousel-item
            ripple
            v-for="(item, i) in mediaToCarouselItems(product.media)"
            :key="i"
            :title="item.description"
          >
            <v-img :src="item.src">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="green"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-carousel-item>
        </v-carousel>
        <v-divider />
        <v-card-text>
          {{ product.fullDescription }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
const mediaTypes = {
  image: 'img',
  video: 'video',
}
import VendorStoreHeader from './VendorStoreHeader'
import { mapActions, mapGetters } from 'vuex'
import { Product } from './models'
export default {
  props: {
    product: Product,
  },
  computed: {
    ...mapGetters('cart', ['cartItemQuantity']),
  },
  methods: {
    ...mapActions(['incrementCartItem', 'decrementCartItem']),
    mediaToCarouselItems: function (media) {
      const imgs = media.images.map((i) => {
        return {
          type: mediaTypes.image,
          src: i.src,
          description: i.description,
          displayOrder: i.displayOrder,
          isPrimary: i.isPrimary,
        }
      })
      let cm = [...imgs]
      const videos = media.videos.map((i) => {
        return {
          type: mediaTypes.video,
          src: i.src,
          description: i.description,
          displayOrder: i.displayOrder,
          isPrimary: i.isPrimary,
        }
      })
      // cm = [...videos]
      return cm
    },
  },
  data() {
    return {
      show: false,
      consts: {
        mediaTypes,
      },
    }
  },
}
</script>
