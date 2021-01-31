<template>
<v-container>
 <v-card color="rgb(255, 255, 255, 0)" flat style=" margin: 25px auto;">
    <v-card-title class="headline">
      <span>Search for Company Ticker</span>
    </v-card-title>
    
      <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        chips
        clearable
        hide-details
        hide-selected
        item-text="description"
        item-value="symbol"
        label="Type company name..."
        solo
        color="black"
        background-color="rgb(255, 255, 255, 0.6)"
        rounded
        flat
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
            color="blue"
            class="white--text"
            v-on="on"
          >
            <v-icon left>mdi-coin</v-icon>
            <span v-text="item.symbol"></span>
          </v-chip>
        </template>
        <template v-slot:item="{ item }">
          <v-list-item-avatar
            color="blue"
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
   
    <v-card-text class="pt-1 text-right">
      Data provided by
      <a
        class="blue--text text--darken-3"
        href="https://finnhub.io"
        target="_blank"
      >the Finhub APIs database</a>.
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!model" color="blue" class="text--black" outlined @click="calculate()">
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
    search: null,
    tab: null,
    model: null,
  }),
  watch: {
    search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      // Lazily load input items
      fetch(
        `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bsc1uh7rh5rau11saih0`
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
    ...mapActions(["loadData", "changeStock", "resetData", "loadTipranks"]),
    calculate () {
      this.resetData({})
      this.changeStock(this.model)
      this.loadData(this.model)
      this.loadTipranks(this.model)
       this.$router.push("abt")
    }
  }
};
</script>

<style>

</style>
