<template>
  <v-layout>
    <v-flex md6 xs12 offset-md3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue darken-3" dark>
          <v-toolbar-title>ახალი შეკვეთა</v-toolbar-title>
        </v-toolbar>
        <v-progress-linear v-if="loading" :loading="loading"></v-progress-linear>
        <v-card>
          <v-form>
            <v-card-title>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-subheader>აირჩიეთ კომპანია</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    :items="companies"
                    v-model="order.company"
                  ></v-select>
                </v-flex>
                <v-flex xs6>
                  <v-subheader>აირჩიეთ პროდუქტი</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    :disabled="productSelectDisabled"
                    :items="products"
                    item-text="productName"
                    v-model="order.product"
                    autocomplete
                  ></v-select>
                </v-flex>
                <v-flex xs12 v-if="showDetails">
                  <table id="productInfoTable">
                    <tr>
                      <th>შრე - {{selectedProductDetails.layerQuantity}}</th>
                      <th>პროფილი</th>
                      <th>მამალი ტიხარი</th>
                      <th>დედალი ტიხარი</th>
                      <th>ყუთი</th>
                    </tr>
                    <tr>
                      <td><span v-for="(layer) in selectedProductDetails.layers">{{layer}}<br></span></td>
                      <td>{{selectedProductDetails.profile}}</td>
                      <td>{{selectedProductDetails.mDividerHeight}}x{{selectedProductDetails.mDividerWidth}}x{{selectedProductDetails.mDividerThickness}}</td>
                      <td>{{selectedProductDetails.fDividerHeight}}x{{selectedProductDetails.fDividerWidth}}x{{selectedProductDetails.fDividerThickness}}</td>
                      <td>{{selectedProductDetails.boxHeight}}x{{selectedProductDetails.boxWidth}}x{{selectedProductDetails.boxThickness}}</td>
                    </tr>
                  </table>
                </v-flex>
              </v-layout>
            </v-card-title>
          </v-form>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import CompanyServices from '@/services/CompanyServices'

		export default {
      data () {
        return {
          productSelectDisabled: true,
          fullData: [],
          companies: [],
          products: [],
          selectedProductDetails: {},
          showDetails: false,
          loading: true,
          search: '',
          order: {
            company: '',
            product: '',
            boxQuantity: '',
            dividerQuantity: '',
            deadline: '',
            comment: ''
          }
        }
      },
      mounted () {
        CompanyServices.getCompanyList()
          .then((response) => {
            const _this = this
            _this.fullData = response.data
            response.data.forEach(function (companyName) {
              _this.companies.push(companyName.company)
            })
            this.loading = false
          })
          .catch((err) => {
            console.log(err.data)
          })
      },
      watch: {
        'order.company': function (selectedCompany) {
          const _this = this
          _this.products = []
           _this.fullData.forEach(function (comp) {
             if(comp.company === selectedCompany){
               comp.products.forEach(function (prod) {
                 _this.products.push(prod)
               })
             }
           })
          _this.productSelectDisabled = false
        },
        'order.product': function (selectedProduct) {
          this.showDetails = true
          console.log(selectedProduct)
          this.selectedProductDetails = selectedProduct
        }
      }
		}
</script>

<style scoped>
  #productInfoTable {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    text-align: center;
  }

  #productInfoTable td, #productInfoTable th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #productInfoTable tr:nth-child(even){background-color: #f2f2f2;}

  /*#productInfoTable tr:hover {background-color: #ddd;}*/

  #productInfoTable th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
  }
</style>
