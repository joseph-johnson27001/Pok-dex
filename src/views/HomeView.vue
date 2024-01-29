<template>
  <div class="home">
    <div class="search-bar">
      <div class="search-input-container">
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="Search by Pokémon or type"
        />
        <!-- Search icon -->
        <span class="search-icon">🔍</span>
      </div>
      <span v-if="searchQuery" @click="clearSearch" class="clear-button"
        >X
      </span>
    </div>
    <div class="pokemon-cards">
      <PokemonCard
        v-for="pokemon in filteredPokemonList"
        :key="pokemon.name"
        :pokemon="pokemon"
        @cardClick="showPokemonDetailOverlay"
      />
    </div>
    <DetailedPokemonOverlay
      v-if="showOverlay"
      :pokemon="selectedPokemon"
      :pokemonList="filteredPokemonList"
      :index="selectedPokemon.id"
      @closeOverlay="closeOverlay"
      @updatePokemon="updateSelectedPokemon"
    />
  </div>
</template>

<script>
import { getPokemonList } from "@/services/pokemonService";
import PokemonCard from "@/components/PokemonCard";
import DetailedPokemonOverlay from "@/components/DetailedPokemonOverlay";

export default {
  data() {
    return {
      detailedPokemonList: [],
      searchQuery: "",
      selectedGeneration: 1,
      showOverlay: false,
      selectedPokemon: null,
      pokemonList: [],
    };
  },
  components: {
    PokemonCard,
    DetailedPokemonOverlay,
  },
  mounted() {
    this.loadPokemonData();
  },
  methods: {
    clearSearch() {
      this.searchQuery = "";
    },
    async loadPokemonData() {
      this.$store.state.isLoading = true;
      try {
        await this.loadPokemonByGeneration();
        await this.preloadImages();
        this.$nextTick(() => {
          this.$store.state.isLoading = false;
        });
      } catch (error) {
        console.error("Error loading Pokémon data:", error);
        this.$store.state.isLoading = false;
      }
    },
    async preloadImages() {
      const imagePromises = this.detailedPokemonList.map((pokemon) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = pokemon.sprites.front_default;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      await Promise.all(imagePromises);
    },
    async loadPokemonByGeneration() {
      const selectedGeneration = this.$store.state.selectedGeneration;
      const generationInfo = this.getGenerationInfo(selectedGeneration);

      try {
        const response = await getPokemonList(
          generationInfo.start,
          generationInfo.end
        );
        this.detailedPokemonList = response;
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    },
    getGenerationInfo(generationValue) {
      return this.$store.state.generations.find(
        (generation) => generation.value === generationValue
      );
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
    updateSelectedPokemon(newPokemon) {
      this.selectedPokemon = newPokemon;
    },
    showPokemonDetailOverlay(pokemon) {
      this.showOverlay = true;
      this.selectedPokemon = pokemon;
    },
    closeOverlay() {
      this.showOverlay = false;
      this.selectedPokemon = null;
    },
  },
  watch: {
    "$store.state.selectedGeneration": "loadPokemonData",
  },
  computed: {
    filteredPokemonList() {
      return this.filterPokemonList();
    },
  },
};
</script>

<style scoped>
.generation-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}

.generation-buttons button {
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.generation-buttons button.active {
  background-color: #3498db;
  color: #fff;
}

.search-bar {
  margin-bottom: 20px;
  position: relative;
}

.clear-button {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #777;
}

.clear-button:hover {
  color: #333;
}

.search-input-container {
  position: relative;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 15px 20px 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid lightgrey;
  border-radius: 20px;
  outline: none;
  transition: border-color 0.1s, box-shadow 0.1s;
  padding-left: 35px;
  font-weight: 400;
}

.search-input:focus {
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #777;
}
.pokemon-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(25% - 20px), 1fr));
  gap: 20px;
}

.pokemon-card {
  width: 100%;
  transition: transform 0.1s ease-in-out;
}

.pokemon-card:hover {
  cursor: pointer;
  transform: scale(1.05);
}

@media screen and (max-width: 992px) {
  .pokemon-cards {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .generation-buttons button {
    flex-basis: calc(33.33% - 20px);
  }
}

@media screen and (max-width: 768px) {
  .pokemon-cards {
    grid-template-columns: 1fr 1fr;
  }

  .generation-buttons button {
    flex-basis: calc(50% - 20px);
  }
}

@media screen and (max-width: 576px) {
  .pokemon-cards {
    grid-template-columns: 1fr;
  }

  .generation-buttons button {
    flex-basis: 100%;
  }
}
</style>
