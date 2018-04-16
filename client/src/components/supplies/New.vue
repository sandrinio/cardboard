<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md10>
      <v-card class="white elevation-2">
        <v-toolbar flat dense class="blue darken-3" dark>
          <v-toolbar-title>მარაგის შევსება</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="navigateTo('/supplies')">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <!--<table>-->
            <!--<tr>-->
              <!--<th>ქაღალდი</th>-->
              <!--<th>წებო</th>-->
              <!--<th>საღებავი</th>-->
              <!--<th>შესაფუთი რულონი</th>-->
              <!--<th>კრახმალი</th>-->
            <!--</tr>-->
            <!--<tr>-->
              <!--<td><v-text-field label="ფასი" v-model="paperPrice"></v-text-field></td>-->
              <!--<td><v-text-field label="ფასი" v-model="gluePrice"></v-text-field></td>-->
              <!--<td><v-text-field label="ფასი" v-model="dyePrice"></v-text-field></td>-->
            <!--</tr>-->
            <!--<tr>-->
              <!--<td><v-select label="მატერია" :items="materials" v-model="paperMaterial"></v-select></td>-->
              <!--<td><v-text-field label='წონა' v-model="glueWeight"></v-text-field></td>-->
              <!--<td><v-text-field label='ფერი' v-model="dyeColor"></v-text-field></td>-->
            <!--</tr>-->
            <!--<tr>-->
              <!--<td><v-text-field label="წონა" v-model="paperWeight"></v-text-field></td>-->
              <!--<td><v-text-field label="ვედრო" v-model="dyeWeight"></v-text-field></td>-->
            <!--</tr>-->
            <!--<tr>-->
              <!--<td><v-text-field label="სიგანე" v-model="paperWidth"></v-text-field></td>-->
            <!--</tr>-->
            <!--<tr>-->
              <!--<td><v-text-field label="გრამაჟი" v-model="paperGrm"></v-text-field></td>-->
            <!--</tr>-->
          <!--</table>-->
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
                color="red"
                dark
              >გაუქმება</v-btn>
              <v-btn
                color="success"
              >დამახსოვრება</v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-if="glueTab">
            <v-card-text>
              <v-container grid-list-lg>
                <v-layout row wrap >
                  <v-flex sm3 xs12>
                    <v-text-field label="ფასი" type="number" v-model="gluePrice"></v-text-field>
                    <v-text-field label="წონა" type="number" v-model="glueWeight"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red"
                dark
              >გაუქმება</v-btn>
              <v-btn
                color="success"
              >დამახსოვრება</v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-if="dyeTab">
            <v-card-text>
              <v-container grid-list-lg>
                <v-layout row wrap >
                  <v-flex sm3 xs12>
                    <v-text-field label="ფასი" type="number" v-model="dyePrice"></v-text-field>
                    <v-text-field label="ფერი" type="number" v-model="dyeColor"></v-text-field>
                    <v-text-field label="რაოდენობა" type="number" v-model="dyeQuantity"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red"
                dark
              >გაუქმება</v-btn>
              <v-btn
                color="success"
              >დამახსოვრება</v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-if="starchTab">
            <v-card-text>
              <v-container grid-list-lg>
                <v-layout row wrap >
                  <v-flex sm3 xs12>
                    <v-text-field label="ფასი" type="number" v-model="starchPrice"></v-text-field>
                    <v-text-field label="ფუთი" type="number" v-model="starchPack"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red"
                dark
              >გაუქმება</v-btn>
              <v-btn
                color="success"
              >დამახსოვრება</v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-if="wrapperTab">
            <v-card-text>
              <v-container grid-list-lg>
                <v-layout row wrap >
                  <v-flex sm3 xs12>
                    <v-text-field label="ფასი" type="number" v-model="wrapperPrice"></v-text-field>
                    <v-text-field label="ფასი" type="number" v-model="wrapperPrice"></v-text-field>
                    <v-text-field label="რაოდენობა" type="number" v-model="wrapperQuantity"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red"
                dark
              >გაუქმება</v-btn>
              <v-btn
                color="success"
              >დამახსოვრება</v-btn>
            </v-card-actions>
          </v-card>

        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
		export default {
				name: "New",
      data (){
				  return {
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

        }
      }
		}
</script>

<style scoped>
  /*td, th {*/
    /*border: 1px solid #dddddd;*/
    /*text-align: left;*/
    /*padding: 14px;*/
  /*}*/
  /*.fabBtn {*/
    /*float: right;*/
  /*}*/
  /*label {*/
    /*display: block;*/
    /*font-weight: bold;*/
  /*}*/
</style>
