<template>
  <!-- Kalkulator Vektor -->
  <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
    <div class="text-2xl font-bold mb-4">Kalkulator Dot Product Vektor</div>

    <!-- Input Vektor A -->
    <div class="mb-4">
      <label for="vectorA" class="text-lg font-semibold">Vektor A:</label>
      <div class="flex items-center mt-2 space-x-2">
        <input
          v-model="vectorA.x"
          type="number"
          placeholder="x"
          class="p-2 border rounded w-16 text-center"
        />
        <input
          v-model="vectorA.y"
          type="number"
          placeholder="y"
          class="p-2 border rounded w-16 text-center"
        />
        <input
          v-model="vectorA.z"
          type="number"
          placeholder="z"
          class="p-2 border rounded w-16 text-center"
        />
      </div>
    </div>

    <!-- Input Vektor B -->
    <div class="mb-4">
      <label for="vectorB" class="text-lg font-semibold">Vektor B:</label>
      <div class="flex items-center mt-2 space-x-2">
        <input
          v-model="vectorB.x"
          type="number"
          placeholder="x"
          class="p-2 border rounded w-16 text-center"
        />
        <input
          v-model="vectorB.y"
          type="number"
          placeholder="y"
          class="p-2 border rounded w-16 text-center"
        />
        <input
          v-model="vectorB.z"
          type="number"
          placeholder="z"
          class="p-2 border rounded w-16 text-center"
        />
      </div>
    </div>

    <!-- Output Dot Product dan Langkah-langkah -->
    <div>
      <div class="text-lg font-semibold mb-2">Hasil Dot Product:</div>
      <div>{{ dotProduct }}</div>

      <div class="mt-4 text-lg font-semibold">Langkah-langkah:</div>
      <ul class="list-disc list-inside">
        <li>{{ dotProductSteps }}</li>
      </ul>
    </div>
  </div>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      vectorA: { x: 0, y: 0, z: 0 },
      vectorB: { x: 0, y: 0, z: 0 }
    }
  },
  computed: {
    dotProduct() {
      return (
        this.vectorA.x * this.vectorB.x +
        this.vectorA.y * this.vectorB.y +
        this.vectorA.z * this.vectorB.z
      )
    },
    dotProductSteps() {
      return `Dot Product = (${this.vectorA.x} * ${this.vectorB.x}) + (${this.vectorA.y} * ${this.vectorB.y}) + (${this.vectorA.z} * ${this.vectorB.z})`
    }
  }
}
</script>

<style>
/* Styling menggunakan Tailwind CSS */
</style>
