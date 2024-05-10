<template>
  <!-- Materi Determinan -->
  <div class="materi-determinan mx-auto mb-10 max-w-sm">
    <div class="text-xl font-medium text-black text-center">Determinan</div>
    <p>
      Determinan ini merupakan besaran skalar atau besaran yang hanya memiliki besar/nilai. Unsur
      matriks yang dimaksud adalah unsur matriks persegi. Apa itu matriks persegi? Matriks persegi
      adalah matriks yang memiliki jumlah baris dan kolom yang sama.
    </p>
    <div class="mt-5">
      <h2 class="text-xl font-medium text-black">1. Matriks Ordo 2 x 2</h2>
      <img src="../assets/foto_rumus/matriks-ordo-2x2.png" alt="matriks-ordo-2x2" />
      <img src="../assets/foto_rumus/determinan-ordo-2x2.png" alt="determinan-ordo-2x2" />
    </div>
    <div class="mt-5">
      <h2 class="text-xl font-medium text-black">2. Matriks Ordo 3 x 3</h2>
      <img src="../assets/foto_rumus/matriks-ordo-3x3.png" alt="matriks-ordo-3x3" />
      <img src="../assets/foto_rumus/determinan-ordo-3x3.png" alt="determinan-ordo-3x3" />
    </div>
  </div>

  <!-- Kalkulator Determinan -->
  <div class="flex flex-col items-center justify-center mt-10">
    <!-- Input Matrix -->
    <div class="flex items-center justify-center space-x-4 mb-6">
      <div class="flex flex-col">
        <div class="text-lg font-medium mb-2">Masukkan Matriks</div>
        <input
          v-model="matrix[0][0]"
          type="number"
          class="p-2 border rounded w-16 text-center"
          placeholder="a"
        />
        <input
          v-model="matrix[0][1]"
          type="number"
          class="p-2 border rounded w-16 text-center"
          placeholder="b"
        />
      </div>
      <div class="flex flex-col">
        <div class="invisible">Placeholder</div>
        <input
          v-model="matrix[1][0]"
          type="number"
          class="p-2 border rounded w-16 text-center"
          placeholder="c"
        />
        <input
          v-model="matrix[1][1]"
          type="number"
          class="p-2 border rounded w-16 text-center"
          placeholder="d"
        />
      </div>
    </div>

    <!-- Output Determinan -->
    <div v-if="showDeterminant" class="text-lg font-medium mb-2">Determinan: {{ determinant }}</div>

    <!-- Langkah-langkah -->
    <div v-if="showDeterminant" class="text-sm">
      <div>Langkah-langkah:</div>
      <div v-for="(step, index) in steps" :key="index" class="mt-1">{{ step }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      matrix: [
        [null, null],
        [null, null]
      ],
      showDeterminant: false,
      determinant: null,
      steps: []
    }
  },
  watch: {
    matrix: {
      deep: true,
      handler() {
        this.calculateDeterminant()
      }
    }
  },
  methods: {
    calculateDeterminant() {
      const [[a, b], [c, d]] = this.matrix
      const determinant = a * d - b * c

      this.showDeterminant = true
      this.determinant = determinant
      this.steps = [
        `Determinan = ad - bc`,
        `Determinan = (${a} * ${d}) - (${b} * ${c})`,
        `Determinan = ${a * d} - ${b * c}`,
        `Determinan = ${determinant}`
      ]
    }
  }
}
</script>

<style>
/* Styling menggunakan Tailwind CSS */
</style>
