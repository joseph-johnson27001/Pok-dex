<template>
  <div class="home">
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by name or type"
      />
    </div>

    <PokemonCard
      v-for="pokemon in filteredPokemonList"
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
        // Check if the name or any type contains the search query
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

.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.pokemon-card {
  width: calc(25% - 20px);
  margin-bottom: 20px;
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
