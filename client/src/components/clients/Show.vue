 <template>
    <v-layout>
      <v-flex xs8 offset-xs2>
        <v-progress-linear v-if="indeterminate" :indeterminate="indeterminate"></v-progress-linear>
        <div class="white elevation-2">
          <v-toolbar flat dense class="blue darken-3" dark>
            <v-toolbar-title></v-toolbar-title>
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
                  v-model="product.layers[0]"
                  label="Select"
                  single-line
                ></v-select>
              </v-flex>
              <v-flex sm4>
                <v-select
                  class="ml-2"
                  :items="materials"
                  v-model="product.layers[1]"
                  label="Select"
                  single-line
                ></v-select>
              </v-flex>
              <v-flex sm4>
                <v-select
                  class="ml-2"
                  :items="materials"
                  v-model="product.layers[2]"
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
                  v-model="product.layers[3]"
                  label="Select"
                  single-line
                ></v-select>
              </v-flex>
              <v-flex sm3>
                <v-select
                  class="ml-2"
                  :items="materials"
                  v-model="product.layers[4]"
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

            <v-btn class="primary" dark @click="confirm">change</v-btn>
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
        mDividerThickness: '',
        fDividerHeight: '',
        fDividerWidth: '',
        fDividerThickness: ''
      },
      indeterminate: true
    }
  },
  methods: {
    confirm (e) {
      e.preventDefault()
      const modifiedProduct = this.product
      modifiedProduct.id = this.$route.params.id
      // if(this.product.layerQuantity === '3'){
      //   console.log('3')
      // }else{
      //   console.log('5')
      // }
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
