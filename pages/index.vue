<template>
  <div>
    <nav-header/>
    <home-banner/>
      <div class="text-center p-10">
        <h2 class="text-3xl font-bold mb-8">Partez à la découverte du monde <br> louer le van idéal pour votre aventure avec Yespapa !</h2>
        <button-primary text="Je découvre" link="/vans"/>
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
