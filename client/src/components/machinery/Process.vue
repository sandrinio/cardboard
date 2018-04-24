<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm10 md12>
      <v-card class="elevation-2">
        <v-toolbar flat dense class="brown" dark>
          <v-toolbar-title>დანადგარები</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="navigateTo('/')">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-title class="secondary">
          <v-btn small class="primary"
                 v-if="$store.state.user.permission === 'Admin'"
                 dark
                 @click="navigateTo({name: 'process'})"
          ><strong>ისტორია</strong>
          </v-btn>
        </v-card-title>
        <v-card-text class="secondary">
          <v-layout align-center justify-center>
            <v-flex md10 xs6>
              <gopre-slot></gopre-slot>
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center>
            <v-flex md10 xs6>
              <sloteri-slot></sloteri-slot>
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center>
            <v-flex md10 xs6>
              <shesawebebeli-slot></shesawebebeli-slot>
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center>
            <v-flex md10 xs6>
              <gamanawilebeli-slot></gamanawilebeli-slot>
            </v-flex>
          </v-layout>

        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import GopreSlot from './machines/Gopre'
import GamanawilebeliSlot from './machines/Gamanawilebeli'
import ShesawebebeliSlot from './machines/Shesawebebeli'
import SloteriSlot from './machines/Sloteri'

		export default {
      name: "Process",
      components: {GopreSlot, GamanawilebeliSlot, ShesawebebeliSlot, SloteriSlot},
      data () {
        return {

        }
      },
      methods: {
        navigateTo(route) {
          this.$router.push(route)
        }
      }
		}
</script>

<style scoped>

</style>
