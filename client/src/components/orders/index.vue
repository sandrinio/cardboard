<template>
    <v-layout>
      <v-flex md10 xs12 offset-md1>
        <div class="white elevation-2">
          <v-toolbar flat dense class="blue darken-3" dark>
            <v-toolbar-title>შეკვეთები</v-toolbar-title>
          </v-toolbar>
          <v-card>
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
            <v-data-table
              :loading="loading"
              :headers="headers"
              :items="orders"
              :search="search"
            >
              <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
              <template slot="items" slot-scope="props">
                <td :class="props.item.status">{{props.item.status}}</td>
                <td class="text-xs-left">{{props.item.deadline.slice(0,8)}}</td>
                <td class="text-xs-left">{{props.item.company}}</td>
                <td class="text-xs-left"><span><strong>{{props.item.product}}</strong></span> - {{props.item.boxHeight}}x{{props.item.boxWidth}}x{{props.item.boxThickness}}</td>
                <td class="text-xs-left">{{props.item.boxQuantity}}</td>
                <td class="text-xs-left">{{props.item.dividerQuantity}}</td>
                <td class="justify-center layout px-0">
                  <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                    <v-icon color="pink">delete</v-icon>
                  </v-btn>
                </td>
              </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </v-data-table>
          </v-card>
        </div>
      </v-flex>

      <!--<v-flex md5 xs12 class="ml-3">-->
        <!--<products-component v-if="companyProductListDialog === true" :temporary="temporary"></products-component>-->
      <!--</v-flex>-->
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
        { text: 'ტიხარი', value: 'dividerQuantity' },
        { text: 'Actions', value: 'Actions' }
      ],
    }
  },
  methods: {
    deleteItem (item) {
      console.log(item)
    },
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
.In-Progress {
  color: #00acc1;
  font-weight: bold;
}
.Complete {
  color: darkgreen;
  font-weight: bold;
}
.On-Hold {
  color: #cccc00;
  font-weight: bold;
}
.Canceled {
  color: darkred;
  font-weight: bold;
}

</style>
