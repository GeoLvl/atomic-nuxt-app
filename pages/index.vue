<template>
  <div>
    <nav-header />
    <home-banner />
    <div class="absolute text-center m-auto w-full">
      <h2 class="font-bold text-4xl text-gray-700 mt-16 md:mt-24 mb-12 px-10">
        Partez à la découverte du monde <br />
        louer le van idéal pour votre aventure<br/> 
        avec Yespapa !
      </h2>
      <!-- <button-primary text="Je découvre" link="/vans" /> -->
      <base-button to="/vans" class="box-border bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 px-9 rounded-full text-xl font-bold hover:scale-105 transition transform duration-200 ease-out h-14 w-48 m-1 m-auto">Je découvre</base-button>
    </div>
  </div>
</template>

<script>
import HomeBanner from '../components/Atoms/HomeBanner.vue'
import BaseButton from '../components/Atoms/BaseButton.vue'

export default {
  name: 'IndexPage',
  components: {  HomeBanner, BaseButton },
}
</script>
