<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
    <div class="text-2xl font-bold mb-4">Kalkulator Cross Product Vektor</div>

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

    <!-- Output Cross Product dan Langkah-langkah -->
    <div>
      <div class="text-lg font-semibold mb-2">Hasil Cross Product:</div>
      <div>{{ crossProduct }}</div>

      <div class="mt-4 text-lg font-semibold">Langkah-langkah:</div>
      <ul class="list-disc list-inside">
        <li>{{ crossProductSteps }}</li>
      </ul>
    </div>
  </div>
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
    crossProduct() {
      const crossX = this.vectorA.y * this.vectorB.z - this.vectorA.z * this.vectorB.y
      const crossY = this.vectorA.z * this.vectorB.x - this.vectorA.x * this.vectorB.z
      const crossZ = this.vectorA.x * this.vectorB.y - this.vectorA.y * this.vectorB.x
      return `(${crossX}, ${crossY}, ${crossZ})`
    },
    crossProductSteps() {
      return `
        Cross Product X = (${this.vectorA.y} * ${this.vectorB.z}) - (${this.vectorA.z} * ${this.vectorB.y})
                        = ${this.vectorA.y * this.vectorB.z} - ${this.vectorA.z * this.vectorB.y}
                        = ${this.vectorA.y * this.vectorB.z - this.vectorA.z * this.vectorB.y}

        Cross Product Y = (${this.vectorA.z} * ${this.vectorB.x}) - (${this.vectorA.x} * ${this.vectorB.z})
                        = ${this.vectorA.z * this.vectorB.x} - ${this.vectorA.x * this.vectorB.z}
                        = ${this.vectorA.z * this.vectorB.x - this.vectorA.x * this.vectorB.z}

        Cross Product Z = (${this.vectorA.x} * ${this.vectorB.y}) - (${this.vectorA.y} * ${this.vectorB.x})
                        = ${this.vectorA.x * this.vectorB.y} - ${this.vectorA.y * this.vectorB.x}
                        = ${this.vectorA.x * this.vectorB.y - this.vectorA.y * this.vectorB.x}
      `
    }
  }
}
</script>

<style>
/* Styling menggunakan Tailwind CSS */
</style>
