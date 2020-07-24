<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" :mini-variant="true" app>
          <v-list dense>
            <v-list-item link to="/home">
              <v-list-item-action>
                <v-icon>mdi-briefcase-search-outline</v-icon>
              </v-list-item-action>
              <v-list-item-content >
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

        <v-app-bar app color="primary" dark dense>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Stock in da Pocket <span class="font-weight-thin caption">by O/T </span></v-toolbar-title>
        </v-app-bar>

            <v-fade-transition mode="out-in">
              <router-view />
            </v-fade-transition>
   
      </v-app>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "main-layout",
  data: () => ({
    drawer: null
  })
};
</script>

<style>
#nav {
  padding-bottom: 0px !important;
}
</style>
