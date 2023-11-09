<template>
  <div id="app" class="full-page">
    <ReadingBookList :books="bookData"></ReadingBookList>
  </div>
</template>

<script>
import ReadingBookList from "./components/ReadingBookList.vue";

export default {
  components: {
    ReadingBookList,
  },
  data() {
    return {
      bookData: [
        {
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          genres: ["Fantasy", "Adventure"],
          rating: 4.5,
          published: 1937,
          image: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
        },
        {
          title: "The Girl with the Dragon Tattoo",
          author: "Stieg Larsson",
          genres: ["Mystery", "Thriller"],
          rating: 4.0,
          published: 2005,
          image: "https://upload.wikimedia.org/wikipedia/en/8/80/The_Girl_with_the_Dragon_Tattoo_Poster.jpg",
        },
        {
          title: "Dune",
          author: "Frank Herbert",
          genres: ["Science Fiction"],
          rating: 4.7,
          published: 1965,
          image: "https://images.booksense.com/images/719/172/9780441172719.jpg",
        },
        {
          title: "Pride and Prejudice",
          author: "Jane Austen",
          genres: ["Romance"],
          rating: 4.2,
          published: 1813,
          image: "https://devontrevarrowflaherty.files.wordpress.com/2023/02/pride-and-prejudice.jpg",
        },
        // Add other book data here
      ],
    };
  },
};
</script>

<style>
/* Add your CSS styling here */
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
</style>
