<template>
  <!-- kalkulator determinan ordo 3 -->
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
        <input
          v-model="matrix[0][2]"
          type="number"
          class="p-2 border rounded w-16 text-center"
          placeholder="c"
        />
      </div>
      <div class="flex flex-col">
        <div class="invisible">Placeholder</div>
        <input
          v-model="matrix[1][0]"
          type="number"
          class="p-2 border rounded w-16 text-center"
          placeholder="d"
        />
        <input
          v-model="matrix[1][1]"
          type="number"
          class="p-2 border rounded w-16 text-center"
          placeholder="e"
        />
        <input
          v-model="matrix[1][2]"
          type="number"
          class="p-2 border rounded w-16 text-center"
          placeholder="f"
        />
      </div>
      <div class="flex flex-col">
        <div class="invisible">Placeholder</div>
        <input
          v-model="matrix[2][0]"
          type="number"
          class="p-2 border rounded w-16 text-center"
          placeholder="g"
        />
        <input
          v-model="matrix[2][1]"
          type="number"
          class="p-2 border rounded w-16 text-center"
          placeholder="h"
        />
        <input
          v-model="matrix[2][2]"
          type="number"
          class="p-2 border rounded w-16 text-center"
          placeholder="i"
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
        [null, null, null],
        [null, null, null],
        [null, null, null]
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
      const [[a, b, c], [d, e, f], [g, h, i]] = this.matrix
      const determinant = a * e * i + b * f * g + c * d * h - c * e * g - b * d * i - a * f * h

      this.showDeterminant = true
      this.determinant = determinant
      this.steps = [
        `Determinan = aei + bfg + cdh - ceg - bdi - afh`,
        `Determinan = (${a} * ${e} * ${i}) + (${b} * ${f} * ${g}) + (${c} * ${d} * ${h}) - (${c} * ${e} * ${g}) - (${b} * ${d} * ${i}) - (${a} * ${f} * ${h})`,
        `Determinan = ${a * e * i} + ${b * f * g} + ${c * d * h} - ${c * e * g} - ${b * d * i} - ${a * f * h}`,
        `Determinan = ${determinant}`
      ]
    }
  }
}
</script>

<style>
/* Styling menggunakan Tailwind CSS */
</style>
