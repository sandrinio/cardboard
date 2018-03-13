<template>
  <v-layout>
    <v-flex xs8 offset-xs2>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue darken-3" dark>
          <v-toolbar-title>{{company.company}}</v-toolbar-title>
        </v-toolbar>
        <form class="pl-4 pr-4 pt-2 pb-2">
            <v-flex xs4>
              <v-text-field
                label="Product Name"
                v-model="product.productName"
              ></v-text-field>
            </v-flex>
          <v-layout>
            <v-flex xs4>
              <v-select
                :items="profileCat"
                v-model="product.profile"
                label="პროფილი"
                single-line
              ></v-select>
            </v-flex>
            <v-flex xs4 class="ml-4">
              <v-select
                :items="items"
                v-model="product.layerQuantity"
                label="შრეების რაოდენობა"
                single-line
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row v-if="this.product.layerQuantity === '3' || this.product.layerQuantity === '5'">
            <v-flex sm4>
              <v-select
                :items="materials"
                v-model="product.layer1"
                label="Select"
                single-line
              ></v-select>
            </v-flex>
            <v-flex sm4>
              <v-select
                class="ml-2"
                :items="materials"
                v-model="product.layer2"
                label="Select"
                single-line
              ></v-select>
            </v-flex>
            <v-flex sm4>
              <v-select
                class="ml-2"
                :items="materials"
                v-model="product.layer3"
                label="Select"
                single-line
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row v-if="this.product.layerQuantity === '5'">
            <v-flex sm3>
              <v-select
                class="ml-2"
                :items="materials"
                v-model="product.layer4"
                label="Select"
                single-line
              ></v-select>
            </v-flex>
            <v-flex sm3>
              <v-select
                class="ml-2"
                :items="materials"
                v-model="product.layer5"
                label="Select"
                single-line
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout class="mt-4">
            <v-flex sm4>
              <h3>ყუთი</h3>
              <v-text-field
                label="ყუთის სიმაღლე"
                type="number"
                v-model="product.boxHeight"
              ></v-text-field>
              <v-text-field
                label="ყუთის სიგანე"
                type="number"
                v-model="product.boxWidth"
              ></v-text-field>
              <v-text-field
                label="ყუთის სისქე"
                type="number"
                v-model="product.boxThickness"
              ></v-text-field>
            </v-flex>
            <v-flex sm4 class="ml-5">
              <h3>მამალი</h3>
              <v-text-field
                label="ტიხარის სიმაღლე"
                type="number"
                v-model="product.mDividerHeight"
              ></v-text-field>
              <v-text-field
                label="ტიხარის სიგანე"
                type="number"
                v-model="product.mDividerWidth"
              ></v-text-field>
              <v-text-field
                label="ტიხარის სისქე"
                type="number"
                v-model="product.mDividerThickness"
              ></v-text-field>
            </v-flex>
            <v-flex sm4 class="ml-5">
              <h3>დედალი</h3>
              <v-text-field
                label="ტიხარის სიმაღლე"
                type="number"
                v-model="product.fDividerHeight"
              ></v-text-field>
              <v-text-field
                label="ტიხარის სისქე"
                type="number"
                v-model="product.fDividerWidth"
              ></v-text-field>
              <v-text-field
                label="ტიხარის სიგანე"
                type="number"
                v-model="product.fDividerThickness"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-btn class="primary" dark @click="confirm">Create</v-btn>
        </form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import CompanyServices from '@/services/CompanyServices'

  export default {
    data () {
      return {
          items: [
           '3', '5'
            ],
          materials: [
            'მუყაო', 'წყალგამძლე', 'თეთრი'
          ],
          profileCat: [
            'B', 'E', 'C'
          ],
          company: '',
          product:{
            productName: '',
            layerQuantity: '',
            layer1: '',
            layer2: '',
            layer3: '',
            layer4: '',
            layer5: '',
            profile: '',
            boxHeight: '',
            boxWidth: '',
            boxThickness: '',
            mDividerHeight: '',
            mDividerWidth: '',
            mDividerThickness: '',
            fDividerHeight: '',
            fDividerWidth: '',
            fDividerThickness: ''
          }
        }
      },
    methods: {
      confirm (e) {
        e.preventDefault()
        const newProduct = this.product
        newProduct.id = this.$route.params.id

        CompanyServices.newProduct(newProduct)
          .then((response) => {
            console.log(response.data)
          })
          .catch((err)=> {
            console.log(err.data)
          })
      }
    },
    mounted () {
      CompanyServices.getCompany(this.$route.params)
        .then((res) => {
          this.company = res.data.company
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
