<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="start">
      <v-col cols="12" md="5" class="d-flex" >
        <Finviz></Finviz>
      </v-col>
      <v-col cols="12" md="7">
        <Marketbeat></Marketbeat>
      </v-col>
    </v-row>

    <v-row justify="center" align="start">
      <Estimates></Estimates>
    </v-row>
  </v-container>
</template>

<script>
import Finviz from "../components/Finviz"
import Marketbeat from "../components/Marketbeat"
import Estimates from "../components/Estimates"

export default {
  data: () => ({
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null,

  }),
  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      // Lazily load input items
      fetch("https://api.coingecko.com/api/v3/coins/list")
        .then(res => res.clone().json())
        .then(res => {
          this.items = res;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    }
  },
  components: {
    Finviz,
    Marketbeat,
    Estimates
  }
};
</script>

<style>
</style>
