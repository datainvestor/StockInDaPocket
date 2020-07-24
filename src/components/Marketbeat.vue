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
                <v-list-item>Buy</v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item>209</v-list-item>
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
                      <td>3</td>
                      <td>2</td>
                      <td>3</td>
                      <td>40</td>
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
                <v-list-item>Hold</v-list-item>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item>203</v-list-item>
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
                      <td>3</td>
                      <td>2</td>
                      <td>3</td>
                      <td>40</td>
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
    <v-row justify="center">
      <v-col cols="6" md="3">
        <v-card>
          <v-card-text>JPM</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Buy</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Target: 209.11</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Impact: Huge</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card>
          <v-card-text>JPM</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Buy</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Target: 209.11</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Impact: Huge</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6" md="3">
        <v-card>
          <v-card-text>JPM</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Buy</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Target: 209.11</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Impact: Huge</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6" md="3">
        <v-card>
          <v-card-text>JPM</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Buy</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Target: 209.11</v-card-text>
          <v-divider></v-divider>
          <v-card-text>Impact: Huge</v-card-text>
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
