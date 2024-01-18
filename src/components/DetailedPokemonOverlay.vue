<template>
  <div class="detailed-pokemon-overlay">
    <div class="overlay-content" :style="{ backgroundColor: getTypeColor() }">
      <!-- Display detailed information about the selected Pokemon -->
      <img
        :src="pokemon.sprites.other['official-artwork'].front_default"
        :alt="pokemon.name"
        class="pokemon-image"
      />
      <h2>{{ capitalizeFirstLetter(pokemon.name) }}</h2>
      <p>Height: {{ pokemon.height / 10 }} meters</p>
      <p>Weight: {{ pokemon.weight / 10 }} kilograms</p>
      <p>Base Experience: {{ pokemon.base_experience }}</p>
      <p>Abilities: {{ getAbilities(pokemon.abilities) }}</p>
      <p>Types: {{ getTypes(pokemon.types) }}</p>
      <p>Stats:</p>
      <ul>
        <li v-for="stat in pokemon.stats" :key="stat.stat.name">
          {{ capitalizeFirstLetter(stat.stat.name) }}: {{ stat.base_stat }}
        </li>
      </ul>
      <!-- Add more details as needed -->
      <button @click="closeOverlay">Close</button>
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
  },
  methods: {
    closeOverlay() {
      // Emit an event to notify the parent to close the overlay
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
      // Map Pokémon types to background colors
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

      // Use the first type for simplicity; adjust as needed
      const primaryType = this.pokemon.types[0]?.type.name || "normal";
      return typeColors[primaryType.toLowerCase()] || "#fff";
    },
  },
};
</script>

<style scoped>
/* Add necessary styles for the overlay */
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
}

.overlay-content img {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 10px;
}

.overlay-content p {
  margin: 5px 0;
}

.overlay-content ul {
  padding: 0;
  list-style: none;
}

.overlay-content li {
  margin: 5px 0;
}

/* Adjusted to have a smooth transition for background color changes */
.overlay-content {
  transition: background-color 0.3s;
}
</style>
