<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md10>
      <v-card class="elevation-2">
        <v-toolbar flat dense class="brown" dark>
          <v-toolbar-title>მარაგი</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="navigateTo('/')">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-title class="secondary">
          <v-btn small class="primary"
                 v-if="$store.state.user.permission === 'Admin'"
                 dark
                 @click="navigateTo({name: 'addSupplies'})"
          ><strong>მარაგის შევსება</strong>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text class="secondary">
          <paper-part-component></paper-part-component>
          <glue-part-component></glue-part-component>
          <dye-part-component></dye-part-component>
          <starch-part-component></starch-part-component>
          <wrapper-part-component></wrapper-part-component>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import PaperPartComponent from '@/components/supplies/PaperPart'
import GluePartComponent from '@/components/supplies/GluePart'
import DyePartComponent from '@/components/supplies/DyePart'
import StarchPartComponent from '@/components/supplies/StarchPart'
import WrapperPartComponent from '@/components/supplies/WrapperPart'

export default {
  components: {
    PaperPartComponent,
    GluePartComponent,
    DyePartComponent,
    StarchPartComponent,
    WrapperPartComponent
  },
  data () {
      return {

      }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    deletePaper () {
      console.log('delete BTN')
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
</style>
