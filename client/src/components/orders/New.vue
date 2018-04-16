<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md10>
      <v-card class="white elevation-2">
        <v-toolbar flat dense class="blue darken-3" dark>
          <v-toolbar-title>ახალი შეკვეთა</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="navigateTo('/orders')">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-toolbar>
        <v-progress-linear v-if="loading" :loading="loading"></v-progress-linear>
          <v-form>
            <v-card-text>
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
                      <td><span v-for="(layer, index) in selectedProductDetails.layers">#{{ index+1 }} შრე: {{layer}}<br></span></td>
                      <td>{{selectedProductDetails.profile}}</td>
                      <td>{{selectedProductDetails.mDividerHeight}}x{{selectedProductDetails.mDividerWidth}} რაოდ.{{selectedProductDetails.mDividerQuantity}}</td>
                      <td>{{selectedProductDetails.fDividerHeight}}x{{selectedProductDetails.fDividerWidth}} რაოდ.{{selectedProductDetails.fDividerQuantity}}</td>
                      <td>{{selectedProductDetails.boxHeight}}x{{selectedProductDetails.boxWidth}}x{{selectedProductDetails.boxThickness}}</td>
                    </tr>
                  </table>
                  <v-spacer></v-spacer>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <v-text-field
                    label="Box Quantity"
                    type="number"
                    v-model="order.boxQuantity"
                  ></v-text-field>
                  <v-text-field
                    label="Divider Quantity"
                    type="number"
                    v-model="order.dividerQuantity"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs6>
                  <v-menu
                    ref="menu"
                    lazy
                    :close-on-content-click="false"
                    v-model="menu"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    min-width="290px"
                    :return-value.sync="order.deadline"
                  >
                    <v-text-field
                      slot="activator"
                      label="შესრულების ბოლო ვადა"
                      v-model="order.deadline"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-date-picker v-model="order.deadline" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn flat color="primary" @click="$refs.menu.save(order.deadline)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
              <v-layout row class="mt-4">
                <v-flex xs12>
                  <v-text-field
                    name="input-7-1"
                    label="Comment"
                    multi-line
                    v-model="order.comment"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn
                dark
                :btnLoading="btnLoading"
                class="primary"
                @click="newOrder">
                Confirm
              </v-btn>
            </v-card-actions>
          </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import CompanyServices from '@/services/CompanyServices'
import OrderServices from '@/services/OrderServices'

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
          btnLoading: false,
          menu: '',
          search: '',
          order: {
            company: '',
            companyId: '',
            product: '',
            boxQuantity: '',
            dividerQuantity: '',
            deadline: '',
            comment: ''
          }
        }
      },
      methods: {
        newOrder () {
          const newOrder = {
            company: this.order.company,
            product: this.order.product.productName,
            boxQuantity: this.order.boxQuantity,
            dividerQuantity: this.order.dividerQuantity,
            boxHeight: this.order.product.boxHeight,
            boxWidth: this.order.product.boxWidth,
            boxThickness: this.order.product.boxThickness,
            mDividerHeight: this.order.product.mDividerHeight,
            mDividerWidth: this.order.product.mDividerWidth,
            mDividerThickness: this.order.product.mDividerThickness,
            fDividerHeight: this.order.product.fDividerHeight,
            fDividerWidth: this.order.product.fDividerWidth,
            fDividerThickness: this.order.product.fDividerThickness,
            deadline: this.order.deadline,
            comment: this.order.comment
          }
          console.log(newOrder)

          OrderServices.newOrder(this.order)
            .then((res) => {
              this.btnLoading = false
              this.$router.push({name: 'orders'})
            })
            .catch((err) => {
              console.log(err.data)
            })
        },
        navigateTo(route){
          this.$router.push(route)
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
    background-color: #327135;
    color: white;
  }
</style>
