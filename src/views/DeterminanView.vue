<template lang="">
  <div class="lg:flex lg:justify-between lg:mx-16 my-24">
    <MateriDeterminan class="lg:flex lg:flex-col lg:w-[50%] mx-2" />
    <CardKalkulatorDet
      class="lg:flex lg:flex-col lg:h-[100%] lg:mt-40 lg:sticky lg:top-16 2xl:mr-80"
    />
  </div>
</template>
<script setup>
import MateriDeterminan from '@/components/materi/MateriDeterminan.vue'
import CardKalkulatorDet from '@/components/CardKalkulatorDet.vue'
</script>
<style lang=""></style>
