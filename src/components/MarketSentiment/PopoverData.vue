<template>
  <v-menu tile  content-class="elevation-1" v-model="menu" open-on-hover :nudge-width="200" offset-x>
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ml-2" icon color="rgba(0,0,0,.26)" id="no-background-hover" v-bind="attrs" v-on="on" x-small>
        <v-icon>mdi-help-circle-outline</v-icon>
      </v-btn>
    </template>

    <v-card color="rgb(135, 219, 255)">
      <v-list color="rgb(255, 255, 255, 0.5)">
        <v-list-item>
          <v-list-item-avatar>
            <img src="../../assets/MBIcon.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Ratings</v-list-item-title>
            <v-list-item-subtitle>By Marketbeat</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list disabled color="rgb(255, 255, 255, 0.5)">
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Strong buys: {{ marketbeat.RatingBreakDownToday[0]}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Strong buys: {{ marketbeat.RatingBreakDownToday[0]}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Strong buys: {{ marketbeat.RatingBreakDownToday[0]}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Strong buys: {{ marketbeat.RatingBreakDownToday[0]}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["marketbeat"])
  }
};
</script>

<style scoped>
#no-background-hover::before {
   background-color: transparent !important;
}

>>> .v-ripple__container {
    display:none !important;
}
</style>
