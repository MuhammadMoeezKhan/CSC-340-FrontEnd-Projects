<!-- AboutView.vue -->
<template>
  <div class="about-container">
    <h1>About Page</h1>
    <div class="about-details">
      <p><strong>Name:</strong> Moeez Khan</p>
      <p><strong>Favorite Food:</strong> Spicy & Creamy Foods</p>
      <p><strong>Favorite Thing to Cook:</strong> Pastas!</p>
      <p><strong>Created:</strong> {{ createdVar }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createdVar: false,
    };
  },
  created() {
    this.createdVar = true;
  },
};
</script>

<style scoped>
.about-container {
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

.about-details {
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.about-details p {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.about-details strong {
  font-weight: bold;
  margin-right: 10px;
}

.about-details p:last-child {
  margin-bottom: 0;
}

.created-message {
  font-size: 1rem;
  color: #888;
  margin-top: 10px;
}
</style>