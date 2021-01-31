<template>
  <v-app id="inspire">
    <v-navigation-drawer permanent dark width=220 id="bgdrawer" app>
      <v-list-item active-class="red--text">
        <v-list-item-content>
          <v-list-item-title class="title text-left">Stocktimus Prime</v-list-item-title>
          <v-list-item-subtitle class="text-left">(Beta)</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list dense>
        <v-list-item link to="/home">
          <v-list-item-action>
            <v-icon>mdi-briefcase-search-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/abt">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-fade-transition mode="out-in">
      <v-main>
        <router-view />
      </v-main>
    </v-fade-transition>
  </v-app>
</template>

<script>
export default {
  name: "main-layout",
  data: () => ({
    drawer: null
  })
};
</script>

<style >
.v-main__wrap {
  background: radial-gradient(
    50% 50% at 50% 25%,
    rgba(0, 181, 255, 0.28) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

#bgdrawer {
  background: linear-gradient(
    190.68deg,
    rgb(27, 28, 35) 4%,
    rgb(0, 0, 0) 100%
  );
}
</style>
