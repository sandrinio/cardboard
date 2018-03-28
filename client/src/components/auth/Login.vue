<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
  <v-card class="elevation-12">
    <v-toolbar flat dense class="blue darken-3" dark>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
    <v-spacer></v-spacer>
    <v-card-text>
      <v-form>
          <v-text-field
            prepend-icon="person"
            label="Email"
            v-model="email"
            @keyup.enter="login"
          ></v-text-field>
          <br>
          <v-text-field
            prepend-icon="lock"
            label="Password"
            type="password"
            v-model="password"
            @keyup.enter="login"
          ></v-text-field>
          <div class="danger-alert" v-html="error" />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            dark
            :loading="loading"
            class="primary"
            @click="login">
            Login
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
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
            this.loading = false
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
