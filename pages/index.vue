<template>
  <div>
  <nav-bar/>
  <home-banner/>
  <div class="text-center p-10">
    <h2 class="text-3xl font-bold">Partez à la découverte du monde <br> louer le van idéal pour votre aventure avec Yespapa !</h2>
    <button-primary text="Je découvre"/>
  </div>
  <!-- <van-card/> -->
  </div>  
</template>

<script>
import ButtonPrimary from '../components/Atoms/ButtonPrimary.vue'
import NavBar from '../components/Molecules/NavBar.vue'
import HomeBanner from '../components/Atoms/HomeBanner.vue'

export default {
  name: 'IndexPage',
  components: { ButtonPrimary, NavBar, HomeBanner },
}
</script>
