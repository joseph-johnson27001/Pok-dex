<template>
  <nav>
    <div class="navigation-container">
      <div class="main-container">
        <img class="pokeball" src="@/assets/pokeball.png" alt="Pokeball" />
        <div class="logo-container">
          <img class="logo" src="@/assets/Pokemon.png" alt="Pokemon" />
        </div>
      </div>
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
  max-width: 1200px;
  margin: auto;
}

.main-container {
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
</style>
