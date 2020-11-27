<template>
  <v-img :src="img">
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="black"></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>
<script lang="ts">
import Vue from 'vue'
import consts from '@/utilities/consts'

export default Vue.extend({
  props: {
    size: { type: Number, default: 100 },
    img: { type: String, default: consts.UserImage },
  },
})
</script>