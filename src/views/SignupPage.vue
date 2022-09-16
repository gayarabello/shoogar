<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <SignupForm />
    </v-row>
  </v-container>
</template>
<script>
import SignupForm from "@/components/SignupForm";
export default {
  components: { SignupForm },
};
</script>
