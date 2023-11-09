<template>
  <div class="reading-book-list">
    <h1 class="list-title">Reading List</h1>
    <div class="book-list">
      <div class="card-row">
        <BookItem
          v-for="(book, index) in books"
          :key="index"
          :title="book.title"
          :author="book.author"
          :genres="book.genres"
          :rating="book.rating"
          :book-cover-image="book.image"
          @select-book="showSelectedBook(book.title)"
        >
          <template v-slot:additional-info>
            <p>Published: {{ book.published }}</p>
          </template>
        </BookItem>
      </div>
    </div>
     <p class="book-count">Total Number of Books: {{ books.length }}</p>
  </div>
</template>

<script>
import BookItem from "./BookItem.vue";

export default {
  components: {
    BookItem,
  },
  props: {
    books: Array, // Defining the prop to accept an array of books
  },
  methods: {
    showSelectedBook(title) {
      alert(`Selected Book: ${title}`);
    },
  },
};
</script>

<style scoped>
/* Add your CSS styling here to make the component unique */
.reading-book-list {
  background-color: #f0f0f0;
  border-radius: 60px;
  margin-left: 145px;
  margin-top: 20px;
  width: 40vw; /* Cover entire page width */
  height: 90vh; /* Cover entire page height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list-title {
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
  justify-content: center;
  margin-left:361px;
}

.card-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
}

.book-count {
  font-size: 34px;
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
}
</style>