<template>
  <v-card class="mx-auto pb-4" max-width="500" >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">MSFT</v-list-item-title>
        <v-list-item-subtitle>As of: 2020-07-22</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="12">207.11 USD</v-col>
      </v-row>
    </v-card-text>

    <v-row>
      <v-col cols="6">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-title>P/E: 23</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Upcoming ER:
            <p>20/10/2019</p>
          </v-list-item-title>
        </v-list-item>
      </v-col>

      <v-col cols="6">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Short Ratio: 2</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item>Year Price RG: 50%</v-list-item>
        </v-list-item>
      </v-col>
    </v-row>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item>Yearly performance: 50%</v-list-item>
    </v-list-item>

    <v-divider></v-divider>

    <v-card-actions>
      <v-row>
        <v-col>
          <v-btn text>Average: 208.11</v-btn>
        </v-col>
        <v-col>
          <v-btn text>Low: 208.11</v-btn>
        </v-col>
        <v-col>
            <v-btn text>High: 208.11</v-btn>
        </v-col>
        <v-col>
        <v-btn text>TIP: Strong Buy</v-btn>
        </v-col>

      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
      time: 0,
      forecast: [
        {
          day: "Tuesday",
          icon: "mdi-white-balance-sunny",
          temp: "24\xB0/12\xB0"
        },
        {
          day: "Wednesday",
          icon: "mdi-white-balance-sunny",
          temp: "22\xB0/14\xB0"
        },
        { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" }
      ]
    };
  }
};
</script>

<style>
</style>
