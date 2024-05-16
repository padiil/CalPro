<template lang="">
  <div>
    <!-- Materi Aritmetik-->
    <div class="materi-aritmetika space-y-4 mx-auto mb-10 max-w-sm">
      <div class="text-xl font-medium text-black">Barisan dan Deret Aritmetika</div>
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
          <p>b = Beda/selisih</p>
          <p>U<sub>n</sub> = Suku ke-n</p>
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
        <div class="flex justify-center items-center mb-5">
          <img
            src="/src/assets/foto_rumus/rumus-sn-aritmetika.png"
            alt="rumus-sn-aritmetika"
            style="width: 250px"
          />
        </div>
        <img
          src="/src/assets/foto_rumus/ket-rumus-sn-aritmetika.png"
          alt="ket-rumus-sn-aritmetika"
          style="width: 220px"
        />
      </div>
    </div>

    <!-- Materi Geometri -->
    <div class="materi-geometri space-y-4 mx-auto mb-10 max-w-sm">
      <div class="text-xl font-medium text-black">Barisan dan Deret Geometri</div>
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
        <div class="flex justify-center items-center">
          <img
            src="/src/assets/foto_rumus/rumus-r-geometri.jpg"
            alt="rumus-r-geometri"
            style="width: 120px"
          />
        </div>
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
          <p>a = Suku pertama</p>
          <p>U<sub>n</sub> = Suku ke-n</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
