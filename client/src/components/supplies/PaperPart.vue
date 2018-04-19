<template>
  <div>
    <h2 class="mb-2">ქაღალდი</h2>
    <v-data-table
      :headers="headers"
      :loading="paperLoading"
      :items="paperList"
      class="elevation-1"
    >
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.price }}</td>
        <td class="text-xs-left">{{ props.item.material }}</td>
        <td class="text-xs-left">{{ props.item.weight }}</td>
        <td class="text-xs-left">{{ props.item.width }}</td>
        <td class="text-xs-left">{{ props.item.grm }}</td>
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
          text: 'შესყიდვის ფასი',
          align: 'left',
          value: 'name'
        },
        { text: 'მატერია', value: 'მატერია', align: 'left'},
        { text: 'წონა', value: 'წონა', align: 'left'},
        { text: 'სიგანე', value: 'სიგანე', align: 'left'},
        { text: 'გრამაჟი', value: 'გრამაჟი', align: 'left'},
        { text: 'მოქმედება', value: 'მოქმედება', sortable: false, align: 'center'}
      ],
      paperList: [],
      paperLoading: true
    }
  },
  mounted () {
    SupplyServices.paperGetter()
      .then((res) => {
        this.paperList = res.data.paperList
        this.paperLoading = false
      })
      .catch((err)=>{
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
