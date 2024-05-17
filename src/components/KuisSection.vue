<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
      <h1 v-if="!quizStarted" class="text-3xl font-bold mb-6 text-primary">Mulai Kuis!</h1>
      <div v-if="!quizStarted" class="text-center">
        <button @click="startQuiz" class="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">Mulai</button>
      </div>
      <div v-else>
        <h1 class="text-3xl font-bold mb-6 text-primary">{{ quiz.title }}</h1>
        <div v-if="currentQuestion !== null && !showResults">
          <h3 class="text-xl font-semibold mb-4">Soal {{ currentQuestionIndex + 1 }} / {{ quiz.questions.length }}</h3>
          <h3 class="text-xl font-semibold mb-4">{{ currentQuestion.question }}</h3>
          <ul>
            <li v-for="(option, key) in currentQuestion.options" :key="key" class="mb-2">
              <label class="flex items-center space-x-2">
                <span>{{ key }})</span>
                <input type="radio" :name="'question_' + currentQuestionIndex" :value="key" v-model="selectedAnswers[currentQuestionIndex]" :disabled="showResults" class="mr-2">
                <span>{{ option }}</span>
              </label>
            </li>
          </ul>
          <div class="flex justify-between mt-4">
            <button @click="previousQuestion" :disabled="currentQuestionIndex === 0" class="bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary-dark transition duration-300">Sebelumnya</button>
            <button @click="nextOrSubmit" class="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">{{ submitButtonText }}</button>
          </div>
        </div>
        <div v-else>
          <h2 class="text-2xl font-bold mb-4 text-primary">Kuis Selesai!</h2>
        </div>
        <div v-if="showResults" class="mt-6">
          <h2 class="text-2xl font-bold mb-4 text-primary">Hasil:</h2>
          <p class="text-primary mb-2">Jawaban Benar: {{ correctAnswersCount }}</p>
          <p class="text-primary mb-2">Jawaban Salah: {{ incorrectAnswersCount }}</p>
          <ul class="mt-4">
            <li v-for="(question, index) in quiz.questions" :key="index" class="mb-4">
              <p class="font-semibold">Soal {{ index + 1 }}: {{ question.question }}</p>
              <p>Jawaban Anda: {{ selectedAnswers[index] }}, Jawaban Benar: {{ question.answer }}</p>
              <p class="text-secondary">Penjelasan: {{ question.explanation }}</p>
            </li>
          </ul>
        </div>
        <div v-if="quizStarted" class="mt-6">
          <p v-if="!showResults" class="text-primary mb-4">Waktu Tersisa: {{ formatTime(timeRemaining) }}</p>
          <h2 class="text-xl font-semibold mt-4 mb-2">Daftar Soal:</h2>
          <div class="flex flex-wrap">
            <button v-for="(question, index) in quiz.questions" :key="index" @click="jumpToQuestion(index)"
                    :class="['py-1 px-3 m-1 rounded-full', questionButtonClass(index)]">
              {{ index + 1 }}
            </button>
          </div>
        </div>
        <div v-if="showResults" class="mt-6">
          <div class="flex justify-between mt-4">
            <button @click="restartQuiz" class="bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary-dark transition duration-300">Ulangi</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import quizData from "./materi/DataKuis.json";

export default {
  data() {
    return {
      quiz: quizData.quiz,
      currentQuestionIndex: 0,
      selectedAnswers: [],
      showResults: false,
      correctAnswersCount: 0,
      incorrectAnswersCount: 0,
      timer: null,
      timeLimitInSeconds: 300, // 5 menit
      quizStarted: false,
      timeRemaining: 0
    };
  },
  computed: {
    currentQuestion() {
      return this.quiz.questions[this.currentQuestionIndex];
    },
    submitButtonText() {
      return this.currentQuestionIndex === this.quiz.questions.length - 1 ? 'Submit' : 'Lanjut';
    }
  },
  methods: {
    startQuiz() {
      this.quizStarted = true;
      this.startTimer();
    },
    restartQuiz() {
      this.quizStarted = false;
      this.currentQuestionIndex = 0;
      this.selectedAnswers = [];
      this.showResults = false;
      this.correctAnswersCount = 0;
      this.incorrectAnswersCount = 0;
      clearInterval(this.timer);
    },
    startTimer() {
      this.timeRemaining = this.timeLimitInSeconds;
      this.timer = setInterval(() => {
        this.timeRemaining--;
        if (this.timeRemaining <= 0) {
          this.submitQuiz();
        }
      }, 1000);
    },
    formatTime(timeInSeconds) {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
    nextOrSubmit() {
      if (this.currentQuestionIndex < this.quiz.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.submitQuiz();
      }
    },
    previousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
    jumpToQuestion(index) {
      this.currentQuestionIndex = index;
    },
    questionButtonClass(index) {
      if (this.showResults) {
        return this.selectedAnswers[index] === this.quiz.questions[index].answer ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
      } else {
        return this.selectedAnswers[index] ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white';
      }
    },
    submitQuiz() {
      clearInterval(this.timer);
      this.showResults = true;
      this.correctAnswersCount = 0;
      this.incorrectAnswersCount = 0; 
      this.quiz.questions.forEach((question, index) => {
        if (this.selectedAnswers[index] === question.answer) {
          this.correctAnswersCount++;
        } else {
          this.incorrectAnswersCount++;
        }
      });
    }
  }
};
</script>

<style>
.bg-primary-dark {
  background-color: #1565c0; /* Warna lebih gelap dari warna primer */
}
.bg-secondary-dark {
  background-color: #757575; /* Warna lebih gelap dari warna sekunder */
}
</style>
