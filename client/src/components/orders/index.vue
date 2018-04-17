<template>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md10>
        <v-card class="white elevation-2">
          <v-toolbar flat dense class="blue darken-3" dark>
            <v-toolbar-title>შეკვეთები</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="navigateTo('/')">
              <v-icon>arrow_back</v-icon>
            </v-btn>
          </v-toolbar>
            <v-card-title>
              <v-btn small class="primary"
                     v-if="$store.state.user.permission === 'Admin'"
                     dark
                     @click="navigateTo({name: 'newOrder'})"
              ><strong>ახალი შეკვეთა</strong>
              </v-btn>
              <v-spacer></v-spacer>
              <v-text-field
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-model="search"
              ></v-text-field>
            </v-card-title>
          <v-card-text>
            <v-data-table
              :loading="loading"
              :headers="headers"
              :items="orders"
              :search="search"
            >
              <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
              <template slot="items" slot-scope="props">
                <td :class="props.item.status"><strong>{{props.item.status}}</strong></td>
                <td class="text-xs-left">{{props.item.deadline.slice(0,8)}}</td>
                <td class="text-xs-left pointer" @click="navigateTo(`/orders/show/${props.item._id}`)">{{props.item.company}}</td>
                <td class="text-xs-left pointer" @click="navigateTo(`/orders/show/${props.item._id}`)"><span><strong>{{props.item.product}}</strong></span> - {{props.item.boxHeight}}x{{props.item.boxWidth}}x{{props.item.boxThickness}}</td>
                <td class="text-xs-left">{{props.item.boxQuantity}}</td>
                <td class="text-xs-left">{{props.item.dividerQuantity}}</td>
              </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
  import OrderService from '@/services/OrderServices'

export default {
  data (){
    return {
      orders: [],
      loading: true,
      search: '',
      headers: [
        {
          text: 'სტატუსი',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'ვადა', value: 'ვადა' },
        { text: 'კომპანია', value: 'company' },
        { text: 'პროდუქტი', value: 'product' },
        { text: 'ყუთი', value: 'boxQuantity' },
        { text: 'ტიხარი', value: 'dividerQuantity' }
      ],
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  mounted () {
    OrderService.ordersGetter()
      .then((response) => {
        this.orders = response.data.orders
        this.loading = false

      })
      .catch((err) => {
        console.log(err.data)
      })
  }
}
</script>

<style scoped>

</style>
