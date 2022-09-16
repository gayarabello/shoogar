<template>
  <v-container>
    <v-row no-gutters justify="space-between" class="align-baseline">
      <router-link to="/" style="text-decoration: none">
        <h1 class="white--text" style="font-weight: 900">Shoogar</h1>
      </router-link>
      <div>
        <v-row no-gutters>
          <v-btn to="/login" dark text rounded>Login</v-btn>
          <v-btn to="/signup" dark text rounded>Signup</v-btn>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
