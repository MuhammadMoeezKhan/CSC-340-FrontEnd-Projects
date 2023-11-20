<template>
    <div class="riddle-form">
      <h2>Riddle Form</h2>
      <form @submit.prevent="submitForm">
        <div v-for="(answer, riddle) in answers" :key="riddle" class="riddle-item">
          <p class="question">{{ answers[riddle].question }}</p>
          <template v-if="answer.type === 'multipleChoice'">
            <label v-for="(option, index) in answer.options" :key="index" class="checkbox-label">
              <input
                type="checkbox"
                :value="option"
                v-model="response[riddle]"
                @change="updateCheckbox(riddle, option)"
              />
              {{ option }}
            </label>
          </template>
          <template v-else-if="answer.type === 'radioButton'">
            <label v-for="(option, index) in answer.options" :key="index" class="radio-label">
              <input
                type="radio"
                :value="option"
                v-model="response[riddle]"
              />
              {{ option }}
            </label>
          </template>
          <template v-else-if="answer.type === 'dropDown'">
            <select v-model="response[riddle]" class="dropdown">
              <option v-for="(option, index) in answer.options" :key="index">
                {{ option }}
              </option>
            </select>
          </template>
          <template v-else-if="answer.type === 'typedAnswer'">
            <input type="text" v-model="response[riddle]" class="typed-input" />
          </template>
        </div>
        <button type="submit" class="submit-button">Submit</button>
        <button type="button" @click="resetQuiz" class="reset-button">Reset Quiz</button>
      </form>
      <div v-if="graded" class="result">
        <p>Your Score: {{ score }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        answers: {
          riddle1: {
            question: "What has ears but cannot hear?",
            type: 'multipleChoice',
            options: ['A cat', 'A dog', 'A fish'],
            correct: ['A cat'],
          },
          riddle2: {
            question: "What flower is often associated with love?",
            type: 'radioButton',
            options: ['Sunflower', 'Rose', 'Tulip'],
            correct: 'Rose',
          },
          riddle3: {
            question: "Which fruit is commonly red and grows on trees?",
            type: 'dropDown',
            options: ['Banana', 'Apple', 'Orange'],
            correct: 'Apple',
          },
          riddle4: {
            question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
            type: 'typedAnswer',
            correct: 'Candle',
          },
        },
        response: {},
        score: 0,
        graded: false,
      };
    },
    created() {
      this.score = 0;
      this.graded = false;
    },
    methods: {
      submitForm() {
        this.score = 0;
        for (const riddle in this.answers) {
          const userResponse = this.response[riddle];
          const correctAnswer = this.answers[riddle].correct;
  
          if (this.answers[riddle].type === 'multipleChoice') {
            // Check if the response array includes the correct option
            if (userResponse && userResponse.length === 1 && userResponse[0] === correctAnswer[0]) {
              this.score += 1;
            }
          } else {
            if (userResponse === correctAnswer) {
              this.score += 1;
            }
          }
        }
        this.graded = true;
      },
      resetQuiz() {
        this.graded = false;
        this.score = 0;
        this.response = {};
      },
      updateCheckbox(riddle, option) {
        // Ensure only one checkbox is selected for multiple-choice questions
        if (this.answers[riddle].type === 'multipleChoice' && this.response[riddle].length > 1) {
          this.response[riddle] = [option];
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .riddle-form {
    font-family: 'Arial', sans-serif;
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .riddle-item {
    margin-bottom: 20px;
  }
  
  .question {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }
  
  .checkbox-label, .radio-label {
    display: block;
    margin-bottom: 8px;
  }
  
  .checkbox-label input {
    margin-right: 5px; /* Adjust the spacing between the checkbox and label */
  }
  
  .dropdown {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .typed-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .submit-button, .reset-button {
    background-color: #3498db;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  .submit-button:hover, .reset-button:hover {
    background-color: #2980b9;
  }
  
  .result {
    margin-top: 20px;
    font-weight: bold;
    color: #333;
  }
  </style>
  