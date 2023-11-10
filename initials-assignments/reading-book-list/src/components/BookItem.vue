<template>
  <div class="book-item">
    <img :src="bookCoverImage" alt="Book Cover" class="book-cover" />
    <h2 class="book-title">{{ title }}</h2>
    <p class="book-author">Author: {{ author }}</p>
    <div class="genres">
      <strong>Genres:</strong>
      <ul>
        <li v-for="genre in genres" :key="genre" class="genre">{{ genre }}</li>
      </ul>
    </div>
    <p class="book-rating">Rating: {{ rating }}</p>

    <button @click="selectBook">Select</button>

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
  methods: {
    selectBook() {
      this.$emit("select-book", this.title);
    },
  },
};
</script>

<style scoped>
/* Add your CSS styling here to make the component unique */
.book-item {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
}

.book-cover {
  max-width: 100vw;
  height: auto;
}

.book-title {
  font-size: 20px;
  margin: 10px 0;
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
