<template>
  <nav>
    <div class="navigation-container">
      <div class="main-container">
        <img class="pokeball" src="@/assets/pokeball.png" alt="Pokeball" />
        <div class="logo-container">
          <img class="logo" src="@/assets/Pokemon.png" alt="Pokemon" />
        </div>
        <div class="generation-dropdown">
          <select
            v-model="selectedGeneration"
            @change="loadPokemonByGeneration"
          >
            <option value="1">Gen 1</option>
            <option value="2">Gen 2</option>
            <option value="3">Gen 3</option>
            <option value="4">Gen 4</option>
            <option value="5">Gen 5</option>
            <option value="6">Gen 6</option>
            <option value="7">Gen 7</option>
            <option value="8">Gen 8</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      selectedGeneration: 1,
    };
  },
  methods: {
    loadPokemonByGeneration() {
      // Implement your logic to load Pokémon based on the selected generation
      // You can use this.selectedGeneration to get the selected value
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #ef5350;
  color: #fff;
}

.navigation-container {
  max-width: 1200px;
  margin: auto;
}

.main-container {
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.logo {
  width: 100px;
}

.pokeball {
  display: flex;
  align-self: center;
}

.pokeball {
  width: 30px;
  cursor: pointer;
}

.generation-dropdown {
  display: flex !important;
  justify-content: end;
}
.generation-dropdown select {
  background-color: #ef5350;
  color: white;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
</style>
