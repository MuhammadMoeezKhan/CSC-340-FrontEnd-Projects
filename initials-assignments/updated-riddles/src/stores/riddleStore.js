// riddleStore.js
import { defineStore } from 'pinia';

export const useRiddleStore = defineStore({
  id: 'riddle',
  state: () => ({
    answers: {
      riddle1: { options: { red: true, blue: true, green: true } },
      riddle2: 'paris',
      riddle3: 'mars',
      riddle4: 'fox',
    },
    userResponse: {},
    userResults: [],
  }),
  getters: {
    getAnswers: (state) => state.answers,
    getUserResponse: (state) => state.userResponse,
    getUserResults: (state) => state.userResults,
  },
  actions: {
    submitRiddleForm(userAnswers) {
      // Use pinia to access the store state
      const pinia = this.$pinia;
      pinia.state.userResponse = userAnswers;
      this.calculateScore();
    },
    calculateScore() {
      let score = 0;
      const pinia = this.$pinia;

      for (const riddleKey in pinia.state.userResponse) {
        if (pinia.state.userResponse.hasOwnProperty(riddleKey)) {
          const userAnswer = pinia.state.userResponse[riddleKey];
          const correctAnswer = pinia.state.answers[riddleKey];

          if (typeof userAnswer === 'object') {
            // Checkbox type
            const userOptions = Object.keys(userAnswer.options);
            const correctOptions = Object.keys(correctAnswer.options);
            const isCorrect = userOptions.sort().toString() === correctOptions.sort().toString();
            if (isCorrect) {
              score++;
            }
          } else {
            // Other types (radio, dropdown, text)
            if (userAnswer === correctAnswer) {
              score++;
            }
          }
        }
      }

      // Add the score to the userResults array
      pinia.state.userResults.push(score);
    },
  },
});