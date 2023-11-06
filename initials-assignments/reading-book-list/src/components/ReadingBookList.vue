<template>
    <div class="reading-book-list">
      <h1 class="list-title">Reading List</h1>
      <div class="book-list">
        <div class="card-row">
          <slot></slot> <!-- Rendering BookItem components here -->
        </div>
      </div>
      <p class="book-count">Total Number of Books: 4</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        books: [],
      };
    },
  };
  </script>
  
  <style scoped>
  .reading-book-list {
    background-color: #f0f0f0;
    border-radius: 60px;
    margin-top: 20px;
    width: 80vw; 
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .list-title {
    font-size: 42px;
    margin-bottom: 25px;
    text-align: center;
    font-weight: 600;
  }
  
  .book-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    justify-content: center;
    margin-left: 750px; /* Add margin to separate the grid from the edges */
  }
  
  .card-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; /* Display fours cards in one row */
    grid-gap: 200px;
    justify-content: center;
  }
  
  .book-count {
    font-size: 35px;
    margin-top: 40px;
    text-align: center;
  }
  </style>  