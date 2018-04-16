<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md10>
      <v-card class="white elevation-2">
        <v-toolbar flat dense class="blue darken-3" dark>
          <v-toolbar-title>მარაგი</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="navigateTo('/')">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-title>
          <v-btn small class="primary"
                 v-if="$store.state.user.permission === 'Admin'"
                 dark
                 @click="navigateTo({name: 'addSupplies'})"
          ><strong>მარაგის შევსება</strong>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>



        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    name: "supplies",
  data () {
      return {

      }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
