<template>
  <div>
    <h2 class="mb-2 mt-3">შესაფუთი რულონი</h2>
    <v-data-table
      :headers="headers"
      :loading="loading"
      :items="wrapList"
      class="elevation-1"
    >
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.price }}</td>
        <td class="text-xs-left">{{ props.item.qty }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="deletePaper(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import SupplyServices from "../../services/SupplyServices";

  export default {
    name: "PaperPart",
    data () {
      return {
        headers: [
          {
            text: 'თითოს ფასი',
            align: 'left',
            value: 'name'
          },
          { text: 'რაოდენობა', value: 'რაოდენობა', align: 'left'},
          { text: 'მოქმედება', value: 'მოქმედება', sortable: false, align: 'center'}
        ],
        wrapList: [],
        loading: true
      }
    },
    mounted () {
      SupplyServices.wrapGetter()
        .then((res) => {
          this.wrapList = res.data.wrapList
          this.loading = false
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }
</script>

<style scoped>

</style>
