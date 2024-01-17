<template>
  <nav>
    <img class="pokeball" src="@/assets/pokeball.png" alt="Pokeball" />
    <div class="logo">Pokedex</div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: #ef5350;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
}

.pokeball {
  width: 30px; /* Adjust the size as needed */
  margin-right: 10px; /* Add spacing if needed */
}
</style>
