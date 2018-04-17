<template>
  <!--<v-layout class="ml-3">-->
      <v-card class="white elevation-2">
        <v-toolbar flat dense class="blue darken-3" dark>
          <v-toolbar-title>{{temporary.company}} პროდუქტები</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-spacer></v-spacer>
          <v-data-table
            :items="temporary.products"
            hide-actions
            class="elevation-0"
            hide-headers
          >
            <template slot="items" slot-scope="props">
              <td @click="navigateTo(`/clients/product-show/${props.item._id}`)" class="productName">
                <strong>{{ props.item.productName }}</strong> - {{props.item.boxHeight}}x{{props.item.boxWidth}}x{{props.item.boxThickness}}</td>
            </template>
          </v-data-table>
        </v-card-text>
        <hr>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="navigateTo({name: 'newProduct', params: {id: temporary._id}})" flat >პროდუქტის დამატება</v-btn>
        </v-card-actions>
      </v-card>
  <!--</v-layout>-->
</template>

<script>
  export default {
    props: ['temporary'],
    data () {
      return {
      }
    },
    methods: {
      navigateTo (route){
        this.$router.push(route)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .productName:hover {
    cursor: pointer;
    font-weight: bold;
    color: #1a9273;
  }
</style>
