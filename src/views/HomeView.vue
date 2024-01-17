<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <PokemonCard
      v-for="pokemon in detailedPokemonList"
      :key="pokemon.name"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import { getPokemonList } from "@/services/pokemonService";
import PokemonCard from "@/components/PokemonCard";

export default {
  data() {
    return {
      detailedPokemonList: [],
    };
  },
  mounted() {
    this.fetchDetailedPokemonList();
  },
  methods: {
    async fetchDetailedPokemonList() {
      try {
        this.detailedPokemonList = await getPokemonList();
      } catch (error) {
        console.error("Error fetching detailed Pokemon list:", error);
      }
    },
  },
  components: {
    PokemonCard,
  },
};
</script>

<style scoped>
/* Add your styling for the Home component */
</style>
