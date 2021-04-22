<!-- @format -->

<template>
  <v-app class="overflow-hidden">
    <Navbar />
    <v-sheet
      id="main-panel" 
      class="overflow-y-auto"
      max-height="800"
    >
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-sheet>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  created() {},
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
  }),
};
</script>

<style>
</style>
