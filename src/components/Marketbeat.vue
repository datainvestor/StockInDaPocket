<template>
  <v-card class="mx-auto">
    <v-row>
      <v-col cols="4">
        <v-list dense>
          <v-subheader>Market Sentiment</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item>
              <v-list-item-content>
                <v-list-item>Rating</v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item>Price Target</v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item>Rating breakdown</v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="4">
        <v-list dense>
          <v-subheader class="title">Today</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item>
              <v-list-item-content>
                <v-list-item>{{marketbeat.TodayConsRating}}</v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item>{{marketbeat.TodayPriceTarget}}</v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">S</th>
                      <th class="text-left">H</th>
                      <th class="text-left">B</th>
                      <th class="text-left">SB</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{marketbeat.RatingBreakDownToday[0]}}</td>
                      <td>{{marketbeat.RatingBreakDownToday[1]}}</td>
                      <td>{{marketbeat.RatingBreakDownToday[2]}}</td>
                      <td>{{marketbeat.RatingBreakDownToday[3]}}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="4">
        <v-list dense>
          <v-subheader class="title">180 days ago</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item>
              <v-list-item-content>
                <v-list-item>{{marketbeat.HalfYrAgoConsRating}}</v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item>{{marketbeat.HalfYrPriceTarget}}</v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">S</th>
                      <th class="text-left">H</th>
                      <th class="text-left">B</th>
                      <th class="text-left">SB</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{marketbeat.RatingBreakDownHf[0]}}</td>
                      <td>{{marketbeat.RatingBreakDownHf[1]}}</td>
                      <td>{{marketbeat.RatingBreakDownHf[2]}}</td>
                      <td>{{marketbeat.RatingBreakDownHf[3]}}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
    <v-divider></v-divider>
     <v-card-subtitle class="ttt">
      Past ratings
    </v-card-subtitle>
    <v-row justify="center">
      <v-col cols="6" md="3">
        <v-card>
          <v-card-text>{{marketbeat.PastRatings[0].Entity}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>{{!!marketbeat.PastRatings[0].Rating ? marketbeat.PastRatings[0].Rating : "N/A"}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Target: {{marketbeat.PastRatings[0]["Price Target"]}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Impact: {{marketbeat.PastRatings[0].Impact}}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card>
          <v-card-text>{{marketbeat.PastRatings[1].Entity}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>{{!!marketbeat.PastRatings[1].Rating ? marketbeat.PastRatings[1].Rating : "N/A"}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Target: {{marketbeat.PastRatings[1]["Price Target"]}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Impact: {{marketbeat.PastRatings[1].Impact}}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6" md="3">
        <v-card>
          <v-card-text>{{marketbeat.PastRatings[2].Entity}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>{{!!marketbeat.PastRatings[2].Rating ? marketbeat.PastRatings[2].Rating : "N/A"}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Target: {{marketbeat.PastRatings[2]["Price Target"]}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Impact: {{marketbeat.PastRatings[2].Impact}}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6" md="3">
        <v-card>
          <v-card-text>{{marketbeat.PastRatings[3].Entity}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>{{!!marketbeat.PastRatings[3].Rating ? marketbeat.PastRatings[3].Rating : "N/A"}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Target: {{marketbeat.PastRatings[3]["Price Target"]}}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Impact: {{marketbeat.PastRatings[3].Impact}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
   computed: {
    ...mapGetters(["marketbeat"]),
  }
};
</script>

<style scoped>
.ttt {
  text-align: start !important; 
  padding: 10px 10px 1px 2px !important;
}
</style>
