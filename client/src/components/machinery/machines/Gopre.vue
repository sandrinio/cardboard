<template>
  <v-expansion-panel popout>
    <v-expansion-panel-content class="tab-header-color white--text">
      <div slot="header"><strong>გოფრე</strong></div>
      <v-card class="tab-text-color">
        <v-card-text>
          <v-select
            :items="products"
            item-text="productName"
            multiple
            chips
            persistent-hint
            label="პროდუქტის სახელი"
            v-model="pickedProduct"
            :loading="loading"
          ></v-select>
          <v-layout>
              <v-flex xs4 v-if="productPreview.length > 0" v-for="prod in productPreview" :key='productPreview._id'>
                <table>
                  <tr>
                    <th>ყუთის ზომა:</th>

                    <td>{{prod.boxHeight}}x{{prod.boxWidth}}x{{prod.boxThickness}}</td>
                  </tr>
                  <tr>
                    <th>{{prod.layerQuantity}} შრე:</th>
                    <td><span v-for="layer in prod.layers" :key="layer">-{{layer}}   -</span></td>
                  </tr>
                  <tr>
                    <th>პროფილი:</th>
                    <td>{{prod.profile}}</td>
                  </tr>
                </table>
              </v-flex>
          </v-layout>
          <v-text-field
            label="გამოშვებული ქაღალდის რაოდენობა"
          ></v-text-field>
          <v-text-field
            v-model="waste"
            label="მაკულატურა"
          ></v-text-field>
          <v-menu
            ref="processDate"
            lazy
            :close-on-content-click="false"
            v-model="processDate"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            min-width="290px"
            :return-value.sync="date"
          >
            <v-text-field
              slot="activator"
              label="შესრულების დღე"
              v-model="date"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date" @input="$refs.processDate.save(date)"></v-date-picker>

          </v-menu>
          <v-card-actions class="tab-text-color">
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              dense
            >შენახვა</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import OrderServices from '@/services/OrderServices'
import CompanyServices from '@/services/CompanyServices'

		export default {
				name: "Gopre",
      data () {
        return {
          products: [],
          loading: true,
          pickedProduct: '',
          productPreview: [],
          date: '',
          processDate: '',
          waste: ''
        }
      },
      watch: {
        pickedProduct: function (e) {
          this.productPreview.push(e[0])
          console.log(this.productPreview)
        }
      },
      mounted () {
        CompanyServices.productsGetter()
          .then((res) => {
            this.products = res.data.products
            this.loading = false
          })
          .catch((err)=> {
            console.log(err.data.error)
          })
      }
		}
</script>

<style scoped>
.tab-header-color {
  background-color: #795548 !important;
  border-color: #795548 !important;
  border-radius: 7px 7px 0 0
}
.tab-text-color {
  background-color: #f2eee0 !important;
  border-color: #f2eee0 !important;
}
</style>
