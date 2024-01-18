<template>
  <div class="detailed-pokemon-overlay">
    <div class="overlay-content">
      <!-- Display detailed information about the selected Pokemon -->
      <h2>{{ capitalizeFirstLetter(pokemon.name) }}</h2>
      <p>Height: {{ pokemon.height }} decimetres</p>
      <p>Weight: {{ pokemon.weight }} hectograms</p>
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
</style>
