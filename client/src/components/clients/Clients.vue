<template>
    <v-layout>
      <v-flex md7 xs12>
        <div class="white elevation-2">
          <v-toolbar flat dense class="blue darken-3" dark>
            <v-toolbar-title>კომპანიები</v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-card-title>
              <v-btn small class="primary" dark @click.stop="newCompanyDialog = true">New Company</v-btn>
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
                <td class="text-xs-left pointer" @click="detailsDialog(props.item)">{{props.item.company}}</td>
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

      <v-flex md5 xs12 class="ml-3">
        <products-component v-if="companyProductListDialog === true" :temporary="temporary"></products-component>
      </v-flex>
    </v-layout>
</template>

<script>
import CompanyServices from '@/services/CompanyServices'
import ProductsComponent from '@/components/clients/ProductsComponent'

  export default {
    components: {ProductsComponent},
    data () {
      return {
        newCompanyDialog: false,
        companyProductListDialog: false,
        companyName: '',
        temporary: {},
        search: '',
        loading: true,
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
        if(this.companyProductListDialog === true){
          return this.companyProductListDialog = false
        }else{
          this.temporary = item
          return this.companyProductListDialog = true
        }

      },
      navigateTo (route){
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .products-list {
    width: 200px;
    margin: 30px;
  }

  .products-list ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .products-list li {
    font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
    border-bottom: 1px solid #ccc;
  }

  .products-list li:last-child {
    border: none;
  }

  .products-list li a {
    text-decoration: none;
    color: #000;

    -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
    -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
    -o-transition: font-size 0.3s ease, background-color 0.3s ease;
    -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
    transition: font-size 0.3s ease, background-color 0.3s ease;
    display: block;
    width: 200px;
  }

  .products-list li a:hover {
    font-size: 20px;
    background: #f6f6f6;
  }

  .pointer:hover {
    cursor: pointer;
  }

</style>
