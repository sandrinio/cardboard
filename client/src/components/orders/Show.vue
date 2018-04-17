<template>
<v-layout align-center justify-center>
  <v-flex xs12 sm12 md10>
    <v-progress-linear xs12 v-if="loading" :indeterminate="true"></v-progress-linear>
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
            <td>{{order.company}}</td>
          </tr>
          <tr>
            <td><strong>პროდუქტი</strong></td>
            <td>{{order.product}}</td>
          </tr>
          <tr>
            <td><strong>შესრულების ვადა</strong></td>
            <td v-if="!editMode">{{order.deadline}}</td>
            <td v-if="editMode">
              <v-flex>
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
                    label="ვადა"
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
            <td>{{order.boxHeight}}x{{order.boxWidth}}x{{order.boxThickness}}</td>
          </tr>
          <tr>
            <td><strong>ყუთის შეკვეთა</strong></td>
            <td v-if="!editMode">{{order.boxQuantity}}</td>
            <td v-if="editMode"><input type="text" v-model="order.boxQuantity"></td>
          </tr>
          <tr>
            <td><strong>ტიხარის ზომა</strong></td>
            <td>
              მამალი: {{order.mDividerHeight}}x{{order.mDividerWidth}} <br>
              დედალი: {{order.fDividerHeight}}x{{order.fDividerWidth}}
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
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            dark
            @click="del"
            :loading="loading"
          >გაუქმება</v-btn>
          <v-btn
            :loading="loading"
            color="success"
            @click="confirm"
          >დამახსოვრება</v-btn>
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
    },
    confirm () {
	    this.loading = true
	    delete this.order.regDate

      if(this.editedDeadline !== ""){
	      this.order.deadline = this.editedDeadline
      }
	    OrderServices.editOrder(this.order)
        .then((res)=>{
          this.loading = false
          this.$router.push({name: 'orders'})
        })
        .catch((err)=> {
          this.loading = false
          console.log(err)
        })
    },
    del (){
      this.loading = true
      OrderServices.deleteOrder(this.order)
        .then((res) => {
          this.loading = false
          this.$router.push({name: 'orders'})
        })
        .catch((err) => {
          this.loading = false
          console.log(err)
        })
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
  input[type=text] {
    outline: none;
    font-weight: bolder;
    color: darkblue;
    border-bottom: 1px darkblue solid;
    width: 80%;
  }
</style>
