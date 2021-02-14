<template>
  <v-container fill-height fluid class="px-12">
    <!-- <v-progress-linear indeterminate color="yellow darken-2"></v-progress-linear> -->
    <TopOverview></TopOverview>
    <v-row justify="center" align="start">
      <v-col cols="12" md="5" class="d-flex">
        <Finviz></Finviz>
      </v-col>
      <v-col cols="12" md="7">
        <SentimentTable></SentimentTable>
        <Timeline></Timeline>
        <!-- <Marketbeat></Marketbeat> -->
      </v-col>
    </v-row>

    <v-row justify="center" align="start">
      <Estimates></Estimates>
    </v-row>

    <!-- <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay> -->
  </v-container>
</template>

<script>
import Finviz from "../components/Finviz";
// import Marketbeat from "../components/Marketbeat";
import Estimates from "../components/Estimates";
import TopOverview from "../components/TopOverview"
import SentimentTable from "../components/MarketSentiment/Table"
import Timeline from "../components/MarketSentiment/Timeline"
import { mapGetters } from "vuex";

export default {
  data: () => ({
  }),
  computed: {
    ...mapGetters(["mainJson", "earnings", "finviz", "marketbeat", "tipranks"]),
    overlay() {
      if (
        Object.keys(this.mainJson).length === 0 &&
        this.mainJson.constructor === Object
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
  },
  components: {
    Finviz,
    // Marketbeat,
    Estimates,
    TopOverview,
    SentimentTable,
    Timeline
  }
};
</script>

<style>
</style>
