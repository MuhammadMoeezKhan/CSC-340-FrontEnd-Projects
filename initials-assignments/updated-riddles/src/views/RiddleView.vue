<template>
  <div class="riddle-form">
    <h2>Riddle Quiz</h2>

    <!-- Riddle 1 - Checkbox Riddle -->
    <div class="riddle-question">
      <h3>Riddle 1</h3>
      <p>What are Einstein's favorite colors?</p>
      <div class="checkbox-options">
        <label v-for="(checked, option) in response.riddle1.options" :key="option">
          <input type="checkbox" v-model="response.riddle1.options[option]" />
          {{ option.charAt(0).toUpperCase() + option.slice(1) }}
        </label>
      </div>
      <!-- Store correct answers -->
      <input type="hidden" v-model="correctAnswers.riddle1" value="red,blue,green" />
    </div>

    <!-- Riddle 2 - Radio Button Riddle -->
    <div class="riddle-question">
      <h3>Riddle 2</h3>
      <p>What is the capital of France?</p>
      <div class="radio-options">
        <label v-for="option in ['Paris', 'London', 'Berlin']" :key="option">
          <input type="radio" :value="option.toLowerCase()" v-model="response.riddle2" />
          {{ option }}
        </label>
      </div>
      <!-- Store correct answer -->
      <input type="hidden" v-model="correctAnswers.riddle2" value="paris" />
    </div>

    <!-- Riddle 3 - Dropdown Option Riddle -->
    <div class="riddle-question">
      <h3>Riddle 3</h3>
      <p>Which planet is known as the Red Planet?</p>
      <div class="dropdown-options">
        <select v-model="response.riddle3">
          <option value="earth">Earth</option>
          <option value="mars">Mars</option>
          <option value="venus">Venus</option>
        </select>
      </div>
      <!-- Store correct answer -->
      <input type="hidden" v-model="correctAnswers.riddle3" value="mars" />
    </div>

    <!-- Riddle 4 - Fill in the Box Riddle -->
    <div class="riddle-question">
      <h3>Riddle 4</h3>
      <p>Complete the sentence: The quick brown ___ jumps over the lazy dog.</p>
      <div class="fill-in-box">
        <input type="text" v-model="response.riddle4" placeholder="Your answer here" />
      </div>
      <!-- Store correct answer -->
      <input type="hidden" v-model="correctAnswers.riddle4" value="fox" />
    </div>

    <p v-if="!validateForm" class="error-message">Please fill out all answers</p>
    <button @click="submitForm" :disabled="!validateForm" class="submit-button">Submit</button>
  </div>
</template>

<script>
import { useRiddleStore } from '../stores/riddleStore';
import { mapActions } from 'pinia';

export default {
  name: 'RiddleView',
  data() {
    return {
      response: {
        riddle1: {
          options: {
            red: false,
            blue: false,
            green: false,
            yellow: false,
          },
        },
        riddle2: '',    // Radio button response
        riddle3: '',    // Dropdown option response
        riddle4: '',    // Fill in the box response
      },
      correctAnswers: {
        riddle1: '', // Correct answer for Checkbox Riddle
        riddle2: '', // Correct answer for Radio Button Riddle
        riddle3: '', // Correct answer for Dropdown Option Riddle
        riddle4: '', // Correct answer for Fill in the Box Riddle
      },
    };
  },
  computed: {
    ...mapActions(useRiddleStore, ['submitRiddleForm']),
    validateForm() {
      // Check if any of the responses is empty
      return Object.values(this.response).every((value) => {
        if (typeof value === 'object') {
          return Object.values(value).some((subValue) => subValue);
        }
        return value !== '';
      });
    },
  },
  methods: {
    submitForm() {
      this.submitRiddleForm(this.response);
      this.$router.push('/results');
    },
  },
};
</script>

<style scoped>
.riddle-form {
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
}

.riddle-question {
  margin-bottom: 20px;
}

.checkbox-options,
.radio-options,
.dropdown-options,
.fill-in-box {
  margin-top: 10px;
}

.checkbox-options label,
.radio-options label,
.dropdown-options select {
  display: block;
  margin-bottom: 8px;
}

.fill-in-box input {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.submit-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.submit-button:hover:not(:disabled) {
  background-color: #45a049;
}
</style>