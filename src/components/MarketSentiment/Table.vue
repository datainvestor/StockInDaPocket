<template>
  <v-simple-table dense class="test" style="max-width: 840px;">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left"></th>
          <th class="text-left subtitle-2">General Consensus</th>
          <th class="text-left subtitle-2">Price Target</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="CELL9">Now</td>
          <td><b>{{ marketbeat.TodayConsRating }}</b><PopoverData></PopoverData></td>
          <td><b>{{ marketbeat.TodayPriceTarget }}</b></td>
        </tr>
        <tr>
          <td>180 days ago</td>
          <td><b>{{ marketbeat.HalfYrAgoConsRating }}</b></td>
          <td><b>{{ marketbeat.HalfYrPriceTarget }}</b></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters } from "vuex";
import PopoverData from "./PopoverData"

export default {
  computed: {
    ...mapGetters(["marketbeat"])
  },
  components: {
   PopoverData
  }
};
</script>

<style>
/* table td#CELL9 {
    border:inset 4px red; background-color:navy;
    } */
.test {
  background-color: rgb(255, 255, 255, 0.3) !important;
}
tbody tr:hover {
  background-color: rgb(255, 255, 255, 0.2) !important;
}
</style>
