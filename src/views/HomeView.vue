<template>
  <div class="home">
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by name or type"
        class="search-input"
      />
    </div>

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

.search-input:focus {
  border: 1px solid #3498db;
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
