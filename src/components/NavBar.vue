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
}

.navigation-container {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: 100;
  color: #fff;
  flex-grow: 1;
}

.pokeball {
  width: 30px;
  cursor: pointer;
}
</style>
