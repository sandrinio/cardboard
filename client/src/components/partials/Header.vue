<template>
  <div v-if="this.$route.path !== '/login'">
    <v-navigation-drawer
        fixed
        v-model="drawer"
        app
        :clipped="$vuetify.breakpoint.lgAndUp"
      >
        <v-list dense>
          <v-list-tile @click="navigate('dashboard')">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="navigate('clients')">
            <v-list-tile-action>
              <v-icon>contacts</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Clients</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="navigate('orders')">
            <v-list-tile-action>
              <v-icon>payment</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Orders</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      
      <v-toolbar color="indigo" dark fixed app :clipped-left="$vuetify.breakpoint.lgAndUp">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Cardboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>{{this.$store.state.user.name}} {{this.$store.state.user.surname}}</v-btn>
        <v-btn v-if="!this.$store.state.isUserLoggedIn" flat @click="navigate('login')">Login</v-btn>
        <v-btn v-else flat @click="logout">Logout</v-btn>
        <v-btn flat @click="navigate('register')" v-if="$store.state.user.permission === 'Admin'">Register</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        routes: [
          'Companies',  
          'Orders'
        ],
        drawer: false
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
