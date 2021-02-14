<template>
  <v-card flat max-width="840px" class="mt-2" color="rgb(255, 255, 255, 0.3)">
  
    <perfect-scrollbar>
        <v-card-title class="py-0">Latest ratings updates</v-card-title>
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="ml-1 mr-4">
        <TimelineItem v-for="(item, i) in marketbeat.PastRatings" :key="i" :marketbeat="marketbeat.PastRatings[i]"></TimelineItem>
      </v-timeline>
    </perfect-scrollbar>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import TimelineItem from "./TimelineItem"

export default {
  data: () => ({
    show: true,
  }),
  computed: {
    ...mapGetters(["marketbeat"])
  },
  components: {
    TimelineItem
  }
};
</script>

<style>
.ps {
  height: 470px;
}
</style>
