<template>
  <nav
    class="bg-primary p-4 fixed top-0 left-0 right-0 z-10 lg:px-16 2xl:px-24 flex justify-center flex-col"
  >
    <div class="flex justify-between items-center">
      <div>
        <a href="#" class="text-white font-bold text-xl font-Righteous">CalPro</a>
      </div>
      <div class="hidden md:block font-medium">
        <ul class="flex space-x-4">
          <router-link to="/" class="text-white hover:text-secondary">Beranda</router-link>
          <router-link to="/about" class="text-white hover:text-secondary">Tentang</router-link>
          <li class="relative" @click="toggleDropdown">
            <a href="#" class="text-white cursor-pointer hover:text-secondary">Materi</a>
            <ul
              v-show="dropdownOpen"
              class="absolute right-0 mt-2 bg-secondary rounded-md shadow-xl"
            >
              <router-link to="/deret" class="block px-4 py-2 text-white hover:text-primary"
                >Deret</router-link
              >
              <router-link to="/determinan" class="block px-4 py-2 text-white hover:text-primary"
                >Determinan</router-link
              >
              <router-link to="/vektor" class="block px-4 py-2 text-white hover:text-primary"
                >Vektor</router-link
              >
            </ul>
          </li>
        </ul>
      </div>
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <svg
            v-if="!mobileMenuOpen"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Move v-show to the parent div to ensure correct toggle behavior -->
    <div class="md:hidden" v-show="mobileMenuOpen">
      <ul class="flex flex-col">
        <router-link to="/" class="block py-2 text-white border-b-2 hover:text-secondary"
          >Beranda</router-link
        >
        <router-link to="/about" class="block py-2 text-white border-b-2 hover:text-secondary"
          >Tentang</router-link
        >
        <li class="relative" @click="toggleMobileDropdown">
          <a href="#" class="block py-2 text-white border-b-2 hover:text-secondary">Materi</a>
          <ul
            v-show="mobileDropdownOpen"
            class="absolute right-0 mt-2 bg-secondary rounded-md shadow-lg"
          >
            <router-link to="/deret" class="block px-4 py-2 text-white hover:text-primary"
              >Deret</router-link
            >
            <router-link to="/determinan" class="block px-4 py-2 text-white hover:text-primary"
              >Determinan</router-link
            >
            <router-link to="/vektor" class="block px-4 py-2 text-white hover:text-primary"
              >Vektor</router-link
            >
          </ul>
        </li>
      </ul>
    </div>
  </nav>
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
/* Add Tailwind CSS classes for styling */
</style>
