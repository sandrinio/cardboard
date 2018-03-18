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
                <v-flex xs4 v-if="showDetails">
                  <ul>
                    <li>
                      ყუთი: {{selectedProductDetails.boxHeight}}x{{selectedProductDetails.boxWidth}}x{{selectedProductDetails.boxThickness}}
                    </li>
                    <li>
                      დედალი ტიხარი: {{selectedProductDetails.fDividerHeight}}x{{selectedProductDetails.fDividerWidth}}x{{selectedProductDetails.fDividerThickness}}
                    </li>
                    <li>
                      მამალი ტიხარი: {{selectedProductDetails.mDividerHeight}}x{{selectedProductDetails.mDividerWidth}}x{{selectedProductDetails.mDividerThickness}}
                    </li>
                    <li>
                      ტიხარის რაოდენობა თითო ყუთში: {{selectedProductDetails.dividersPerBox}}
                    </li>
                    <li>
                      შრე: {{}}
                    </li>
                    <li>
                      პროფილი: {{selectedProductDetails.profile}}
                    </li>
                  </ul>
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

</style>
