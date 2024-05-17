<template>
  <div class="bg-white border border-gray-200 rounded-lg shadow p-4 mx-2 sm:mx-20 md:mx-32 lg:mx-0">
    <!-- Tab Menu -->
    <div class="flex mb-4 justify-around">
      <button
        @click="activeTab = 'determinan2'"
        :class="{
          'bg-secondary': activeTab === 'determinan2',
          'bg-gray-300': activeTab !== 'determinan2'
        }"
        class="text-white text-sm font-medium py-2 px-4 mr-2 rounded"
      >
        Kalkulator<br />Matriks Ordo 2x2
      </button>
      <button
        @click="activeTab = 'determinan3'"
        :class="{
          'bg-secondary': activeTab === 'determinan3',
          'bg-gray-300': activeTab !== 'determinan3'
        }"
        class="text-white text-sm font-medium py-2 px-4 rounded"
      >
        Kalkulator<br />Matriks Ordo 3x3
      </button>
    </div>

    <!-- Content -->
    <div v-if="activeTab === 'determinan2'">
      <KalkulatorDeterminan2Section />
    </div>
    <div v-if="activeTab === 'determinan3'">
      <KalkulatorDeterminan3Section />
    </div>
  </div>
</template>

<script>
import KalkulatorDeterminan2Section from './kalkulator/KalkulatorDeterminan2Section.vue'
import KalkulatorDeterminan3Section from './kalkulator/KalkulatorDeterminan3Section.vue'

export default {
  components: {
    KalkulatorDeterminan2Section,
    KalkulatorDeterminan3Section
  },
  data() {
    return {
      activeTab: 'determinan2' // Default active tab
    }
  }
}
</script>

<style></style>
