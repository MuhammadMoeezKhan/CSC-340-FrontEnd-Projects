<template>
  <div class="home-container">
    <h1>Welcome to the Riddle Quiz!</h1>
    <p class="description">
      Embark on a journey of wit and wisdom. Test your knowledge with our fun and challenging riddles.
    </p>
    <div class="cta-container">
      <router-link to="/riddle" class="start-quiz-button">Start Quiz</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.description {
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #666;
}

.cta-container {
  margin-top: 20px;
}

.start-quiz-button {
  background-color: #4caf50;
  color: white;
  padding: 15px 30px;
  font-size: 1.2em;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.start-quiz-button:hover {
  background-color: #45a049;
}
</style>