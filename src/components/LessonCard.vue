<template lang="">
  <div id="lesson" class="flex flex-col 2xl:mx-24 2xl:px-24">
    <!-- bilangan kompleks & deret -->
    <div class="flex w-[100%] justify-around my-2 xl:my-5">
      <div class="text-center">
        <router-link
          to=""
          class="block max-w-sm py-6 w-40 bg-primary rounded-lg shadow cursor-not-allowed sm:w-52 xl:w-72"
        >
          <h5 class="mb-2 text-xs font-bold tracking-tight text-white xl:text-xl">
            Bilangan Kompleks
          </h5>
          <div class="flex justify-center">
            <img src="/src/assets/icon/icons8-lock-100.svg" alt="lock" class="w-6" />
          </div>
        </router-link>
      </div>
      <div class="text-center">
        <router-link
          to="/deret"
          class="block max-w-sm py-9 w-40 bg-secondary rounded-lg shadow hover:bg-orange-600 hover:shadow-lg sm:w-52 xl:w-72"
        >
          <h5 class="mb-2 text-xs font-bold tracking-tight text-white xl:text-xl">Deret</h5>
        </router-link>
      </div>
    </div>
    <!-- determinan & vektor -->
    <div class="flex w-[100%] justify-around my-2 xl:my-5">
      <div class="text-center">
        <router-link
          to="/determinan"
          class="block max-w-sm py-9 w-40 bg-secondary rounded-lg shadow hover:bg-orange-600 hover:shadow-lg sm:w-52 xl:w-72"
        >
          <h5 class="mb-2 text-xs font-bold tracking-tight text-white xl:text-xl">
            Determinan
          </h5></router-link
        >
      </div>
      <div class="text-center">
        <router-link
          to="/vektor"
          class="block max-w-sm py-9 w-40 bg-secondary rounded-lg shadow hover:bg-orange-600 hover:shadow-lg sm:w-52 xl:w-72"
        >
          <h5 class="mb-2 text-xs font-bold tracking-tight text-white xl:text-xl">
            Vektor
          </h5></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
