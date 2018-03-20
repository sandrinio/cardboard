<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue darken-3" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <div title="Login">
            <br>
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="Name"
              v-model="name"
            ></v-text-field>
            <br>
            <v-text-field
              prepend-icon="account-box"
              label="surname"
              @keyup.enter="register"
              v-model="surname"
            ></v-text-field>
            <v-select
              :items="roles"
              v-model="permission"
              label="Select"
              single-line
              auto
              prepend-icon="star"
              @keyup.enter="register"
              hide-details
            ></v-select>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              @keyup.enter="register"
            ></v-text-field>
            <v-text-field
              label="Re-type Password"
              type="password"
              v-model="password2"
              @keyup.enter="register"
            ></v-text-field>
            <br>
            <div class="danger-alert" v-html="error" />
            <br>
            <v-btn
              dark
              :loading="loading"
              class="blue darken-3"
              :keyup.13="register"
              @click="register">
              Register
            </v-btn>
          </div>
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
        roles: [
          "Admin",
          "User",
          "Advanced"
        ],
        error: '',
        email: '',
        name: '',
        surname: '',
        password: '',
        password2: '',
        permission: '',
        loading: false
      }
    },
    methods: {
      register () {
        this.loading = true
        const user = {
          permission: this.permission,
          email: this.email,
          name: this.name,
          surname: this.surname,
          password: this.password
        }
        const allFieldsFilled = Object
          .keys(user)
          .every(key => !!user[key])
        if(this.password !== this.password2){
          return this.error = 'პაროლი არ ემთხვევა'
        }
        if(!allFieldsFilled){
          return this.error = 'შეავსე ყველა ველი'
        }
        AuthService.register(user)
          .then((response) => {
            this.loading = false
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.user)
            this.$router.push({name: 'dashboard'})
          })
          .catch((err) => {
            console.log(err.data)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
