<template lang="">
  <div>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div class="text-xl font-medium text-black">Deret Geometri</div>
        <p class="text-gray-500">Masukkan nilai awal, rasio, dan nomor ke-n.</p>
        <div class="mt-4">
          <input
            v-model="firstNumber"
            type="number"
            placeholder="Nilai awal"
            class="p-2 border rounded"
          />
        </div>
        <div class="mt-4">
          <input v-model="ratio" type="number" placeholder="Rasio" class="p-2 border rounded" />
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstNumber: null,
      ratio: null,
      n: null,
      sequence: [],
      nthValue: null,
      sum: null
    }
  },
  watch: {
    firstNumber: 'calculate',
    ratio: 'calculate',
    n: 'calculate'
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
        currentNumber *= this.ratio
      }

      this.sum = this.sequence.reduce((a, b) => a + b, 0)
    }
  }
}
</script>
<style lang=""></style>
