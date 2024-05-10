<template>
  <!-- Materi Vektor -->
  <div class="materi-vektor mx-auto mb-10 max-w-sm">
    <div class="text-xl font-medium text-black text-center">Perkalian Vektor</div>
    <div class="space-y-4">
      <h2 class="text-xl font-medium text-black">1. Dot Product</h2>
      <p>
        Perkalian dot atau titik disebut juga perkalian skalar (scalar product). Hal itu dikarenakan
        perkalian tersebut akan menghasilkan skalar meskipun kedua pengalinya merupakan vektor.
      </p>
      <p>
        Perkalian skalar dari dua vektor A dan B dinyatakan dengan A•B, karena notasi ini maka
        perkalian tersebut dinamakan juga sebagai perkalian titik (dot product).
      </p>
      <p>
        Dalam bentuk komponen vektor, bila A = [a1, a1, a3] dan B = [b1, b2, b3], maka A&#x25CF;B =
        (a1.b1) + (a2.b2) + (a3&#x25CF;b3)
      </p>
    </div>
    <div>
      <h2 class="text-xl font-medium text-black">2. Matriks Ordo 3 x 3</h2>
      <img src="../assets/foto_rumus/matriks-ordo-3x3.png" alt="matriks-ordo-3x3" />
      <img src="../assets/foto_rumus/determinan-ordo-3x3.png" alt="determinan-ordo-3x3" />
    </div>
  </div>

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
