<template>
  <nav>
    <div class="navigation-container">
      <img class="pokeball" src="@/assets/pokeball.png" alt="Pokeball" />
      <img class="logo" src="@/assets/Pokemon.png" alt="Pokemon" />
      <div></div>
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
  width: 110px;
}

.pokeball {
  width: 30px;
  cursor: pointer;
}
</style>
