<!-- src/App.vue -->
<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  background-color: #f7f7f7; /* Slightly off-white background */
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  text-align: center;
  color: #2c3e50;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
