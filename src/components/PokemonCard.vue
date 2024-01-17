<template>
  <div :style="{ backgroundColor: getBackgroundColor() }" class="pokemon-card">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <h3>{{ capitalizeFirstLetter(pokemon.name) }}</h3>
    <div class="types">
      <span v-for="element in pokemon.types" :key="element.slot">
        {{ capitalizeFirstLetter(element.type.name) }}
      </span>
    </div>
    <div class="stats">
      <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="stat">
        <strong>{{ formatStatName(stat.stat.name) }}:</strong>
        {{ stat.base_stat }}
      </div>
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
    getBackgroundColor() {
      const typeColors = {
        normal: "#a8a878",
        fire: "#f08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
      };

      const primaryType = this.pokemon.types[0]?.type.name || "normal";
      const secondaryType = this.pokemon.types[1]?.type.name;
      const bgColor =
        typeColors[primaryType.toLowerCase()] ||
        typeColors[secondaryType?.toLowerCase()] ||
        "";

      return bgColor;
    },
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    formatStatName(statName) {
      if (statName.toLowerCase() === "hp") {
        return statName.toUpperCase();
      }
      return this.capitalizeFirstLetter(statName);
    },
  },
};
</script>

<style scoped>
.pokemon-card {
  border: 2px solid #ddd;
  border-radius: 10px;
  text-align: center;
}

.types {
  margin-top: 10px;
}

.type {
  display: inline-block;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
}

.stats {
  margin-top: 10px;
}

.stat {
  margin-bottom: 5px;
}
</style>
