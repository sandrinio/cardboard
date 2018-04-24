<template>
  <v-expansion-panel popout>
    <v-expansion-panel-content class="tab-header-color white--text">
      <div slot="header"><strong>გამანაწილებელი</strong></div>
      <v-card class="tab-text-color">
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
		export default {
				name: "gamanawilebeli"
		}
</script>

<style scoped>
  .tab-header-color {
    background-color: #795548 !important;
    border-color: #795548 !important;
    border-radius: 7px 7px 0 0
  }
  .tab-text-color {
    background-color: #f2eee0 !important;
    border-color: #f2eee0 !important;
  }
</style>
