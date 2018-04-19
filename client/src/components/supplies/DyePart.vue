<template>
  <div>
    <h2 class="mb-2 mt-3">საღებავი</h2>
    <v-data-table
      :headers="headers"
      :loading="loading"
      :items="dyeList"
      class="elevation-1"
    >
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.price }}</td>
        <td class="text-xs-left">{{ props.item.color }}</td>
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
            text: 'ფასი',
            align: 'left',
            value: 'name'
          },
          { text: 'ფერი', value: 'ფერი', align: 'left'},
          { text: 'რაოდენობა', value: 'რაოდენობა', align: 'left'},
          { text: 'მოქმედება', value: 'მოქმედება', sortable: false, align: 'center'}
        ],
        dyeList: [],
        loading: true
      }
    },
    mounted () {
      SupplyServices.dyeGetter()
        .then((res) => {
          this.dyeList = res.data.dyeList
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
