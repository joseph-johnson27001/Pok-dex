<template>
  <div class="home">
    <!-- Generation buttons -->
    <!-- <div class="generation-buttons">
      <button
        :class="{ active: selectedGeneration === 1 }"
        @click="loadPokemonByGeneration(1)"
      >
        Gen 1
      </button>
      <button
        :class="{ active: selectedGeneration === 2 }"
        @click="loadPokemonByGeneration(2)"
      >
        Gen 2
      </button>
      <button
        :class="{ active: selectedGeneration === 3 }"
        @click="loadPokemonByGeneration(3)"
      >
        Gen 3
      </button>
      <button
        :class="{ active: selectedGeneration === 4 }"
        @click="loadPokemonByGeneration(4)"
      >
        Gen 4
      </button>
      <button
        :class="{ active: selectedGeneration === 5 }"
        @click="loadPokemonByGeneration(5)"
      >
        Gen 5
      </button>
      <button
        :class="{ active: selectedGeneration === 6 }"
        @click="loadPokemonByGeneration(6)"
      >
        Gen 6
      </button>
      <button
        :class="{ active: selectedGeneration === 7 }"
        @click="loadPokemonByGeneration(7)"
      >
        Gen 7
      </button>
      <button
        :class="{ active: selectedGeneration === 8 }"
        @click="loadPokemonByGeneration(8)"
      >
        Gen 8
      </button>
    </div> -->
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by name or type"
        class="search-input"
      />
      <span v-if="searchQuery" @click="clearSearch" class="clear-button"
        >X</span
      >
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
    this.loadPokemonByGeneration(this.selectedGeneration);
  },
  methods: {
    clearSearch() {
      this.searchQuery = "";
    },
    async loadPokemonByGeneration(generation) {
      try {
        const BASE_URL = `https://pokeapi.co/api/v2/generation/${generation}/`;
        const response = await getPokemonList(BASE_URL);
        this.detailedPokemonList = response;
        this.selectedGeneration = generation;
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
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #777;
}

.clear-button:hover {
  color: #333;
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
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
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

  .generation-buttons button {
    flex-basis: calc(
      33.33% - 20px
    ); /* Adjust the width of buttons for medium screens */
  }
}

@media screen and (max-width: 768px) {
  .pokemon-card {
    width: calc(50% - 20px);
  }

  .generation-buttons button {
    flex-basis: calc(
      50% - 20px
    ); /* Adjust the width of buttons for small screens */
  }
}

@media screen and (max-width: 576px) {
  .pokemon-card {
    width: 100%;
  }

  .generation-buttons button {
    flex-basis: 100%; /* Adjust the width of buttons for extra small screens */
  }
}
</style>
