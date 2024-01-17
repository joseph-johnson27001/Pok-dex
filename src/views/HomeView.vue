<template>
  <div class="home">
    <PokemonCard
      v-for="pokemon in pokemonList"
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
      pokemonList: [],
    };
  },
  mounted() {
    this.fetchPokemonList();
  },
  methods: {
    async fetchPokemonList() {
      try {
        this.pokemonList = await getPokemonList();
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
      }
    },
  },
  components: {
    PokemonCard,
  },
};
</script>

<style scoped></style>
