<template>
<v-container>
 <v-card color="blue lighten-2" dark style="max-width: 1200px; margin: 25px auto;">
    <v-card-title class="headline blue lighten-3">
      <span class="white--text">Search for Company Ticker</span>
    </v-card-title>
    <v-card-text>
      Explore US companies' tickers. Data delivered by
      <a
        class="grey--text text--lighten-3"
        href="https://finnhub.io"
        target="_blank"
      >the Finhub APIs database</a>.
    </v-card-text>
    <v-card-text>
      <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        chips
        clearable
        hide-details
        hide-selected
        hide-no-data
        item-text="description"
        item-value="symbol"
        label="Type company name..."
        solo
      >
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-title>
              Search for your favorite
              <strong>Company</strong>
            </v-list-item-title>
          </v-list-item>
        </template>
        <template v-slot:selection="{ attr, on, item, selected }">
          <v-chip
            v-bind="attr"
            :input-value="selected"
            color="primary"
            class="white--text"
            v-on="on"
          >
            <v-icon left>mdi-coin</v-icon>
            <span v-text="item.symbol"></span>
          </v-chip>
        </template>
        <template v-slot:item="{ item }">
          <v-list-item-avatar
            color="primary"
            class="headline font-weight-light white--text"
          >{{ item.description.charAt(0) }}</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.description"></v-list-item-title>
            <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-coin</v-icon>
          </v-list-item-action>
        </template>
      </v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!model" color="grey darken-3" @click="calculate()">
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</v-container>
 
</template>


<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null
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
      fetch(
        "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bsc1uh7rh5rau11saih0"
      )
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
  methods: {
    ...mapActions(["loadData", "changeStock", "resetData"]),
    calculate () {
      this.resetData({})
      this.changeStock(this.model)
      this.loadData(this.model)
       this.$router.push("abt")
    }
  }
};
</script>

<style>
</style>
