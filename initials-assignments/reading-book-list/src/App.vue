<template>
  <div id="app" class="full-page">
    <ReadingBookList>
      <BookItem
        book-cover-image="https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg"
        title="The Hobbit"
        author="J.R.R. Tolkien"
        :genres="['Fantasy', 'Adventure']"
        rating="4.5"
      >
        <template v-slot:additional-info>
          <p>Published: 1937</p>
        </template>
      </BookItem>
      <BookItem
        book-cover-image="https://upload.wikimedia.org/wikipedia/en/8/80/The_Girl_with_the_Dragon_Tattoo_Poster.jpg"
        title="The Girl with the Dragon Tattoo"
        author="Stieg Larsson"
        :genres="['Mystery', 'Thriller']"
        rating="4.0"
      >
        <template v-slot:additional-info>
          <p>Published: 2005</p>
        </template>
      </BookItem>
      <BookItem
        book-cover-image="https://images.booksense.com/images/719/172/9780441172719.jpg"
        title="Dune"
        author="Frank Herbert"
        :genres="['Science Fiction']"
        rating="4.7"
      >
        <template v-slot:additional-info>
          <p>Published: 1965</p>
        </template>
      </BookItem>
      <BookItem
        book-cover-image="https://devontrevarrowflaherty.files.wordpress.com/2023/02/pride-and-prejudice.jpg"
        title="Pride and Prejudice"
        author="Jane Austen"
        :genres="['Romance']"
        rating="4.2"
      >
        <template v-slot:additional-info>
          <p>Published: 1813</p>
        </template>
      </BookItem>
    </ReadingBookList>
  </div>
</template>

<script>
import ReadingBookList from './components/ReadingBookList.vue';
import BookItem from './components/BookItem.vue';

export default {
  components: {
    ReadingBookList,
    BookItem,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  align-items: center;
}

.full-page {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.reading-book-list {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 100%;
}

.book-item {
  margin: 100px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  min-width: 200%;
}

.genres {
  margin-top: 100px;
}

.book-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

h1 {
  font-size: 120px;
  font-weight: 600;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
}
</style>