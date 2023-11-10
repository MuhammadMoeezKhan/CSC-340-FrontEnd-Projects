<!-- RecipeComponent.vue -->
<template>
    <div class="recipe-container">
      <h2 class="recipe-title">{{ name }}</h2>
      <div class="recipe-details">
        <div class="recipe-detail">
          <p><strong>Prep Time:</strong> {{ prep }}</p>
        </div>
        <div class="recipe-detail">
          <p><strong>Cook Time:</strong> {{ cook }}</p>
        </div>
        <div class="recipe-detail">
          <p><strong>Total Time:</strong> {{ total }}</p>
        </div>
        <div class="recipe-detail">
          <p><strong>Servings:</strong> {{ servings }}</p>
        </div>
      </div>
      <img :src="imgPath" alt="Recipe Image" class="recipe-image" />
    
      <div class="recipe-section">
        <h3 class="recipe-section-title">Ingredients</h3>
        <ul class="recipe-list">
          <slot name="ingredients"></slot>
        </ul>
      </div>
    
      <div class="recipe-section">
        <h3 class="recipe-section-title">Directions</h3>
        <ol class="recipe-list">
          <slot name="directions"></slot>
        </ol>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      prep: String,
      cook: String,
      total: String,
      servings: String,
      imgPath: String,
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  .recipe-container {
    max-width: 100vw;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .recipe-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .recipe-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  
  .recipe-detail {
    flex: 1;
  }
  
  .recipe-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;
    border-radius: 8px;
  }
  
  .recipe-section {
    margin-bottom: 20px;
  }
  
  .recipe-section-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .recipe-list {
    list-style-type: none;
    padding: 0;
  }
  
  .recipe-list li {
    margin-bottom: 5px;
  }
  </style>  