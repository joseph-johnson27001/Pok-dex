<template>
  <nav>
    <div class="navigation-container">
      <img class="pokeball" src="@/assets/pokeball.png" alt="Pokeball" />
      <span class="logo">Pokédex</span>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: #ef5350;
  color: #fff;
  /* justify-content: center; */
}

.navigation-container {
  padding: 10px;
  /* margin-left: -20px; */
  display: flex;
  align-items: center;
  justify-content: space-between; /* Add this line */
  max-width: 1200px;
  margin: auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  flex-grow: 1; /* Add this line */
}

.pokeball {
  width: 30px;
  cursor: pointer;
}
</style>
