<template>
  <div :class="['pokemon-card', getBackgroundColor()]">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <h3>{{ capitalizeFirstLetter(pokemon.name) }}</h3>
    <div class="types">
      <span
        v-for="element in pokemon.types"
        :key="element.slot"
        :class="getTypeColor(element.type.name)"
      >
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
    // Background color update not happening
    getBackgroundColor() {
      const typeColors = {
        normal: "#a8a878",
        fire: "#f08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
        // Add more types as needed
      };

      // Use the first type for simplicity, or you can choose how to prioritize types
      const primaryType = this.pokemon.types[0]?.type.name || "normal";

      // If there is a second type, use its color as well
      const secondaryType = this.pokemon.types[1]?.type.name;
      const bgColor =
        typeColors[primaryType.toLowerCase()] ||
        typeColors[secondaryType?.toLowerCase()] ||
        "";

      return { "background-color": bgColor };
    },

    getTypeColor(typeName) {
      const typeColors = {
        normal: "#a8a878",
        fire: "#f08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
      };

      const sanitizedTypeName = typeName
        ? typeName.replace(/\W/g, "").toLowerCase()
        : "normal";

      return typeColors[sanitizedTypeName] || "";
    },
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    formatStatName(statName) {
      // Special case: If the statName is "hp," capitalize both letters
      if (statName.toLowerCase() === "hp") {
        return statName.toUpperCase();
      }
      // Otherwise, capitalize only the first letter
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
  background-color: white;
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
