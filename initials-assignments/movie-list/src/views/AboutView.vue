<template>
  <div class="about-container">
    <h1>About Me</h1>

    <div class="intro-section">
      <div class="intro-details">
        <p><strong>Name:</strong> Muhammad Moeez Khan</p>
        <p><strong>Email:</strong> mkhan_2024@depauw.edu</p>
        <p><strong>Class Year:</strong> 2024</p>
        <p><strong>Favorite Movies:</strong> Interstellar, Inception, Avatar</p>
      </div>
    </div>

    <div class="nav-buttons">
      <router-link to="/movies">
        <button>Go to Movies</button>
      </router-link>
      <router-link to="/">
        <button>Go to Home</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style scoped>
.about-container {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #3498db;
}

.intro-section {
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.intro-details p {
  margin: 8px 0;
  font-size: 16px;
}

.nav-buttons {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2ecc71; /* Green color */
  color: #fff; /* White text */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #27ae60; /* Darker green on hover */
}
</style>