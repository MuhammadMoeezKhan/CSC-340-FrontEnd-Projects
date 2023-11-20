<template>
  <div class="movie-item">
    <div class="title">
      <slot name="movieTitle"></slot>
    </div>
    <div class="info">
      <slot name="movieInfo"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItemComponent',
};
</script>

<style scoped>
.movie-item {
  background-color: #3498db;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

.movie-item:hover {
  transform: scale(1.05);
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #ecf0f1;
  margin-bottom: 10px;
}

.info {
  font-size: 16px;
  color: #ecf0f1;
}

.info p {
  margin: 5px 0;
}
</style>