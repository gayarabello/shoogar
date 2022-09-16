<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <LoginForm />
    </v-row>
  </v-container>
</template>
<script>
import LoginForm from "@/components/LoginForm";
export default {
  components: { LoginForm },
};
</script>
