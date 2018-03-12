<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs8 offset-xs2>
        <div class="white elevation-2">
          <v-toolbar flat dense class="blue darken-3" dark>
            <v-toolbar-title>Companies</v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-card-title>
              <v-btn small class="primary" dark @click.stop="newCompanyDialog = true">New</v-btn>
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
              :headers="headers"
              :items="items"
              :search="search"
            >
              <template slot="items" slot-scope="props">
                <td>{{props.item.regDate.slice(0,8)}}</td>
                <td class="text-xs-left" @click="detailsDialog(props.item)">{{props.item.company}}</td>
                <td class="text-xs-left">{{props.item.products.length}}</td>
                <td class="text-xs-left">{{props.item.orders}}</td>
                <td class="justify-center layout px-0">
                  <v-btn icon class="mx-0" @click="editItem(props.item)">
                    <v-icon color="teal">edit</v-icon>
                  </v-btn>
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
      <v-dialog v-model="newCompanyDialog" max-width="500px">
        <v-card>
          <v-card-title>
            ახალი კომპანიის რეგისტრაცია
          </v-card-title>
          <v-card-text>
            <form>
            <v-text-field
              label="კომპანიის სახელი (ლათინური ასოებით)"
              v-model="companyName"
            ></v-text-field>
            </form>
          </v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="newCompanyDialog=false">Close</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="saveCompany">Submit</v-btn>
          </v-card-actions>

        </v-card>
      </v-dialog>

      <v-dialog v-model="companyProductListDialog" max-width="500px">
        <v-card>
          <v-card-title>
            {{temporary.company}}-ს პროდუქტები
          </v-card-title>
          <v-card-text>
            <ul>
              <li :items="temporary.products">
                {{items}}
              </li>
            </ul>
          </v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="companyProductListDialog=false">Close</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="navigateTo({name: 'newCompany', props: {company: temporary}, params: {id: temporary._id}})" flat >New Product</v-btn>
          </v-card-actions>

        </v-card>
      </v-dialog>

    </v-layout>
  </v-container>
</template>

<script>
import CompanyServices from '@/services/CompanyServices'
  export default {
    data () {
      return {
        newCompanyDialog: false,
        companyProductListDialog: false,
        companyName: '',
        temporary: {},
        search: '',
        headers: [
          {
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Company Name', value: 'company' },
          { text: 'Products', value: 'products' },
          { text: 'Total Orders', value: 'total orders' },
          { text: 'Actions', value: 'Actions' }
        ],
        items: []
      }
    },
    methods: {
      saveCompany () {
        CompanyServices.newCompany({companyName: this.companyName})
          .then((response) => {
            this.items.push(response.data.data)
            this.newCompanyDialog = false
          })
          .catch((err) => {
            console.log(err.data)
          })
      },
      deleteItem (company) {
        CompanyServices.deleteCompany({id: company._id})
          .then((res) => {
            const index = this.items.indexOf(company)
            this.items.splice(index, 1)
          })
          .catch((err) => {
            console.log(err)
          })
      },
      detailsDialog (item) {
        this.temporary = item
        this.companyProductListDialog = true
      },
      navigateTo (route){
        this.$router.push(route)
      }
    },
    mounted () {
      CompanyServices.companyGetter()
        .then((response) => {
          this.items = response.data
        })
        .catch((err) => {
          console.log(err.data)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
