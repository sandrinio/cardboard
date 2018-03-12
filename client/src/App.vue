<template>
  <div id="app">
    <v-app>
      <page-header/>

      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
      <page-footer />
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/partials/Header.vue'
import PageFooter from '@/components/partials/Footer.vue'

export default {
  name: 'App',
  data (){
    return {
      hide: true
    }
  },
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
.danger-alert {
  color: darkred;
}
</style>
