<template>
  <div>
    <h1>Riddle Quiz Results</h1>

    <div v-if="userResults.length > 0">
      <table>
        <tr>
          <th>Attempt #</th>
          <th>Score</th>
        </tr>
        <tr v-for="(result, index) in userResults" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ result }} / {{ totalQuestions }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p>No Result History</p>
    </div>

    <button @click="backToQuiz">
      {{ userResults.length > 0 ? 'Take Quiz Again' : 'Take Quiz!' }}
    </button>
  </div>
</template>

<script>
import { useRiddleStore } from '../stores/riddleStore';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'RiddleResultsView',
  computed: {
    ...mapState(useRiddleStore, ['userResults']),
    totalQuestions() {
      return Object.keys(this.userResults[0].userResponse).length; // Adjust this based on your questions
    },
  },
  methods: {
    ...mapActions(useRiddleStore, ['submitRiddleForm']),
    backToQuiz() {
      this.$router.push('/riddle');
    },
  },
};
</script>

<style scoped>
  /* Add your component-specific styles here */
</style>