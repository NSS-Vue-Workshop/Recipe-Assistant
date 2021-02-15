<template>
  <v-app>
    <v-main class="container mt-10">
      <v-container>
        <v-row>
          <v-col>
            <key-ingredients />
          </v-col>
          <v-col>
            <diet-select />
          </v-col>
          <v-col>
            <meal-type-select />
          </v-col>
        </v-row>
        <recipe-results />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DietSelect from "./components/DietSelect.vue";
import KeyIngredients from "./components/KeyIngredients.vue";
import MealTypeSelect from "./components/MealTypeSelect.vue";
import RecipeResults from "./components/RecipeResults.vue";

export default {
  components: { KeyIngredients, DietSelect, MealTypeSelect, RecipeResults }
};
</script>
