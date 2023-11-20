<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header>
      <div class="wrapper">
        <nav>
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/cooking-notes" class="nav-link">Cooking Notes</router-link>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
.app {
  margin-top:60px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}

header {
  color: black;
  text-align: center;
  align-items: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000; 
}

.wrapper {
  text-align: center;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  text-align: center;
  align-items: center;
  display: flex;
  align-items: center;
}

.nav-link {
  text-align: center;
  margin-bottom:50px;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-left: 1px solid black;
  transition: background-color 0.3s;
}

.nav-link:first-child {
  border: none;
}

.nav-link:hover {
  background-color: #555;
}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  .nav-link {
    font-size: 1rem;
  }
}
</style>