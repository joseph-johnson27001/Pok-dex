<!-- src/components/PokemonCard.vue -->
<template>
  <div :class="['pokemon-card', getBackgroundColor()]">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <h3>{{ pokemon.name }}</h3>
    <div class="types">
      <span
        v-for="element in pokemon.types"
        :key="element.slot"
        :class="['type', getBackgroundColor(element.type.name)]"
      >
        {{ element.type.name }}
      </span>
    </div>
    <div class="stats">
      <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="stat">
        <strong>{{ stat.stat.name }}:</strong> {{ stat.base_stat }}
      </div>
    </div>
    <!-- Add more information as needed -->
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
    getBackgroundColor(typeName) {
      // Map element types to corresponding background colors
      const typeColors = {
        normal: "#a8a878",
        fire: "#f08030",
        // Add more colors for other types
      };

      // Sanitize the type name to ensure it's a valid key
      const sanitizedTypeName = typeName
        ? typeName.replace(/\W/g, "").toLowerCase()
        : "normal";

      return typeColors[sanitizedTypeName] || ""; // Default to normal color if not found
    },
  },
};
</script>

<style scoped>
.pokemon-card {
  border: 2px solid #ddd;
  padding: 15px;
  margin: 10px;
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
