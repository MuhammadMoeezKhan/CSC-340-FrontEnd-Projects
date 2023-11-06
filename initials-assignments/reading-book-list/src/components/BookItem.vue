<template>
    <div class="book-item">
      <img :src="bookCoverImage" alt="Book Cover" class="book-cover" />
      <div class="book-details">
        <h2 class="book-title">{{ title }}</h2>
        <p class="book-author">Author: {{ author }}</p>
        <div class="genres">
          <strong>Genres:</strong>
          <ul>
            <li v-for="genre in genres" :key="genre" class="genre">{{ genre }}</li>
          </ul>
        </div>
        <p class="book-rating">Rating: {{ rating }}</p>
      </div>
  
      <!-- Slots -->
      <slot name="additional-info"></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      bookCoverImage: String,
      title: String,
      author: String,
      genres: Array,
      rating: Number,
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS styling here to make the component unique */
  .book-item {
    display: grid;
    grid-template-columns: 1fr;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 8px;
    width: 150px;
    text-align: center;
    text-align: center;
  }
  
  .book-cover {
    max-width: 140px;
    height: auto;
    margin: 0 auto;
  }
  
  .book-details {
    display: grid;
    grid-template-rows: repeat(10, auto);
    align-content: start;
  }
  
  .book-title {
    font-size: 20px;
    margin: 10px 0;
    font-weight: 700;
  }
  
  .book-author {
    font-size: 16px;
  }
  
  .genres {
    margin-top: 10px;
  }
  
  .genre {
    margin-bottom: 5px;
  }
  
  .book-rating {
    font-weight: bold;
  }
  </style>  