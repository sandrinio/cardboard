<template>
  <v-toolbar fixed dark class="blue darken-4" v-if="this.$route.path !== '/login'">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="homeLink" @click="navigate('dashboard')">Cardboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="navigate('clients')">Clients</v-btn>
      <v-btn v-if="!this.$store.state.isUserLoggedIn" flat @click="navigate('login')">Login</v-btn>
      <v-btn v-else flat @click="logout">Logout</v-btn>
      <v-btn flat @click="navigate('register')" v-if="$store.state.user.permission === 'Admin'">Register</v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
        routes: [
          'Companies',
          'Orders'
        ]
      }
    },
    methods: {
      navigate (routeName){
        this.$router.push({name: routeName})
      },
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homeLink:hover {
  cursor: pointer;
}
</style>
