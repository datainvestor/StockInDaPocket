<template>
  <v-card flat>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" color="#26c6da" dark max-width="400">
          <v-card-title>
            <v-img src="../assets/nasdaq.png" height="30" contain></v-img>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">Date: 2020/08/08</v-card-text>
          <v-card-text class="headline font-weight-bold">Quarter: Q2</v-card-text>
          <v-card-text class="headline font-weight-bold">EPS (estimated): 1.39</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" color="#26c6da" dark max-width="400">
          <v-card-title>
            <v-img src="../assets/nasdaq.png" height="30" contain></v-img>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">Date: 2020/03/08</v-card-text>
          <v-card-text class="headline font-weight-bold">Quarter: Q1</v-card-text>

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
                  <td>1.38</td>
                  <td>1.55</td>
                </tr>
                <tr>
                  <td>Revenue</td>
                  <td>342</td>
                  <td>440</td>
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

          <v-card-text class="headline font-weight-bold">Date: 2019/24/12</v-card-text>
          <v-card-text class="headline font-weight-bold">Quarter: Q4</v-card-text>

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
                  <td>1.38</td>
                  <td>1.55</td>
                </tr>
                <tr>
                  <td>Revenue</td>
                  <td>342</td>
                  <td>440</td>
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
export default {};
</script>

<style>
</style>
