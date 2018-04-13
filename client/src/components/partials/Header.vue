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
              <v-icon medium color="black darken-2">home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><strong>მთავარი</strong></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="navigate('clients')">
            <v-list-tile-action>
              <v-icon medium color="green darken-2">domain</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><strong>კომპანიები და პროდუქტები</strong></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="navigate('orders')">
            <v-list-tile-action>
              <v-icon medium color="purple darken-2">payment</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><strong>შეკვეთები</strong></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="navigate('warehouse')">
            <v-list-tile-action>
              <v-icon medium color="brown darken-2">branding_watermark</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><strong>საწყობი</strong></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="navigate('supplies')">
            <v-list-tile-action>
              <v-icon medium color="blue darken-2">style</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><strong>მარაგი</strong></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-navigation-drawer>

      <v-toolbar color="indigo" dark fixed app :clipped-left="$vuetify.breakpoint.lgAndUp">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="homeLink" @click="navigate('dashboard')">Cardboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-menu offset-y open-on-hover>
            <v-btn flat dark slot="activator">{{this.$store.state.user.name}} {{this.$store.state.user.surname}}</v-btn>
            <v-list>
              <v-list-tile @click="">
                <v-list-tile-title v-if="!this.$store.state.isUserLoggedIn" flat @click="navigate('login')">Login</v-list-tile-title>
                <v-list-tile-title v-else flat @click="logout">Logout</v-list-tile-title>
                <v-list-tile-title flat @click="navigate('register')" v-if="$store.state.user.permission === 'Admin'">Register</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
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
        drawer: false,
        navItems: [{title: 'Logout'}, {title: 'Register'}]
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
