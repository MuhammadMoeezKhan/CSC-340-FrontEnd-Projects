<!-- CookingNotesPage.vue -->
<template>
  <div class="cooking-notes-container">
    <h1>Cooking Notes</h1>
    <ul class="cooking-notes-list">
      <li>Cooking can enhance the nutritional value of some foods.</li>
      <li>Garlic was used by ancient civilizations for its medicinal properties.</li>
      <li>Herbs and spices not only add flavor but can have health benefits.</li>
      <li>It's a myth that searing meat seals in its juices; focus on proper cooking temperatures.</li>
    </ul>
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
.cooking-notes-container {
  max-width: 100vw;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.cooking-notes-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

.cooking-notes-list li {
  font-size: 1.2rem;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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