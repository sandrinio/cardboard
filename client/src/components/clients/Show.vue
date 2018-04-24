 <template>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md10>
        <v-progress-linear v-if="indeterminate" :indeterminate="indeterminate"></v-progress-linear>
        <v-card class="elevation-2">
          <v-toolbar flat dense class="brown" dark>
            <v-toolbar-title>{{product.productName}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="navigateTo('/clients')">
              <v-icon>arrow_back</v-icon>
            </v-btn>
          </v-toolbar>
          <v-spacer></v-spacer>
          <v-card-text class="secondary">
            <v-form>
              <v-flex xs4>
                <v-text-field
                  label="პროდუქტის სახელი"
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
                <v-flex sm3>
                  <v-select
                    :items="materials"
                    v-model="product.layers[0]"
                    label="შრე #1"
                    single-line
                  ></v-select>
                  <v-select
                    class="ml-2"
                    :items="materials"
                    v-model="product.layers[1]"
                    label="შრე #2"
                    single-line
                  ></v-select>
                  <v-select
                    class="ml-2"
                    :items="materials"
                    v-model="product.layers[2]"
                    label="შრე #3"
                    single-line
                  ></v-select>
                </v-flex>
              </v-layout>
              <v-layout row v-if="this.product.layerQuantity === '5'">
                <v-flex sm3>
                  <v-select
                    class="ml-2"
                    :items="materials"
                    v-model="product.layers[3]"
                    label="შრე #4"
                    single-line
                  ></v-select>
                  <v-select
                    class="ml-2"
                    :items="materials"
                    v-model="product.layers[4]"
                    label="შრე #5"
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
                  ></v-text-field>
                  <v-text-field
                    label="რაოდენობა"
                    type="number"
                    v-model="product.mDividerQuantity"
                  ></v-text-field>
                </v-flex>
                <v-flex sm4 class="ml-5">
                  <h3>დედალი ტიხარი</h3>
                  <v-text-field
                    label="ტიხარის სიმაღლე"
                    type="number"
                    v-model="product.fDividerHeight"
                  ></v-text-field>
                  <v-text-field
                    label="ტიხარის სიგანე"
                    type="number"
                    v-model="product.fDividerWidth"
                  ></v-text-field>
                  <v-text-field
                    label="რაოდენობა"
                    type="number"
                    v-model="product.fDividerQuantity"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-spacer></v-spacer>
              <v-card-actions class="secondary">
              <v-btn class="success" dark @click="confirm">შეცვლა</v-btn>
                <v-spacer></v-spacer>
                <v-btn class="error" dark @click="del">წაშლა</v-btn>
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
        '3', '5'
      ],
      materials: [
        'Tesline', 'Fluting', 'White-tesline'
      ],
      profileCat: [
        'B', 'E', 'C'
      ],
      company: '',
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
      },
      indeterminate: true
    }
  },
  methods: {
    confirm (e) {
      e.preventDefault()
      const modifiedProduct = this.product
      modifiedProduct.id = this.$route.params.id
      let layersBucket = []
      for(let i = 0; i < this.product.layerQuantity; ++i){
        layersBucket.push(this.product.layers[i])
      }
      this.product.layers = []
      this.product.layers = layersBucket

      CompanyServices.changeProduct(this.product, this.$route.params.id)
        .then((response) => {
          this.$router.push({name: 'clients'})
        })
        .catch((err)=> {
          console.log(err.data)
        })
    },
    del (){
      CompanyServices.delProduct(this.product._id)
        .then((res) => {
          this.$router.push({name: 'clients'})
        })
        .catch((err) => {
          console.log(err)
        })
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  mounted () {
    CompanyServices.getProduct(this.$route.params.id)
      .then((res) => {
        this.indeterminate = false
        this.product = res.data
      })
      .catch((error)=> {
        this.indeterminate = false
        console.log(error)
      })
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
