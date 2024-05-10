<script setup>
import { RouterView } from 'vue-router'
import NavbarSection from './components/NavbarSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <NavbarSection />

  <div class="mt-20">
    <router-view></router-view>
  </div>

  <FooterSection />
</template>

<style scoped></style>
