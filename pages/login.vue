<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>
<script lang="ts">
import firebase from 'firebase'

import * as firebaseui from 'firebaseui'

const uiConfig: firebaseui.auth.Config = {
  signInSuccessUrl: '',
  autoUpgradeAnonymousUsers: true,
  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      defaultCountry: 'IL',
      loginHint: '+9721234567',
      whitelistedCountries: ['IL'],
      recaptchaParameters: {
        size: 'invisible',
      },
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    },
  ],
}

export default {
  mounted() {
    uiConfig.callbacks = {
      signInFailure: async (error: any): Promise<void> => {
        if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
          return Promise.resolve()
        }
        var cred = error.credential
        await firebase.auth().signInWithCredential(cred)
      },
    }
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    firebase.auth().useDeviceLanguage()

    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  },
}
</script>
<style>
@import '~/node_modules/firebaseui/dist/firebaseui.css';
</style>