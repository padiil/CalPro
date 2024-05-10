<template lang="">
  <main>
    <!-- Kalkulator Deret Aritmetika -->
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div class="text-xl font-medium text-black">Deret Aritmetika</div>
        <p class="text-gray-500">Masukkan nilai awal, perbedaan, dan nomor ke-n.</p>

        <div class="mt-4">
          <input
            v-model="firstNumber"
            type="number"
            placeholder="Nilai awal"
            class="p-2 border rounded"
          />
        </div>
        <div class="mt-4">
          <input
            v-model="difference"
            type="number"
            placeholder="Perbedaan"
            class="p-2 border rounded"
          />
        </div>
        <div class="mt-4">
          <input v-model="n" type="number" placeholder="Nomor ke-n" class="p-2 border rounded" />
        </div>
        <div class="mt-4">
          <p>Deret: {{ sequence }}</p>
          <p>Nilai ke-n: {{ nthValue }}</p>
          <p>Penjumlahan deret: {{ sum }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      firstNumber: null,
      difference: null,
      n: null,
      sequence: [],
      nthValue: null,
      sum: null
    }
  },
  watch: {
    firstNumber: {
      handler() {
        this.calculate()
      },
      immediate: true
    },
    difference: {
      handler() {
        this.calculate()
      },
      immediate: true
    },
    n: {
      handler() {
        this.calculate()
      },
      immediate: true
    }
  },
  methods: {
    calculate() {
      this.sequence = []
      this.nthValue = null
      this.sum = null

      let currentNumber = this.firstNumber
      for (let i = 1; i <= this.n; i++) {
        this.sequence.push(currentNumber)
        if (i === this.n) {
          this.nthValue = currentNumber
        }
        currentNumber += this.difference
      }

      this.sum = this.sequence.reduce((a, b) => a + b, 0)
    }
  }
}
</script>
<style lang=""></style>
