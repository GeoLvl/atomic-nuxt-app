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
      <button-primary text="Je découvre" link="/vans" />
    </div>
  </div>
</template>

<script>
import NavHeader from '../components/Organisms/NavHeader.vue'
import HomeBanner from '../components/Atoms/HomeBanner.vue'
import ButtonPrimary from '../components/Atoms/ButtonPrimary.vue'

export default {
  name: 'IndexPage',
  components: { NavHeader, HomeBanner, ButtonPrimary },
}
</script>
