<template>
  <v-timeline-item>
    <span slot="opposite">14/02/2021</span>
    <v-card color="rgb(255, 255, 255, 0.4)" dark class="elevation-1">
      <v-card-title class="title text--primary pt-1 pb-0">{{marketbeat.Entity}}</v-card-title>
      <v-card-text class="text--primary pb-0">
        <v-btn block color="rgb(255, 255, 255, 0)" depressed @click="show = !show">
          <v-icon color="black">{{ show ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
        </v-btn>
        <v-expand-transition>
          <div v-show="!show">
            <v-card-text>
              Rating:
              <b>{{!!marketbeat.Rating ? marketbeat.Rating : "N/A"}}</b>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>Target Price: {{!!marketbeat["Price Target"] ? marketbeat["Price Target"]: "N/A"}}</v-card-text>
            <v-divider></v-divider>
            <v-card-text>Impact: {{marketbeat.Impact}}</v-card-text>
          </div>
        </v-expand-transition>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  props: ["marketbeat"],
  data: () => ({
    show: true
  })
};
</script>

<style>
</style>
