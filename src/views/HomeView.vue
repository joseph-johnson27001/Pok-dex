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
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Center cards in a row */
}

.pokemon-card {
  width: calc(25% - 20px); /* 25% width with some margin */
  margin-bottom: 20px;
}

@media screen and (max-width: 992px) {
  .pokemon-card {
    width: calc(33.33% - 20px); /* 33.33% width with some margin */
  }
}

@media screen and (max-width: 768px) {
  .pokemon-card {
    width: calc(50% - 20px); /* 50% width with some margin */
  }
}

@media screen and (max-width: 576px) {
  .pokemon-card {
    width: 100%; /* Full width on smaller screens */
  }
}
</style>
