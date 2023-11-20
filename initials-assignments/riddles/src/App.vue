<template>
  <div id="app">
    <h1 class="app-title">Moeez's Riddle Quiz</h1>
    <RiddleForm />
  </div>
</template>

<script>
import RiddleForm from "@/components/RiddleForm.vue";

export default {
  components: {
    RiddleForm,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65vh;
  background-color: #f2f2f2;
}

.app-title {
  font-family: 'Arial', sans-serif;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}
</style>
