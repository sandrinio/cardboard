<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md10>
      <v-progress-linear xs12 v-if="loading" :indeterminate="true"></v-progress-linear>
      <v-card class="white elevation-2">
        <v-toolbar flat dense class="blue darken-3" dark>
          <v-toolbar-title>მარაგის შევსება</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="navigateTo('/supplies')">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-tabs fixed-tabs>
            <v-tab v-for="tab in tabs" :key="tab" @click="funcTest(tab)">
              <strong>{{ tab }}</strong>
            </v-tab>
          </v-tabs>
          <v-card v-if="paperTab">
            <v-card-text>
              <v-container grid-list-lg>
                <v-layout row wrap >
                  <v-flex sm3 xs12>
                    <v-text-field label="ფასი" type="number" v-model="paperPrice"></v-text-field>
                    <v-text-field label="წონა" type="number" v-model="paperWeight"></v-text-field>
                    <v-select label="მატერია" :items="materials" v-model="paperMaterial"></v-select>
                  </v-flex>
                  <v-flex sm3 xs12>
                    <v-text-field label="სიგანე" type="number" v-model="paperWidth"></v-text-field>
                    <v-text-field label="გრამაჟი" type="number" v-model="paperGrm"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="success"
                :loading = loading
                @click="paperSubmit"
              ><strong>დამახსოვრება</strong></v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-if="glueTab">
            <v-card-text>
              <v-container grid-list-lg>
                <v-layout row wrap >
                  <v-flex sm3 xs12>
                    <v-text-field label="1kg ფასი" type="number" v-model="gluePrice"></v-text-field>
                    <v-text-field label="მთლიანი წონა" type="number" v-model="glueWeight"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="success"
                @click="glueSubmit"
                :loading="loading"
              ><strong><strong>დამახსოვრება</strong></strong></v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-if="dyeTab">
            <v-card-text>
              <v-container grid-list-lg>
                <v-layout row wrap >
                  <v-flex sm3 xs12>
                    <v-text-field label="ფასი" type="number" v-model="dyePrice"></v-text-field>
                    <v-text-field label="ფერი" type="text" v-model="dyeColor"></v-text-field>
                    <v-text-field label="რაოდენობა" type="number" v-model="dyeQuantity"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="success"
                :loading="loading"
                @click="dyeSubmit"
              ><strong>დამახსოვრება</strong></v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-if="starchTab">
            <v-card-text>
              <v-container grid-list-lg>
                <v-layout row wrap >
                  <v-flex sm3 xs12>
                    <v-text-field label="თითოს ფასი" type="number" v-model="starchPrice"></v-text-field>
                    <v-text-field label="შეფუთვების რაოდენობა" type="number" v-model="starchPack"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="success"
                @click="starchSubmit"
              ><strong>დამახსოვრება</strong></v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-if="wrapperTab">
            <v-card-text>
              <v-container grid-list-lg>
                <v-layout row wrap >
                  <v-flex sm3 xs12>
                    <v-text-field label="თითოს ფასი" type="number" v-model="wrapperPrice"></v-text-field>
                    <v-text-field label="რაოდენობა" type="number" v-model="wrapperQuantity"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                @click="wrapSubmit"
                color="success"
              ><strong>დამახსოვრება</strong></v-btn>
            </v-card-actions>
          </v-card>

        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import SupplyServices from '@/services/SupplyServices'
		export default {
				name: "New",
      data (){
				  return {
				    loading: false,
				    paperTab: true,
            glueTab: false,
            dyeTab: false,
            starchTab: false,
            wrapperTab: false,
				    tabs: ['ქაღალდი', 'წებო', 'საღებავი', 'კრახმალი', 'შესაფუთი რულონი'],
				    materials: ['Tesline', 'Fluting', 'White-Tesline'],
            paperPrice: '',
            gluePrice: '',
            dyeQuantity: '',
            dyePrice: '',
            dyeColor: '',
            paperMaterial: '',
            starchPrice: '',
            paperWeight: '',
            paperWidth: '',
            starchPack: '',
            glueWeight: '',
            paperGrm: ''
          }
      },
      methods: {
        navigateTo(route) {
          this.$router.push(route)
        },
        funcTest (e){
          if(e === 'ქაღალდი'){
            this.paperTab = true
            this.glueTab = false
            this.dyeTab = false
            this.starchTab = false
            this.wrapperTab = false
          }else if(e === 'წებო'){
            this.paperTab = false
            this.glueTab = true
            this.dyeTab = false
            this.starchTab = false
            this.wrapperTab = false
          }else if(e === 'საღებავი'){
            this.paperTab = false
            this.glueTab = false
            this.dyeTab = true
            this.starchTab = false
            this.wrapperTab = false
          }else if(e === 'კრახმალი'){
            this.paperTab = false
            this.glueTab = false
            this.dyeTab = false
            this.starchTab = true
            this.wrapperTab = false
          }else if(e === 'შესაფუთი რულონი'){
            this.paperTab = false
            this.glueTab = false
            this.dyeTab = false
            this.starchTab = false
            this.wrapperTab = true
          }
        },
        paperSubmit () {
          this.loading = true
          const newPaper = {
            price: this.paperPrice,
            width: this.paperWidth,
            weight: this.paperWeight,
            grm: this.paperGrm,
            material: this.paperMaterial
          }
          SupplyServices.addPaper(newPaper)
            .then((res) => {
              this.loading = false
              this.$router.push({name: 'supplies'})
            })
            .catch((err) => {
              console.log(err.data)
            })
        },
        glueSubmit () {
          this.loading = true
          const newGlue = {
            price: this.gluePrice,
            weight: this.glueWeight
          }
          SupplyServices.addGlue(newGlue)
            .then((res) => {
              this.loading = false
              this.$router.push({name: 'supplies'})
            })
            .catch((err) => {
              console.log(err.data)
            })
        },
        dyeSubmit () {
          this.loading = true
          const newDye = {
            price: this.dyePrice,
            color: this.dyeColor,
            qty: this.dyeQuantity
          }
          SupplyServices.addDye(newDye)
            .then((res) => {
              this.loading = false
              this.$router.push({name: 'supplies'})
            })
            .catch((err) => {
              console.log(err.data)
            })
        },
        starchSubmit () {
          this.loading = true
          const newStarch = {
            price: this.starchPrice,
            pack: this.starchPack
          }
          SupplyServices.addStarch(newStarch)
            .then((res) => {
              this.loading = false
              this.$router.push({name: 'supplies'})
            })
            .catch((err) => {
              console.log(err.data)
            })
        },
        wrapSubmit () {
          this.loading = true
          const newWrap = {
            price: this.wrapperPrice,
            qty: this.wrapperQuantity
          }
          SupplyServices.addWrapper(newWrap)
            .then((res) => {
              this.loading = false
              this.$router.push({name: 'supplies'})
            })
            .catch((err) => {
              console.log(err.data)
            })
        }
      }
		}
</script>

<style scoped>
</style>
