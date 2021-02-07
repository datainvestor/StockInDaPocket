<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto pt-4 transition-swing"
        :class="`elevation-${hover ? 4 : 0}`"
        color="rgb(255, 255, 255, 0.3)"
        flat
        max-width="500"
      >
        <v-card-text>
          <v-row justify="center">
            <v-img
              src="https://financialmodelingprep.com/image-stock/AMZN.png"
              lazy-src="https://financialmodelingprep.com/image-stock/AMZN.png"
              contain
              max-height="100"
              max-width="100"
            ></v-img>
            <v-col class="display-3" cols="12" align="center">Apple Inc.</v-col>
          </v-row>
        </v-card-text>
       
        <v-row>
          <v-col cols="12">
             <v-list-item-title class="font-weight-thin pl-1">Overview</v-list-item-title>
            <v-list-item>
              <v-list-item-content class="pb-0">
                <v-list-item-title class="font-weight-bold">Upcoming earnings report</v-list-item-title>
                <v-list-item-subtitle class="font-weight-light pl-3">Last: Dec 12 BMO</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title>Feb 02 AMC</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">P/E</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title>80.28</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content class="pb-0">
                <v-list-item-title class="font-weight-bold">Short float</v-list-item-title>
                <v-list-item-subtitle class="text--disabled pl-3">Short Ratio: 0.8</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title>121.98%</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content class="pb-0">
                <v-list-item-title class="font-weight-bold">Yearly price range</v-list-item-title>
                <v-list-item-subtitle class="font-weight-light pl-3">Performance: 63.50%</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title>{{finviz.Year_Price_Rg}}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card-subtitle class="ttt">Data by TRS®</v-card-subtitle>
        <v-card-actions>
                <v-progress-linear
            color="blue accent-4"
            indeterminate
            rounded
            height="6"
            class="mx-2"
            v-if="!tipranks"
          ></v-progress-linear>
          <v-row v-else>
            
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
  </v-hover>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["finviz", "tipranks", "currentStock"]),
  }
};
</script>

<style scoped>
.ttt {
  text-align: start !important;
  padding: 10px 10px 1px 2px !important;
}
</style>
