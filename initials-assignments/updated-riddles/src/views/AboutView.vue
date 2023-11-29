<template>
  <div class="about-container">
    <h1>About Me</h1>
    <div class="biography">
      <p>
        Welcome! I'm <strong>Moeez</strong>, the mind behind the Riddle Quiz. Embracing my love for puzzles and riddles,
        I'm thrilled to share this interactive quiz adventure with you.
      </p>
    </div>
    <h2>Favorite Riddles</h2>
    <ul class="favorite-riddles">
      <li>
        <strong>Riddle 1:</strong> What comes once in a minute, twice in a moment, but never in a thousand years?
      </li>
      <li>
        <strong>Riddle 2:</strong> I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style scoped>
.about-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.biography p {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #666;
}

.favorite-riddles {
  list-style: none;
  padding: 0;
}

.favorite-riddles li {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #444;
}

.favorite-riddles strong {
  color: #007bff;
}
</style>