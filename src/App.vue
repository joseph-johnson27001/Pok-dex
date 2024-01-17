<!-- src/App.vue -->
<template>
  <div id="app">
    <NavBar />
    <main>
      <HomeView />
      <!-- Use the Home component directly -->
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import HomeView from "@/views/HomeView"; // Import the Home component

export default {
  components: {
    NavBar,
    HomeView,
  },
};
</script>

<style>
body {
  background-color: #f7f7f7;
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
