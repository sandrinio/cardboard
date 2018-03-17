<template>
    <v-layout>
      <v-flex md8 xs12 offset-md2>
        <div class="white elevation-2">
          <v-toolbar flat dense class="blue darken-3" dark>
            <v-toolbar-title>კომპანიები</v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-card-title>
              <v-btn small class="primary"
                     v-if="$store.state.user.permission === 'Admin'"
                     dark
                     @click="navigateTo({name: 'newOrder'})"
              >New Order
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
              :items="items"
              :search="search"
            >
              <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
              <template slot="items" slot-scope="props">
                <td>{{props.item.regDate.slice(0,8)}}</td>
                <td class="text-xs-left">{{props.item.company}}</td>
                <td class="text-xs-left">{{props.item.products.length}}</td>
                <td class="text-xs-left">{{props.item.orders}}</td>
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
  import CompanyServices from '@/services/CompanyServices'

export default {
  data (){
    return {
      items: [],
      loading: true,
      search: '',
      headers: [
        {
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Company Name', value: 'company' },
        { text: 'Product', value: 'product' },
        { text: 'Total Orders', value: 'total orders' },
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
    CompanyServices.getCompanyList()
      .then((response) => {
        this.items = response.data
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
