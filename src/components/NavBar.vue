<template>
  <nav>
    <div class="navigation-container">
      <div class="main-container">
        <img class="pokeball" src="@/assets/pokeball.png" alt="Pokeball" />
        <div class="logo-container">
          <img class="logo" src="@/assets/Pokemon.png" alt="Pokemon" />
        </div>
        <div class="generation-dropdown">
          <select v-model="selectedGeneration">
            <option
              v-for="generation in generations"
              :key="generation.value"
              :value="generation.value"
            >
              {{ generation.label }}
            </option>
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
      generations: [
        { label: "Gen 1", value: 1, start: 1, end: 151 },
        { label: "Gen 2", value: 2, start: 152, end: 251 },
        { label: "Gen 3", value: 3, start: 252, end: 386 },
        { label: "Gen 4", value: 4, start: 387, end: 493 },
        { label: "Gen 5", value: 5, start: 494, end: 649 },
        { label: "Gen 6", value: 6, start: 650, end: 721 },
        { label: "Gen 7", value: 7, start: 722, end: 809 },
        { label: "Gen 8", value: 8, start: 810, end: 898 },
      ],
    };
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
  cursor: pointer;
}
.generation-dropdown select {
  background-color: #ef5350;
  color: white;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
</style>
