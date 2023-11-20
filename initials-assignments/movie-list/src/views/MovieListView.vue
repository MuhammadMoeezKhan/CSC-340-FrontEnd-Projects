<template>
  <div class="movie-list-view">
    <h2>Movies</h2>

    <div class="movie-items">
      <MovieItemComponent v-for="movie in sortedMovieList" :key="movie.name">
        <template v-slot:movieTitle>
          <h3>{{ movie.name }}</h3>
        </template>
        <template v-slot:movieInfo>
          <p>{{ movie.rating }} | {{ movie.category }}</p>
        </template>
      </MovieItemComponent>
    </div>

    <div class="total-movies">
      <h4>Total Number of Movies: {{ movies.length }}</h4>
    </div>

    <div class="movie-list-by-duration">
      <h2>Movie List by Duration (shortest to longest)</h2>
      <div class="movie-cards">
        <movie-card
          v-for="movie in sortedMovieList"
          :key="movie.name"
          :movie="movie"
          :duration="formatDuration(movie.duration_hour, movie.duration_minutes)"
        ></movie-card>
      </div>
    </div>

    <form class="add-movie-form" @submit.prevent="addNewMovie">
      <label for="movieName">Movie Name:</label>
      <input type="text" id="movieName" v-model="newMovie.name" required>

      <label for="movieRating">Movie Rating:</label>
      <select id="movieRating" v-model="newMovie.rating" required>
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
      </select>

      <label for="durationHour">Duration (hours):</label>
      <input type="number" id="durationHour" v-model="newMovie.duration_hour" required>

      <label for="durationMinutes">Duration (minutes):</label>
      <input type="number" id="durationMinutes" v-model="newMovie.duration_minutes" required>

      <label for="movieCategory">Movie Category(s):</label>
      <textarea id="movieCategory" v-model="newMovie.category" required></textarea>

      <h5 v-if="formIncomplete" class="missing-info">Missing Information!</h5>

      <button :disabled="formIncomplete" class="add-movie-btn">Add New Movie</button>
    </form>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  data() {
    return {
      movies: [
        { name: 'Interstellar', rating: 'PG-13', duration_hour: 2, duration_minutes: 18, category: 'Thrill' },
        { name: 'Inception', rating: 'PG-13', duration_hour: 2, duration_minutes: 42, category: 'Mystery' },
        { name: 'Avatar', rating: 'PG-13', duration_hour: 2, duration_minutes: 22, category: 'Action' },
      ],
      newMovie: {
        name: '',
        rating: '',
        duration_hour: null,
        duration_minutes: null,
        category: '',
      },
      formIncomplete: true,
    };
  },
  components: {
    MovieCard,
  },
  computed: {
    sortedMovieList() {
      return this.movies
        .slice()
        .sort((a, b) => {
          const durationA = a.duration_hour * 60 + a.duration_minutes;
          const durationB = b.duration_hour * 60 + b.duration_minutes;
          return durationA - durationB;
        });
    },
  },
  watch: {
    newMovie: {
      handler(val) {
        this.formIncomplete =
          !val.name || !val.duration_hour || !val.duration_minutes;
      },
      deep: true,
    },
  },
  methods: {
    addNewMovie() {
      this.movies.push({ ...this.newMovie });
      this.newMovie = {
        name: '',
        rating: '',
        duration_hour: null,
        duration_minutes: null,
        category: '',
      };
    },
    formatDuration(hour, minute) {
      return `${hour} hr ${minute} min`;
    },
  },
};
</script>

<style scoped>
.movie-list-view {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom:10px;
}

.movie-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.total-movies h4 {
  color: #555;
}

.movie-list-by-duration {
  margin-top: 20px;
}

.movie-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.add-movie-form {
  margin-top: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #666;
}

input,
select,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

h5.missing-info {
  color: #ff0000;
  margin-top: 10px;
}

button.add-movie-btn {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>