<template>
  <v-card class="mx-auto" max-width="344">
    <v-row>
      <v-col cols="3">
        <v-avatar class="profile" color="grey" size="100">
          <v-img :src="getPrimaryMediaItem(product.media)">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="black"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-avatar>
      </v-col>
      <v-col>
        <v-card-title> {{ product.name }} </v-card-title>
        <v-card-subtitle>
          {{ product.shortDescription }}
        </v-card-subtitle>
        <v-card-subtitle>
          <v-row>
            <v-col cols="3">
              <strong>{{ product.price }} ₪</strong>
            </v-col>
            <v-col cols="9">
              <v-row>
                <v-btn fab x-small color="primary" @click="addToCart()">
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
                <v-spacer />
                <v-chip active class="ma-2" small outlined pill>
                  10<v-icon left>mdi-cart-outline</v-icon>
                </v-chip>
                <v-spacer />
                <v-btn fab x-small color="primary" @click="removeFromCart()">
                  <v-icon dark> mdi-minus </v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-card-subtitle>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-btn color="green lighten-2" text block @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        <v-spacer></v-spacer>
        Explore
      </v-btn>
    </v-card-actions>
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
import { Product } from './models'
export default {
  props: {
    product: Product,
  },
  methods: {
    addToCart: function () {
      this.$store.commit('cart/addItem', this.product)
    },
    removeFromCart: function (product) {
      this.$store.commit('cart/removeItem', this.product)
    },
    getPrimaryMediaItem: function (items) {
      return (
        items.images.find((i) => i.isPrimary) ??
        items.videos.find((i) => i.isPrimary) ??
        items[0]
      )
    },
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
