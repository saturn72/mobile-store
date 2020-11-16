<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>
<script lang="ts">
import firebase from 'firebase'

import * as firebaseui from 'firebaseui'
export default {
  mounted() {
    const uiConfig: firebaseui.auth.Config = {
      signInSuccessUrl: '/',
      popupMode: true,
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: 'IL',
          whitelistedCountries: ['IL'],
        },
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        },
      ],
    }
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  },
}
</script>
<style>
@import '~/node_modules/firebaseui/dist/firebaseui.css';
</style>