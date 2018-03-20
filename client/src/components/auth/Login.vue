<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
  <div class="white elevation-2">
    <v-toolbar flat dense class="blue darken-3" dark>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>

    <div class="pl-4 pr-4 pt-2 pb-2">
      <v-form>
          <div title="Login">
            <br>
            <v-text-field
              label="Email"
              v-model="email"
              @keyup.enter="login"
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              @keyup.enter="login"
            ></v-text-field>
            <div class="danger-alert" v-html="error" />
            <v-spacer></v-spacer>
            <v-btn
              dark
              :loading="loading"
              class="primary"
              @click="login">
              Login
            </v-btn>
          </div>
      </v-form>
    </div>
  </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthServices'
  export default {
    data () {
      return {
        email: '',
        password: '',
        error: '',
        loading: false
      }
    },
    methods: {
      login () {
        this.loading = true
        const credentials = {
          email: this.email,
          password: this.password
        }
        AuthService.login(credentials)
          .then((response) => {
            if(response.data.error){
              this.loading = false
              this.error = response.data.error
            }else{
              this.loading = false
              this.$store.dispatch('setToken', response.data.token)
              this.$store.dispatch('setUser', response.data.user)
              this.$router.push({
                name: 'dashboard'
              })
            }
          })
          .catch((err) => {
            console.log(err.data)
          })
      },
      testing () {
        alert('done')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
