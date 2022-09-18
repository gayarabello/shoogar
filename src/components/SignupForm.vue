<template>
  <form @submit.prevent="pressed" action="submit">
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
      rounded
      type="password"
      label="Password"
      v-model="password"
    >
    </v-text-field>
    <v-text-field
      class="pb-3"
      hide-details
      solo
      flat
      placeholder="1.23"
      rounded
      label="Expendure on sugar"
      v-model="candies"
    >
    </v-text-field>
    <v-btn type="submit" block large rounded depressed>Signup</v-btn>
    <v-btn to="/login" text>Go to Login</v-btn>
  </form>
</template>
<script>
import { signIn, signUp } from "@/firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      candies: "",
    };
  },
  methods: {
    async pressed() {
      this.createUser({
          id: this.email,
          average_expendure: this.candies,
        });
      try {
        await signUp(this.email, this.password);
        await signIn(this.email, this.password);
        this.$router.replace({ path: "dashboard" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
