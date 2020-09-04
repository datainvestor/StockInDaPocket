<template>
  <v-card class="mx-auto pb-4" max-width="500">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">{{currentStock}}</v-list-item-title>
        <v-list-item-subtitle>As of: {{todayDate}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="12">{{finviz.Price}} USD</v-col>
      </v-row>
    </v-card-text>

    <v-row>
      <v-col cols="6">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-title>P/E: {{finviz["P_E"]}}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Upcoming ER:
            <p>{{finviz.Earnings_Date}}</p>
          </v-list-item-title>
        </v-list-item>
      </v-col>

      <v-col cols="6">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Short Ratio: {{finviz.Short_Ratio}}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item>Year Price RG: {{finviz.Year_Price_Rg}}</v-list-item>
        </v-list-item>
      </v-col>
    </v-row>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item>Yearly performance: {{finviz.Perfomance_Year}}</v-list-item>
    </v-list-item>

    <v-divider></v-divider>
    <v-card-subtitle class="ttt">Data by TRS®</v-card-subtitle>
    <v-card-actions>
      <v-row>
        <v-col>
          <v-btn text>Average: {{tipranks.Average}}</v-btn>
        </v-col>
        <v-col>
          <v-btn text>Low: {{tipranks.Low}}</v-btn>
        </v-col>
        <v-col>
          <v-btn text>High: {{tipranks.High}}</v-btn>
        </v-col>
        <v-col>
          <v-btn text>TIP: {{tipranks.Recomendation}}</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["finviz", "tipranks", "currentStock"]),
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
.ttt {
  text-align: start !important;
  padding: 10px 10px 1px 2px !important;
}
</style>
