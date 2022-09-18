<template>
  <div>
    <v-container>
      <v-row
        no-gutters
        style="height: 22rem"
        class="text-center justify-center align-center"
      >
        <v-col cols="11" sm="6" md="6" class="text-center mb-6">
          <h1 class="white--text mx-auto mb-6" style="font-size: 2.2rem">
            Quit guilt and achieve your goals by eating up to 1 treat a day
          </h1>
          <v-btn to="/signup" depressed rounded>Start today</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="white">
      <v-container>
        <v-row no-gutters class="py-12">
          <v-col cols="12" md="6">
            <img
              width="50%"
              src="https://cdni.iconscout.com/illustration/free/thumb/girl-running-in-park-1668023-1415692.png"
              alt=""
            />
          </v-col>
          <v-col cols="12" md="6">
            <div class="text-left">
              <div class="py-4">
                <h2>1. Set a saving amount</h2>
                <p>
                  Set how much you would save per day if you could manage to
                  keep sugar intake under control.
                </p>
              </div>
              <h2>2. Define a goal</h2>
              <p>
                Choose something you really want and set an sum to be achieved.
                Keep it feasable and strong enough to make you stick.
              </p>
              <div class="py-4">
                <h2>3. Choose a Gonden Hour and a treat</h2>
                <p>
                  Analyze your sugar cravings and schedule your candy to the
                  most hard to surpass. Choose your treat, a small delicius who
                  will be your compagnion to the hard times.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <v-container class="pt-12 pb-7">
      <SimulatorForm class="py-12" />
    </v-container>

    <v-container fluid class="white text-left">
      <v-row class="align-center py-12">
        <v-col class="text-right" cols="12" sm="5">
          <img
            width="60%"
            src="https://cdni.iconscout.com/illustration/premium/thumb/happy-businessman-in-suit-jumping-in-the-air-2948500-2447280.png"
            alt=""
          />
        </v-col>
        <v-col cols="12" sm="7">
          <h2 class="pb-5" style="font-size: 3rem; line-height: 100%">
            Share your achievements
          </h2>
          <h4>
            Collect kudos from your progress and share your achievements.
          </h4>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="white--text text-left">
      <v-row class="align-center py-12">
        <v-col cols="12" sm="6">
          <h2 class="pb-5" style="font-size: 3rem; line-height: 100%">
            Visualize your progress
          </h2>
          <h4>
            See how your effort is bringing you closer to your defined goal.
          </h4>
        </v-col>
        <v-col cols="12" sm="6">
          <img width="100%" src="https://i.stack.imgur.com/QxJoo.png" alt="" />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="white py-12">
      <v-row justify="center" class="py-12">
        <v-col cols="12" sm="6">
          <h5 style="text-transform: uppercase; letter-spacing: 1px">
            Other names for sugar
          </h5>
          <h1 class="py-5">{{ list[0] }}</h1>
          <v-btn depressed rounded @click="shuffleSugar()"> Other </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import sugarNames from "@/assets/data/sugarNames.js";
import SimulatorForm from "@/components/SimulatorForm";
export default {
  components: {
    SimulatorForm,
  },
  data() {
    return {
      list: sugarNames,
    };
  },
  methods: {
    shuffleSugar() {
      this.list = this.list.sort(() => Math.random() - 0.7);
    },
  },
};
</script>
