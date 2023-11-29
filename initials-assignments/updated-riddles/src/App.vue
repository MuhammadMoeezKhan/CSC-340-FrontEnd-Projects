<template>
  <div id="app">
    <header>
      <nav class="nav-links">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/riddle">Riddle Quiz</router-link>
        <router-link class="nav-link" to="/results">Quiz Results</router-link>
      </nav>
    </header>

    <router-view></router-view>
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
  margin-bottom: 40px; /* Reduced margin for better spacing */
}

.nav-link {
  margin: 0 10px; /* Adjusted margin for better spacing */
  padding: 10px 20px; /* Reduced padding for a cleaner look */
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