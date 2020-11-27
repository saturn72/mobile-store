<template>
  <v-menu offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }">
      <v-avatar
        class="profile"
        color="grey"
        :size="size"
        v-bind="attrs"
        v-on="on"
      >
        <UserMenuProfileImage />
      </v-avatar>
    </template>
    <SignedOutUserMenuItems v-if="isAnonymous()" />
    <SignedInUserMenuItems v-else />
  </v-menu>
</template>
<script lang="ts">
import Vue from 'vue'
import consts from '~/utilities/consts'
import fb from '~/utilities/firebaseAdapter'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters('auth', ['isAnonymous']),
  },
  props: {
    size: { type: Number, default: 100 },
  },
})
</script>