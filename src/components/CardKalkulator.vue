<template>
  <div class="bg-white border border-gray-200 rounded-lg shadow p-4 mx-2 sm:mx-20 md:mx-32 lg:mx-0">
    <!-- Tab Menu -->
    <div class="flex mb-4 justify-around">
      <button
        @click="activeTab = 'aritmatika'"
        :class="{
          'bg-secondary': activeTab === 'aritmatika',
          'bg-gray-300': activeTab !== 'aritmatika'
        }"
        class="text-white text-sm font-medium py-2 px-4 mr-2 rounded"
      >
        Kalkulator<br />Deret Aritmatika
      </button>
      <button
        @click="activeTab = 'geometri'"
        :class="{
          'bg-secondary': activeTab === 'geometri',
          'bg-gray-300': activeTab !== 'geometri'
        }"
        class="text-white text-sm font-medium py-2 px-4 rounded"
      >
        Kalkulator<br />Deret Geometri
      </button>
    </div>

    <!-- Content -->
    <div v-if="activeTab === 'aritmatika'">
      <KalkulatorDeretAritmetika />
    </div>
    <div v-if="activeTab === 'geometri'">
      <KalkulatorDeretGeometri />
    </div>
  </div>
</template>

<script>
import KalkulatorDeretAritmetika from './kalkulator/KalkulatorDeretAritmetika.vue'
import KalkulatorDeretGeometri from './kalkulator/KalkulatorDeretGeometri.vue'

export default {
  components: {
    KalkulatorDeretAritmetika,
    KalkulatorDeretGeometri
  },
  data() {
    return {
      activeTab: 'aritmatika' // Default active tab
    }
  }
}
</script>

<style></style>
