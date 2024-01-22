<template>
  <div class="detailed-pokemon-overlay" @click.self="closeOverlay">
    <div class="overlay-content" :style="{ backgroundColor: getTypeColor() }">
      <img
        :src="pokemon.sprites.other['official-artwork'].front_default"
        :alt="pokemon.name"
        class="pokemon-image"
      />
      <h2>{{ capitalizeFirstLetter(pokemon.name) }}</h2>
      <div class="sections">
        <!-- SECTION 1 -->
        <div class="section">
          <h3>Basic Info</h3>
          <p><strong>Height:</strong> {{ pokemon.height / 10 }} meters</p>
          <p><strong>Weight:</strong> {{ pokemon.weight / 10 }} kilograms</p>
          <p><strong>Base Experience:</strong> {{ pokemon.base_experience }}</p>
          <p>
            <strong>Abilities:</strong> {{ getAbilities(pokemon.abilities) }}
          </p>
          <p><strong>Types:</strong> {{ getTypes(pokemon.types) }}</p>
        </div>
        <br />
        <!-- SECTION 2 -->
        <div class="section">
          <h3>Stats</h3>
          <ul>
            <li v-for="stat in pokemon.stats" :key="stat.stat.name">
              <strong>{{ formatStatName(stat.stat.name) }}:</strong>
              {{ stat.base_stat }}
            </li>
          </ul>
        </div>
      </div>
      <button @click="navigatePokemon(-1)" class="arrow-button left">
        &#8249;
      </button>
      <button @click="navigatePokemon(1)" class="arrow-button right">
        &#8250;
      </button>
      <button @click="closeOverlay" class="close-button">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
    pokemonList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    closeOverlay() {
      this.$emit("closeOverlay");
    },
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    getAbilities(abilities) {
      return abilities
        .map((ability) => this.capitalizeFirstLetter(ability.ability.name))
        .join(", ");
    },
    getTypes(types) {
      return types
        .map((type) => this.capitalizeFirstLetter(type.type.name))
        .join(", ");
    },
    getTypeColor() {
      const typeColors = {
        normal: "#A8A878",
        fire: "#F08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
        ice: "#98D8D8",
        fighting: "#C03028",
        poison: "#A040A0",
        ground: "#E0C068",
        flying: "#A890F0",
        psychic: "#F85888",
        bug: "#A8B820",
        rock: "#B8A038",
        ghost: "#705898",
        dragon: "#7038F8",
        dark: "#705848",
        steel: "#B8B8D0",
        fairy: "#EE99AC",
      };

      const primaryType = this.pokemon.types[0]?.type.name || "normal";
      return typeColors[primaryType.toLowerCase()] || "#fff";
    },
    formatStatName(statName) {
      return statName.toLowerCase() === "hp"
        ? "HP"
        : this.capitalizeFirstLetter(statName);
    },
    navigatePokemon(offset) {
      const newIndex = this.currentIndex + offset;
      if (newIndex >= 0 && newIndex < this.pokemonList.length) {
        this.currentIndex = newIndex;
      }
    },
  },
};
</script>

<style scoped>
.detailed-pokemon-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}

.overlay-content img {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 10px;
}

.overlay-content button.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
}

.overlay-content h2,
.overlay-content h3 {
  color: white !important;
}

.overlay-content p {
  margin: 5px 0;
}

.overlay-content ul {
  padding: 0;
  list-style: none;
  margin-top: 0;
}

.overlay-content li {
  margin: 0;
}

.overlay-content {
  transition: background-color 0.3s;
}

.sections {
  display: flex;
}

.section {
  flex: 1;
  margin: 0px 20px;
}

.section p,
.section li {
  display: flex;
  justify-content: space-between;
}

.close-button {
  padding: 10px;
  border: 2px solid white;
  color: white !important;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  transition: transform 0.1s;
}

.close-button:hover {
  transform: scale(1.05);
}

@media (max-width: 480px) {
  .sections {
    display: block;
  }
}

.arrow-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}
</style>
