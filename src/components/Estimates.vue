<template>
  <v-card flat class="mx-auto">
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" color="#26c6da" dark max-width="400">
          <v-card-title>
            <v-img src="../assets/nasdaq.png" height="30" contain></v-img>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">Date: {{earnings.Estimates.Date}}</v-card-text>
          <v-card-text class="headline font-weight-bold">Quarter: Current</v-card-text>
          <v-card-text class="headline font-weight-bold">EPS (estimated): {{!!earnings.Estimates["Predicted EPS"] ? "N/A": earnigs["Predicted EPS"]}}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" color="#26c6da" dark max-width="400">
          <v-card-title>
            <v-img src="../assets/nasdaq.png" height="30" contain></v-img>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">Date: {{earnings.Past1.Date}}</v-card-text>
          <v-card-text class="headline font-weight-bold">Quarter: {{earnings.Past1.Quarter}}</v-card-text>

          <v-simple-table dark dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left"></th>
                  <th class="text-left">Estimate</th>
                  <th class="text-left">Official</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Eps</td>
                  <td>{{earnings.Past1.Estimate}}</td>
                  <td>{{earnings.Past1.ReportedEPS}}</td>
                </tr>
                <tr>
                  <td>Revenue</td>
                  <td>{{earnings.Past1.RevEstimate}}</td>
                  <td>{{earnings.Past1.RevActual}}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
       <v-card class="mx-auto" color="#26c6da" dark max-width="400">
          <v-card-title>
            <v-img src="../assets/nasdaq.png" height="30" contain></v-img>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">Date: {{earnings.Past2.Date}}</v-card-text>
          <v-card-text class="headline font-weight-bold">Quarter: {{earnings.Past2.Quarter}}</v-card-text>

          <v-simple-table dark dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left"></th>
                  <th class="text-left">Estimate</th>
                  <th class="text-left">Official</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Eps</td>
                  <td>{{earnings.Past2.Estimate}}</td>
                  <td>{{earnings.Past2.ReportedEPS}}</td>
                </tr>
                <tr>
                  <td>Revenue</td>
                  <td>{{earnings.Past2.RevEstimate}}</td>
                  <td>{{earnings.Past2.RevActual}}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
    ...mapGetters(["earnings"]),
  }
};
</script>

<style>
</style>
