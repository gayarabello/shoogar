<template>
  <div>
    Dashboard
    <v-btn @click="signOut()">Logout</v-btn>
  </div>
</template>
<script>
import firebase from "firebase/app";
export default {
  data() {
    return {};
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ path: "/" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
