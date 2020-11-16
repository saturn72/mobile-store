<template>
  <v-avatar class="profile" color="grey" :size="size">
    <v-img :src="getPrimaryMediaItem()">
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
</template>
<script>
import { Product } from '@/domain/models'
export default {
  props: {
    product: { type: Product },
    size: { type: Number, default: 100 },
  },
  methods: {
    getPrimaryMediaItem: function () {
      return (
        this.product.media.images.find((i) => i.isPrimary) ??
        this.product.media.videos.find((i) => i.isPrimary) ??
        this.product.media[0] ??
        ''
      )
    },
  },
}
</script>
