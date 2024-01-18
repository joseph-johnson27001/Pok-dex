<template>
  <div class="detailed-pokemon-overlay">
    <div class="overlay-content">
      <!-- Display detailed information about the selected Pokemon -->
      <h2>{{ pokemon.name }}</h2>
      <p>Height: {{ pokemon.height }}</p>
      <p>Weight: {{ pokemon.weight }}</p>
      <!-- Add more details as needed -->
      <button @click="closeOverlay">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeOverlay() {
      // Emit an event to notify the parent to close the overlay
      this.$emit("closeOverlay");
    },
  },
};
</script>

<style scoped>
/* Add necessary styles for the overlay */
.detailed-pokemon-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>
