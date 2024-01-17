<template>
  <div id="app">
    <NavBar />
    <main>
      <HomeView />
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import HomeView from "@/views/HomeView";

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
  font-family: "Roboto", sans-serif; /* Update the font family here */
}

#app {
  text-align: center;
  color: #2c3e50;
}

main {
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
}
</style>
