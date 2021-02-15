<template>
  <v-card height="100%">
    <v-card-title>Diet Restrictions</v-card-title>
    <v-card-subtitle class="mt-6">
      <em>Filter results by dietary restrictions</em>
    </v-card-subtitle>
    <v-card-text>
      <v-chip-group multiple active-class="primary--text" @change="setDiets">
        <v-chip :value="option" v-for="option in options" :key="option">
          {{ option }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      options: [
        "Gluten Free",
        "Ketogenic",
        "Vegetarin",
        "Vegan",
        "Pescatarian",
        "Paleo",
        "Whole30"
      ]
    };
  },
  methods: {
    ...mapMutations(["setDiets"])
  }
};
</script>

<style></style>
