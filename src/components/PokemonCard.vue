<!-- src/components/PokemonCard.vue -->
<template>
  <div class="pokemon-card">
    <img
      v-if="pokemon.sprites && pokemon.sprites.front_default"
      :src="pokemon.sprites.front_default"
      :alt="pokemon.name"
    />
    <h3>{{ pokemon.name }}</h3>
    <p v-for="type in pokemon.types" :key="type.slot">{{ type.type.name }}</p>
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
};
</script>

<style scoped>
.pokemon-card {
  /* Add your styling for the Pokemon card */
}
</style>
