<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md10>
      <v-card class="elevation-2">
        <v-toolbar flat dense class="brown" dark>
          <v-toolbar-title>კომპანია: {{company}} - ახალი პროდუქტი</v-toolbar-title>
        </v-toolbar>
        <v-spacer></v-spacer>
        <v-card-text class="secondary">
          <v-form>
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
              <v-flex xs4>
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
              <v-flex xs4 class="ml-5">
                <h3>მამალი ტიხარი</h3>
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
                <v-text-field
                  label="რაოდენობა"
                  type="number"
                  @keyup.enter="confirm"
                  v-model="product.mDividerQuantity"
                ></v-text-field>
              </v-flex>
              <v-flex xs4 class="ml-5">
                <h3>დედალი ტიხარი</h3>
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
                  label="რაოდენობა"
                  type="number"
                  v-model="product.fDividerQuantity"
                  @keyup.enter="confirm"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-spacer></v-spacer>
            <v-card-actions>
            <v-btn class="primary" dark @click="confirm">დამატება</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
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
            'Tesline', 'Fluting', 'White-Tesline'
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
            mDividerQuantity: '',
            fDividerHeight: '',
            fDividerWidth: '',
            fDividerQuantity: ''
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
