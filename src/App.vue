<template>
  <div id="app">
    <NavBar />
    <main>
      <LoadingAnimation v-show="this.$store.state.isLoading" />
      <HomeView v-show="!this.$store.state.isLoading" />
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import HomeView from "@/views/HomeView";
import LoadingAnimation from "@/components/LoadingAnimation.vue";

export default {
  components: {
    NavBar,
    HomeView,
    LoadingAnimation,
  },
};
</script>
<style>
body {
  background-color: #f7f7f7;
  margin: 0;
  font-family: "Flexo-Medium", arial, sans-serif;
}

#app {
  text-align: center;
  color: #2c3e50;
}

p,
li,
h1,
h2,
h3 {
  color: white !important;
}

strong {
  color: #2c3e50;
}

main {
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  min-height: 100vh;
}
</style>
