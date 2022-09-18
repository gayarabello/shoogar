<template>
  <div>
    Dashboard
    <v-btn @click="signOut()">Logout</v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Overview", icon: "mdi-chevron" },
        { title: "Logs", icon: "mdi-chevron" },
        { title: "Feelings", icon: "mdi-chevron" }
      ],
    };
  },
};
</script>
