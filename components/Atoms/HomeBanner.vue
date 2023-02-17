<template>
    <div class="relative">
      <img src="../../static/bg-van.jpeg" alt="Van life" class="object-cover w-full h-[300px] md:h-[600px]">
      <div class="flex flex-col items-center p-10">
        <h2 class="font-bold text-4xl text-gray-700 text-center mb-10">
        Partez à la découverte du monde <br />
        louer le van idéal pour votre aventure<br/> 
        avec Yespapa !
      </h2>
      <!-- <button-primary text="Je découvre" link="/vans" /> -->
      <base-button to="/vans" class="box-border bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 px-9 rounded-full text-xl font-bold hover:scale-105 transition transform duration-200 ease-out w-42">Je découvre</base-button>
      </div>
    </div>    
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'HomeBanner',
  components: { BaseButton },

}
</script>