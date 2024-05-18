<template lang="">
  <div>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl border flex items-center space-x-4">
      <div>
        <div class="text-xl font-medium text-black">Deret Geometri</div>
        <p class="text-gray-500">Masukkan suku pertama, rasio, dan suku ke-n.</p>
        <div class="mt-4 flex justify-between items-center">
          <label for="Nilai_awal">Suku pertama : </label>
          <input
            v-model="firstNumber"
            type="number"
            id="Nilai_awal"
            class="p-2 border rounded w-[55%]"
          />
        </div>
        <div class="mt-4 flex justify-between items-center">
          <label for="Rasio">Rasio : </label>
          <input v-model="ratio" type="number" id="Rasio" class="p-2 border rounded w-[55%]" />
        </div>
        <div class="mt-4 flex justify-between items-center">
          <label for="Nomor_ke-n">Suku ke-n : </label>
          <input v-model="n" type="number" id="suku ke-n" class="p-2 border rounded w-[55%]" />
        </div>
        <div class="mt-4">
          <p>Deret: {{ sequence }}</p>
          <p>Nilai suku ke-n: {{ nthValue }}</p>
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
