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
    userResponse: {
      riddle1: { options: { red: false, blue: false, green: false, yellow: false } },
      riddle2: '', // Radio button response
      riddle3: '', // Dropdown option response
      riddle4: '', // Fill in the box response
    },
    userResults: [],
  }),
  getters: {
    getAnswers(state) {
      return state.answers;
    },
    getUserResponse(state) {
      return state.userResponse;
    },
    getUserResults(state) {
      return state.userResults;
    },
  },
  actions: {
    submitRiddleForm(userAnswers) {
      this.userResponse = userAnswers;
      this.calculateScore.call(this); // Ensure 'this' refers to the store instance
    },
    calculateScore() {
      console.log('userResponse:', this.userResponse);
    
      let score = 0;
    
      // Assuming that the structure of userResponse matches the answers structure
      for (const riddleKey in this.userResponse) {
        if (this.userResponse.hasOwnProperty(riddleKey)) {
          console.log('riddleKey:', riddleKey);
          
          const userAnswer = this.userResponse[riddleKey];
          const correctAnswer = this.answers[riddleKey];
    
          console.log('userAnswer:', userAnswer);
          console.log('correctAnswer:', correctAnswer);
    
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
      this.userResults.push(score);
      console.log('userResults:', this.userResults);
    },
  },
});
