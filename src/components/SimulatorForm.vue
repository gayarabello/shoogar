<template>
  <div>
    <form action="">
      <v-row justify="center">
        <h3 class="white--text mx-5 px-2" :class="{ selected: step == 1 }">
          1
        </h3>
        <h3 class="white--text mx-5 px-2" :class="{ selected: step == 2 }">
          2
        </h3>
        <h3 class="white--text mx-5 px-2" :class="{ selected: step == 3 }">
          3
        </h3>
      </v-row>
      <template v-if="step == 1">
        <v-row class="py-12" justify="center">
          <v-col cols="10" sm="6" md="5">
            <h1 class="pb-4">
              How much money have you been spending daily on sugar?
            </h1>
            <v-text-field
              class="mx-auto"
              style="max-width: 240px"
              suffix="€"
              flat
              rounded
              solo
              v-model="amount"
              type="number"
            >
            </v-text-field>
            <v-btn rounded text dark @click="step = 2"> Next </v-btn>
          </v-col>
        </v-row>
      </template>
      <template v-if="step == 2">
        <v-row class="py-12" justify="center">
          <v-col cols="10" sm="6" md="5">
            <h1>What's your goal?</h1>
            <v-text-field
              class="mx-auto"
              style="max-width: 240px"
              suffix="€"
              placeholder="Ex: a trip, a material good"
              flat
              rounded
              solo
              v-model="goal"
              type="number"
            >
            </v-text-field>
            <v-btn rounded text dark @click="step = 1"> Prev </v-btn>
            <v-btn rounded text dark @click="step = 3"> Next </v-btn>
          </v-col>
        </v-row>
      </template>
      <template v-if="step == 3">
        <v-row class="py-12" justify="center">
          <v-col cols="10" sm="6" md="8">
            <h1>
              You have a journey of
              <span class="white px-3"
                >{{ Math.floor(goal / amount) }} days</span
              >
              ahead.
            </h1>
            <h2>Good Luck!</h2>
            <v-btn class="my-4" rounded color="white" depressed to="/signup">
              Start Today
            </v-btn>
            <v-btn block text rounded dark depressed @click="step = 1">
              restart
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      amount: 1,
      goal: 100,
    };
  },
};
</script>
<style lang="scss" scoped>
.selected {
  border-radius: 12rem;
  background-color: lightblue;
}
</style>
