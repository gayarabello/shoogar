<template>
  <v-container>
    <v-row no-gutters justify="space-between" class="align-baseline">
      <router-link to="/" style="text-decoration: none">
        <h1 class="white--text" style="font-weight: 900">Shoogar</h1>
      </router-link>
      <div>
        <v-row no-gutters>
          <v-btn to="/login" dark text rounded>Login</v-btn>
          <v-btn v-if="!isLogged" to="/signup" dark text rounded>Signup</v-btn>
          <v-btn v-else @click="signOut()">Logout</v-btn>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { singOut, getIsAuthenticated } from "@/firebase";

export default {
  name: "AppNavbar",
  data(){
    return {
      isLogged: false,
    }
  },
  async mounted(){
    this.isLogged =  await getIsAuthenticated();        
  },
  methods: {
    async signOut() {
      try {
        await singOut()
        this.isLogged =  await getIsAuthenticated();        
        this.$router.replace({ path: "/" });
      } catch (err) {
        console.error(err);
      }
    },
  },

};
</script>

