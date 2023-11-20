<template>
  <div class="home-container">
    <h1 class="welcome-text">Welcome to Your Movie List!</h1>
    <router-link to="/about">
      <button class="nav-button">Go to About</button>
    </router-link>
    <router-link to="/movies">
      <button class="nav-button">Go to Movies</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 50px;
}

.welcome-text {
  font-size: 2em;
  color: #3498db; 
  margin-bottom: 20px;
}

.nav-button {
  background-color: #2ecc71; 
  color: #fff; 
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #27ae60;
}
</style>
