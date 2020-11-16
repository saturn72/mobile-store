<template>
  <v-card max-height="auto">
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
        <AddSubtractProduct :product="product" icon="mdi-cart" />
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
  <script lang="ts">
const mediaTypes = {
  image: 'img',
  video: 'video',
}
import { mapActions, mapGetters } from 'vuex'
import { MediaItem, Product } from '@/domain/models'
import Vue from 'vue'
export default Vue.extend({
  props: {
    product: { type: Object as () => Product },
  },
  computed: {
    ...mapGetters('cart', ['getCartItemQuantity']),
  },
  methods: {
    ...mapActions(['incrementCartItem', 'decrementCartItem']),
    mediaToCarouselItems: function (media: {
      images: MediaItem[]
      videos: MediaItem[]
    }) {
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
})
</script>
