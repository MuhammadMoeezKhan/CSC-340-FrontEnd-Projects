<!-- App.vue -->
<template>
  <div id="app">
    <div class="nav-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/movies" class="nav-link">Movies</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4; /* Light gray background */
  font-family: 'Arial', sans-serif;
  color: #333; /* Dark text color */
}

.nav-links {
  display: flex;
  margin-bottom: 20px;
}

.nav-link {
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  color: #fff; /* White text color */
  background-color: #3498db; /* Blue background color */
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #2980b9; /* Darker blue on hover */
}
</style>