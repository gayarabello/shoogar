<template>
  <form @submit.prevent="login">
    <v-text-field
      class="pb-3"
      hide-details
      solo
      flat
      rounded
      label="Email"
      v-model="email"
    >
    </v-text-field>
    <v-text-field
      class="pb-3"
      hide-details
      solo
      flat
      type="password"
      rounded
      label="Password"
      v-model="password"
    >
    </v-text-field>
    <v-btn type="submit" block large rounded depressed>Login</v-btn>
    <v-btn text>Sign Up</v-btn>
  </form>
</template>
<script>
import { signIn } from "@/firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
         await signIn(this.email, this.password)
        this.$router.replace({ path: "dashboard" });
      } catch (err) {
        alert(err)
      }
    },
  },
};
</script>
