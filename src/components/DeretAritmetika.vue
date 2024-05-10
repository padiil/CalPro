<template lang="">
  <main>
    <!-- Materi Aritmetik-->
    <div class="materi-aritmetika space-y-4 mx-auto mb-10 max-w-sm">
      <div class="text-xl font-medium text-black">1. Barisan dan Deret Aritmetika</div>
      <p>
        Barisan aritmatika merupakan barisan bilangan yang memiliki beda atau selisih tetap antara
        dua suku yang berurutan.
      </p>
      <p>
        Selisih dari dua suku yang dimiliki antara dua suku dalam barisan aritmatika akan
        dilambangkan dengan "b". Cara untuk mengetahui beda atau selisihnya, terdapat rumus yang
        dapat digunakan. Berikut rumus beda barisan aritmatika.
      </p>
      <div class="rumus-b-aritmetika font-medium text-black mx-auto my-10">
        <div class="text-2xl text-center">
          <p>b = U<sub>n</sub> - U<sub>n-1</sub></p>
        </div>
        <div class="text-base">
          <p>Keterangan :</p>
          <p>U<sub>n</sub> = Suku ke-n</p>
          <p>a = Suku pertama</p>
          <p>b = Beda/selisih</p>
          <p>n = Banyaknya suku</p>
        </div>
      </div>
      <p>
        Sedangkan untuk mencari suku ke-n dalam barisan aritmatika, berikut rumus yang dapat
        digunakan.
      </p>
      <div class="rumus-un-aritmetika text-2xl font-medium text-black text-center my-10">
        <p>U<sub>n</sub> = a + (n - 1) b</p>
      </div>
      <p>
        Deret merupakan hasil penjumlahan pada barisan aritmetika. Namun, deret tidak selalu
        menjumlahkan keseluruhan suku dalam suatu barisan. Rumus deret hanya menjumlahkan barisan
        aritmetikanya hanya sampai suku yang diperintahkan saja.
      </p>
      <div class="rumus-sn-aritmetika">
        <div class="">
          <img
            src="../assets/foto_rumus/rumus-sn-aritmetika.png"
            alt="rumus-sn-aritmetika"
            style="width: 250px"
          />
        </div>
        <img
          src="../assets/foto_rumus/ket-rumus-sn-aritmetika.png"
          alt="ket-rumus-sn-aritmetika"
          style="width: 220px"
        />
      </div>
    </div>

    <!-- Materi Geometri -->
    <div class="materi-aritmetika space-y-4 mx-auto mb-10 max-w-sm">
      <div class="text-xl font-medium text-black">2. Barisan dan Deret Geometri</div>
      <p>
        Deret geometri terbentuk dari barisan bilangan yang suku-suku berikutnya diperoleh dari
        hasil kali atau bagi suku sebelumya.
      </p>
      <p>
        Pada deret geometri, perbandingan yang dimiliki setiap suku berikutnya dapat disebut sebagai
        rasio dan memiliki lambang r. Untuk menghitung rasio tersebut, berikut rumus yang dapat
        diterapkan.
      </p>
      <div class="rumus-r-geometri font-medium text-black">
        <img
          src="../assets/foto_rumus/rumus-r-geometri.jpg"
          alt="rumus-r-geometri"
          style="width: 120px"
        />
        <div class="text-base">
          <p>Keterangan :</p>
          <p>r = Rasio</p>
          <p>U<sub>n</sub> = Suku ke-n</p>
        </div>
      </div>
      <p>
        Kemudian, untuk mengetahui nilai pada suku ke-n pada deret geometri dapat menggunakan rumus
        berikut ini.
      </p>
      <div class="rumus-un-geometri font-medium text-black my-10">
        <div class="text-2xl text-center">
          <p>U<sub>n</sub> = ar<sup> n-1</sup></p>
        </div>
        <div class="text-base">
          <p>Keterangan :</p>
          <p>r = Rasio</p>
          <p>U<sub>n</sub> = Suku ke-n</p>
        </div>
      </div>
    </div>

    <!-- Kalkulator Deret -->
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
