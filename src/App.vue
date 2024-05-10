<script setup>
import { RouterView } from 'vue-router'
import NavbarSection from './components/NavbarSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="bg-white">
    <NavbarSection />

    <div class="mt-20">
      <router-view></router-view>
    </div>

    <FooterSection />
  </div>
</template>

<style scoped></style>
