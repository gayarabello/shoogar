<template>
  <div id="app">
    <v-app>
      <AppNavbar />
      <v-main>
        <router-view />
      </v-main>
      <v-footer>
        <v-container>
          Made with ❤️ by
          <a target="_blank" href="http://gayarabello.com/">Gaya Correia</a> to
          all people who struggle everyday to keep sugar under control.
        </v-container>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import { usersCollection } from "@/firebase";

export default {
  created() {
    usersCollection
      .get()
      .then((res) => res.forEach((doc) => console.log(doc.data())));
  },
  name: "App",
  components: {
    AppNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #2f80ed !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
