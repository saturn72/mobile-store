<template>
  <v-footer>
    <v-bottom-navigation
      app
      fixed
      grow
      shift
      hide-on-scroll
      background-color="blue-grey lighten-4"
      color="teal darken-3"
    >
      <v-btn value="messages" to="/messages">
        <span>Messages</span>
        <v-icon>mdi-message</v-icon>
      </v-btn>
      <v-btn value="account" to="/account">
        <span>Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn value="home" to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>
<script>
export default {}
</script>