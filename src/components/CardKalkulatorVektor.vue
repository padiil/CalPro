<template>
  <div class="bg-white border border-gray-200 rounded-lg shadow p-4 mx-2 sm:mx-20 md:mx-32 lg:mx-0">
    <!-- Tab Menu -->
    <div class="flex mb-4 justify-around">
      <button
        @click="activeTab = 'dot-product'"
        :class="{
          'bg-secondary': activeTab === 'dot-product',
          'bg-gray-300': activeTab !== 'dot-product'
        }"
        class="text-white text-sm font-medium py-2 px-4 mr-2 rounded"
      >
        Kalkulator<br />Dot Product
      </button>
      <button
        @click="activeTab = 'cross-product'"
        :class="{
          'bg-secondary': activeTab === 'cross-product',
          'bg-gray-300': activeTab !== 'cross-product'
        }"
        class="text-white text-sm font-medium py-2 px-4 rounded"
      >
        Kalkulator<br />Cross Product
      </button>
    </div>

    <!-- Content -->
    <div v-if="activeTab === 'dot-product'">
      <KalkulatorVektorDotSection />
    </div>
    <div v-if="activeTab === 'cross-product'">
      <KalkulatorVektorCrossSection />
    </div>
  </div>
</template>

<script>
import KalkulatorVektorCrossSection from './kalkulator/KalkulatorVektorCrossSection.vue';
import KalkulatorVektorDotSection from './kalkulator/KalkulatorVektorDotSection.vue';

export default {
  components: {
    KalkulatorVektorDotSection,
    KalkulatorVektorCrossSection
  },
  data() {
    return {
      activeTab: 'dot-product' // Default active tab
    }
  }
}
</script>

<style></style>
