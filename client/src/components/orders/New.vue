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
                    item-text="company"
                    v-model="order.company"
                  ></v-select>
                </v-flex>
                <v-flex xs6>
                  <v-subheader>აირჩიეთ პროდუქტი</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    :disabled="productSelectDisabled"
                  ></v-select>
                </v-flex>
              </v-layout>
              <p>{{order.company}}</p>
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
          companies: [],
          products: [],
          loading: true,
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
            this.companies = response.data
            this.loading = false
          })
          .catch((err) => {
            console.log(err.data)
          })
      },
      watch: {
        // 'this.order.company': function () {
        //   console.log('reached')
        //   const _this = this
        //   _this.companies.forEach(function (company) {
        //     if(company.company === this.order.company){
        //       company.products.forEach(function(product){
        //         _this.products.push(product)
        //       })
        //     }
        //   })
        //   console.log(_this.products)
        //   _this.productSelectDisabled = false
        // }
      }
		}
</script>

<style scoped>

</style>
