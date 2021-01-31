<template>
  <v-row justify='end'>
    <v-col md="3" sm="6">
      <v-card flat max-width="250"  class="mx-auto" color="rgb(255, 255, 255, 0.5)" min-height="110">
        <v-img src="../assets/graph.svg">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline">
                <span class="font-weight-bold">{{currentStock}}</span>
                <span class="font-weight-light"> price</span>
              </div>
              <v-list-item-title class="headline">{{finviz.Price}} $</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div class="float-right font-weight-thin subtitle-2">As of: 2021/01/31</div>
        </v-img>
      </v-card>
    </v-col>

    <v-col md="3" sm="6">
      <v-card flat max-width="250"  class="mx-auto" color="rgb(255, 255, 255, 0)" min-height="110">
            <v-img gradient="to bottom, rgba(255, 255, 255, 0.3), rgb(255, 255, 255, 0.9)">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline">
                <span class="font-weight-light">Market Cap</span>
              </div>
              <v-list-item-title class="headline">257$</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div class="float-right font-weight-thin subtitle-2">As of: 2021/01/31</div>
            </v-img>
      </v-card>
    </v-col>

    <v-col md="3" sm="6">
      <v-card flat max-width="250"  class="mx-auto" color="rgb(255, 255, 255, 0)"  min-height="110" >
          <v-img gradient="to bottom, rgba(255, 255, 255, 0.3), rgb(255, 255, 255, 0.9)">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline">
                <span class="font-weight-bold">P/E</span>
              </div>
              <v-list-item-title class="headline">{{finviz["P_E"]}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div class="float-right font-weight-thin subtitle-2">As of: 2021/01/31</div>
          </v-img>
      </v-card>
    </v-col>

    <v-col md="3" xs="6">
      <v-card flat max-width="250"  class="mx-auto" color="rgb(255, 255, 255, 0)" min-height="110" >
           <v-img gradient="to  right, rgba(255, 255, 255, 0.3), rgb(255, 255, 255, 0.9)">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline">
                <span class="font-weight-light">Upcoming Earnings Report</span>
              </div>
              <v-list-item-title class="headline">{{finviz.Earnings_Date}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div class="float-right font-weight-thin subtitle-2">As of: 2021/01/31</div>
           </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["finviz", "currentStock"]),
    todayDate() {
      return new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
    }
  }
};
</script>

<style scoped>

</style>
