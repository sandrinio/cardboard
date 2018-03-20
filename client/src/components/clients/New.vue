<template>
  <v-layout>
    <v-flex xs8 offset-xs2>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue darken-3" dark>
          <v-toolbar-title>კომპანია: {{company}} - ახალი პროდუქტი</v-toolbar-title>
        </v-toolbar>
        <form class="pl-4 pr-4 pt-2 pb-2">
            <v-flex xs4>
              <v-text-field
                label="Product Name"
                v-model="product.productName"
                @keyup.enter="confirm"
              ></v-text-field>
            </v-flex>
          <v-layout>
            <v-flex xs4>
              <v-select
                :items="profileCat"
                v-model="product.profile"
                label="პროფილი"
                single-line
                @keyup.enter="confirm"
              ></v-select>
            </v-flex>
            <v-flex xs4 class="ml-4">
              <v-select
                :items="items"
                v-model="product.layerQuantity"
                label="შრეების რაოდენობა"
                single-line
                @keyup.enter="confirm"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row v-if="this.product.layerQuantity === '3' || this.product.layerQuantity === '5'">
            <v-flex sm3>
              <v-select
                :items="materials"
                v-model="layer1"
                label="შრე #1"
                single-line
              ></v-select>
              <v-select
                :items="materials"
                v-model="layer2"
                label="შრე #2"
                single-line
              ></v-select>
              <v-select
                :items="materials"
                v-model="layer3"
                label="შრე #3"
                single-line
                @keyup.enter="confirm"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row v-if="this.product.layerQuantity === '5'">
            <v-flex sm3>
              <v-select
                :items="materials"
                v-model="layer4"
                label="შრე #4"
                single-line
                @keyup.enter="confirm"
              ></v-select>
              <v-select
                :items="materials"
                v-model="layer5"
                label="შრე #5"
                single-line
                @keyup.enter="confirm"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout class="mt-4">
            <v-flex sm4>
              <h3>ყუთი</h3>
              <v-text-field
                label="ყუთის სიგრძე"
                type="number"
                v-model="product.boxThickness"
                @keyup.enter="confirm"
              ></v-text-field>
              <v-text-field
                label="ყუთის სიმაღლე"
                type="number"
                v-model="product.boxHeight"
                @keyup.enter="confirm"
              ></v-text-field>
              <v-text-field
                label="ყუთის სიგანე"
                type="number"
                v-model="product.boxWidth"
                @keyup.enter="confirm"
              ></v-text-field>
            </v-flex>
            <v-flex sm4 class="ml-5">
              <h3>მამალი</h3>
              <v-text-field
                label="ტიხარის სიგრძე"
                type="number"
                v-model="product.mDividerThickness"
              ></v-text-field>
              <v-text-field
                label="ტიხარის სიმაღლე"
                type="number"
                v-model="product.mDividerHeight"
              ></v-text-field>
              <v-text-field
                label="ტიხარის სიგანე"
                type="number"
                v-model="product.mDividerWidth"
                @keyup.enter="confirm"
              ></v-text-field>
            </v-flex>
            <v-flex sm4 class="ml-5">
              <h3>დედალი</h3>
              <v-text-field
                label="ტიხარის სიგრძე"
                type="number"
                v-model="product.fDividerThickness"
                @keyup.enter="confirm"
              ></v-text-field>
              <v-text-field
                label="ტიხარის სიმაღლე"
                type="number"
                v-model="product.fDividerHeight"
                @keyup.enter="confirm"
              ></v-text-field>
              <v-text-field
                label="ტიხარის სიგანე"
                type="number"
                v-model="product.fDividerWidth"
                @keyup.enter="confirm"
              ></v-text-field>
              <v-text-field
                label="ტიხარი თითო ყუთში"
                type="number"
                v-model="product.dividersPerBox"
                @keyup.enter="confirm"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-spacer></v-spacer>
          <v-btn class="primary" dark @click="confirm">დამატება</v-btn>
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
           "3", "5"
            ],
          materials: [
            'Tesline', 'Fluting', 'White-tesline'
          ],
          profileCat: [
            'B', 'E', 'C'
          ],
          company: '',
          layer1: '',
          layer2: '',
          layer3: '',
          layer4: '',
          layer5: '',
          product:{
            productName: '',
            layerQuantity: '',
            layers: [],
            profile: '',
            boxHeight: '',
            boxWidth: '',
            boxThickness: '',
            mDividerHeight: '',
            mDividerWidth: '',
            mDividerThickness: '',
            fDividerHeight: '',
            fDividerWidth: '',
            fDividerThickness: '',
            dividersPerBox: ''
          }
        }
      },
    methods: {
      confirm (e) {
        e.preventDefault()
        const newProduct = this.product
        newProduct.id = this.$route.params.id

        if(this.product.layerQuantity === '3'){
          this.product.layers = []
          this.product.layers.push(this.layer1)
          this.product.layers.push(this.layer2)
          this.product.layers.push(this.layer3)
        }else {
          this.product.layers = []
          this.product.layers.push(this.layer1)
          this.product.layers.push(this.layer2)
          this.product.layers.push(this.layer3)
          this.product.layers.push(this.layer4)
          this.product.layers.push(this.layer5)
        }

        console.log(newProduct)
        CompanyServices.newProduct(newProduct)
          .then((response) => {
            this.$router.push({name: 'clients'})
          })
          .catch((err)=> {
            console.log(err.data)
          })
      }
    },
    mounted () {
      CompanyServices.getCompany(this.$route.params.id)
        .then((res) => {
          this.company = res.data.company
          console.log(this.company)
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
