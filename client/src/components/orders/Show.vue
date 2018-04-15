<template>
<v-layout align-center justify-center>
  <v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
  <v-flex xs12 sm12 md10>
    <v-card>
      <v-toolbar flat dense class="blue darken-3" dark>
        <v-toolbar-title>შეკვეთა - </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="navigateTo('/orders')">
          <v-icon>arrow_back</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-btn
          class="fabBtn"
          color="warning"
          fab
          dark
          @click="editModeBtn"
          v-if="editBtn"
          right
          small
        >
          <v-icon dark>edit</v-icon>
        </v-btn>
        <table>
          <tr>
            <td><strong>სტატუსი</strong></td>
            <td v-if="!editMode" :class="order.status">{{order.status}}</td>
            <td v-if="editMode">
              <v-select :items='selectStatus' v-model="order.status"></v-select>
            </td>
          </tr>
          <tr>
            <td><strong>კომპანია</strong></td>
            <td v-if="!editMode">{{order.company}}</td>
            <td v-if="editMode"><input type="text" v-model="order.company"></td>
          </tr>
          <tr>
            <td><strong>პროდუქტი</strong></td>
            <td v-if="!editMode">{{order.product}}</td>
            <td v-if="editMode"><input type="text" v-model="order.product"></td>
          </tr>
          <tr>
            <td><strong>შესრულების ვადა</strong></td>
            <td v-if="!editMode">{{order.deadline}}</td>
            <td v-if="editMode">
              <v-flex xs11 sm5>
                <v-menu
                  ref="menu"
                  lazy
                  :close-on-content-click="false"
                  v-model="menu"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  min-width="290px"
                  :return-value.sync="editedDeadline"
                >
                  <v-text-field
                    slot="activator"
                    label="Picker in menu"
                    v-model="editedDeadline"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="editedDeadline" no-title scrollable locale='en' first-day-of-week="1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(editedDeadline)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
            </td>
          </tr>
          <tr>
            <td><strong>ყუთის ზომა</strong></td>
            <td v-if="!editMode">{{order.boxHeight}}x{{order.boxWidth}}x{{order.boxThickness}}</td>
            <td v-if="editMode">
              <v-layout>
                <v-flex xs3>
                  <label for="height">სიმაღლე: </label>
                  <input type="text" id="height" v-model="order.boxHeight">
                </v-flex>
                <v-flex xs3>
                  <label for="width">სიგანე: </label>
                  <input type="text" id="width" v-model="order.boxWidth">
                </v-flex>
                <v-flex xs3>
                  <label for="thickness">სიგრძე: </label>
                  <input type="text" id="thickness" v-model="order.boxThickness">
                </v-flex>
              </v-layout>
            </td>
          </tr>
          <tr>
            <td><strong>ყუთის შეკვეთა</strong></td>
            <td v-if="!editMode">{{order.boxQuantity}}</td>
            <td v-if="editMode"><input type="text" v-model="order.boxQuantity"></td>
          </tr>
          <tr>
            <td><strong>ტიხარის ზომა</strong></td>
            <td v-if="!editMode">
              მამალი: {{order.mDividerHeight}}x{{order.mDividerWidth}} <br>
              დედალი: {{order.fDividerHeight}}x{{order.fDividerWidth}}
            </td>
            <td v-if="editMode">
              <v-layout>
                <v-flex xs4>
                  მამალი: <label for="mHeight">სიმაღლე</label>
                  <input type="text" id="mHeight" v-model="order.mDividerHeight">
                  <label for="mWidth">სიგრძე</label>
                  <input type="text" id="mWidth" v-model="order.mDividerWidth"> <br>
                </v-flex>
                <v-flex xs4>
                  დედალი: <label for="fHeight">სიმაღლე</label>
                  <input type="text" id="fHeight" v-model="order.fDividerHeight">
                  <label for="fWidth">სიგრძე</label>
                  <input type="text" id="fWidth" v-model="order.fDividerWidth">
                </v-flex>
              </v-layout>
            </td>
          </tr>
          <tr>
            <td><strong>ტიხარის შეკვეთის რაოდენობა</strong></td>
            <td v-if="!editMode">{{order.dividerQuantity}}</td>
            <td v-if="editMode"><input type="text" v-model="order.dividerQuantity"></td>
          </tr>
          <tr>
            <td><strong>კომენტარი</strong></td>
          <td v-if="!editMode">{{order.comment}}</td>
          <td v-if="editMode"><input type="text" v-model="order.comment"></td>
          </tr>
        </table>
        <v-card-actions v-if="editMode">
          <v-btn
            color="success"
          >დამახსოვრება</v-btn>

          <v-spacer></v-spacer>

          <v-btn
            color="red"
            dark
          >გაუქმება</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
  import OrderServices from '@/services/OrderServices'
export default {
	name: "Show",
  data () {
	  return {
      selectStatus: ['In-Progress', 'Complete', 'On-Hold', 'Canceled'],
	    editBtn: true,
      menu: false,
      editMode: false,
	    loading: true,
      order: {},
      editedDeadline: ''
    }
  },
  methods: {
	  navigateTo(route){
	    this.$router.push(route)
    },
    editModeBtn (){
	    this.editMode = !this.editMode
    }
  },
  mounted () {
    OrderServices.orderGetter(this.$route.params.id)
      .then((res) => {
        this.order = res.data.order
        this.loading = false
      })
      .catch((err) => {
        this.loading = false
      })
  }
}
</script>

<style scoped>
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  .fabBtn {
    float: right;
  }
  label {
    display: block;
    font-weight: bold;
  }
  input[type=text]:focus {
    outline: none;
    font-weight: bolder;
    color: darkblue;
  }
</style>
