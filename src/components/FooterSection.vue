<template lang="">
  <footer class="bg-primary text-white shadow mt-12 lg:px-16 2xl:px-24">
    <div class="w-full mx-auto p-4 2xl:px-0 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div
          class="font-Righteous self-center text-2xl font-semibold whitespace-nowrap flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          CalPro
        </div>

        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium100 sm:mb-0">
          <li>
            <router-link to="/about" class="hover:underline me-4 md:me-6">Tentang</router-link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/padiil/calpro"
              class="hover:underline me-4 md:me-6"
              >Github</a
            >
          </li>
          <li>
            <router-link to="" class="hover:underline">Kontak</router-link>
          </li>
        </ul>
      </div>
      <hr class="my-6 sm:mx-auto lg:my-8" />
      <div
        class="flex flex-col sm:items-center text-sm sm:text-center md:flex-row md:justify-between md:text-left"
      >
        <div>© 2024 CalPro™<br />Made with ❤️ by kelompok 1</div>
        <div class="flex items-end mt-4 sm:flex sm:flex-col sm:items-center md:text-right md:mt-0">
          <div>
            Informatika <br />
            Fakultas Teknik <br />
            Universitas Siliwangi
          </div>
          <img src="/src/assets/icon/Logo Unsil.png" alt="" class="w-8 md:ml-auto" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {}
</script>
<style lang=""></style>
