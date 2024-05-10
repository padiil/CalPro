<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <a href="#" class="text-white font-bold text-lg">Logo</a>
      </div>
      <div class="hidden md:block">
        <ul class="flex space-x-4">
          <router-link to="/" class="text-white">Beranda</router-link>
          <router-link to="/about" class="text-white">Tentang</router-link>
          <li class="relative" @click="toggleDropdown">
            <a href="#" class="text-white cursor-pointer">Materi</a>
            <ul v-show="dropdownOpen" class="absolute left-0 mt-2 bg-gray-700 rounded-md shadow-lg">
              <li><a href="#" class="block px-4 py-2 text-white">Deret</a></li>
              <li><a href="#" class="block px-4 py-2 text-white">Determinan</a></li>
              <li><a href="#" class="block px-4 py-2 text-white">Vector</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-show="mobileMenuOpen" class="md:hidden bg-gray-700">
      <ul class="p-4">
        <router-link to="/" class="block px-4 py-2 text-white">Beranda</router-link>
        <router-link to="/about" class="block px-4 py-2 text-white">Tentang</router-link>
        <li class="relative" @click="toggleMobileDropdown">
          <a href="#" class="block px-4 py-2 text-white">Materi</a>
          <ul
            v-show="mobileDropdownOpen"
            class="absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg"
          >
            <router-link to="/deret" class="block px-4 py-2 text-white">Deret</router-link>
            <router-link to="/determinan" class="block px-4 py-2 text-white"
              >Determinan</router-link
            >
            <router-link to="/vektor" class="block px-4 py-2 text-white">Vektor</router-link>
          </ul>
        </li>
      </ul>
    </div>
  </nav>

  <router-link to="/about">About</router-link>
  <router-link to="/">Home</router-link>
  <router-link to="/deret">Deret</router-link>
  <router-link to="/determinan">Determinan</router-link>
  <router-link to="/vektor">Vektor</router-link>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
      mobileMenuOpen: false,
      mobileDropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    toggleMobileDropdown() {
      this.mobileDropdownOpen = !this.mobileDropdownOpen
    }
  }
}
</script>

<style>
/* Style Tailwind CSS classes */
</style>
