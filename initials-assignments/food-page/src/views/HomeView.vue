<!-- HomeView.vue -->
<template>
  <div class="home-container">
    <h1>Home Page</h1>
    <p>Welcome To Your Pit-Stop For Cooking Lessons!</p>
    <button @click="goToRecipes" class="action-button">See List of Recipes</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToRecipes() {
      this.$router.push("/recipes");
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.home-container {
  display: block;
  max-width: 100vw;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.action-button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: #45a049;
}
</style>