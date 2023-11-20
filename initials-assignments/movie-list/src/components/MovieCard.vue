<template>
  <div class="movie-card">
    <h3 class="title">{{ movie.name }}</h3>
    <p class="rating">Rating: {{ movie.rating }}</p>
    <p class="category">Category: {{ movie.category }}</p>
    <p class="duration">Duration: {{ duration }}</p>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
    duration: String, 
  },
};
</script>

<style scoped>
.movie-card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  text-align: center;
  max-width: 300px; 
  margin: 0 auto; 
}

.movie-card:hover {
  transform: scale(1.05);
}

.title {
  margin-bottom: 8px;
  color: #000; 
  font-size: 18px;
}

.rating, .category, .duration {
  color: #000; 
  font-size: 14px; 
  margin: 4px 0; 
}
</style>