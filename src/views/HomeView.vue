<template>
  <div class="home">
    <!-- Generation buttons -->
    <div class="generation-buttons">
      <button @click="loadPokemonByGeneration(1)">Gen 1</button>
      <button @click="loadPokemonByGeneration(2)">Gen 2</button>
      <button @click="loadPokemonByGeneration(3)">Gen 3</button>
      <button @click="loadPokemonByGeneration(4)">Gen 4</button>
      <button @click="loadPokemonByGeneration(5)">Gen 5</button>
      <button @click="loadPokemonByGeneration(6)">Gen 6</button>
      <button @click="loadPokemonByGeneration(7)">Gen 7</button>
      <button @click="loadPokemonByGeneration(8)">Gen 8</button>
      <!-- Add buttons for other generations as needed -->
    </div>

    <!-- Search bar -->
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by name or type"
        class="search-input"
      />
    </div>

    <!-- Display Pokémon cards -->
    <div class="pokemon-cards">
      <PokemonCard
        v-for="pokemon in filteredPokemonList"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script>
import { getPokemonList } from "@/services/pokemonService";
import PokemonCard from "@/components/PokemonCard";

export default {
  data() {
    return {
      detailedPokemonList: [],
      searchQuery: "",
    };
  },
  mounted() {
    this.loadPokemonByGeneration(2);
  },
  methods: {
    async loadPokemonByGeneration(generation) {
      console.log("LOADING", generation);
      try {
        const BASE_URL = `https://pokeapi.co/api/v2/generation/${generation}/`;
        const response = await getPokemonList(BASE_URL);
        this.detailedPokemonList = response;
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    },
    filterPokemonList() {
      const query = this.searchQuery.toLowerCase();
      if (!query) {
        return this.detailedPokemonList;
      }

      return this.detailedPokemonList.filter((pokemon) => {
        return (
          pokemon.name.toLowerCase().includes(query) ||
          pokemon.types.some((type) =>
            type.type.name.toLowerCase().includes(query)
          )
        );
      });
    },
  },
  computed: {
    filteredPokemonList() {
      return this.filterPokemonList();
    },
  },
  components: {
    PokemonCard,
  },
};
</script>

<style scoped>
.generation-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.search-bar {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  outline: none;
}
.pokemon-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.pokemon-card {
  width: calc(25% - 20px);
  transition: transform 0.1s ease-in-out;
  margin-bottom: 20px;
}
.pokemon-card:hover {
  cursor: pointer;
  transform: scale(1.05);
}

@media screen and (max-width: 992px) {
  .pokemon-card {
    width: calc(33.33% - 20px);
  }
}

@media screen and (max-width: 768px) {
  .pokemon-card {
    width: calc(50% - 20px);
  }
}

@media screen and (max-width: 576px) {
  .pokemon-card {
    width: 100%;
  }
}
</style>
