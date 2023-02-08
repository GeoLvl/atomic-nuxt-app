<template>
  <div>
  <nav-bar/>
  <home-banner/>
  <button-primary text="Je découvre"/>
  <!-- <van-card/> -->
  </div>  
</template>

<script>
import ButtonPrimary from '../components/Atoms/ButtonPrimary.vue'
import NavBar from '../components/Molecules/NavBar.vue'
// import VanCard from '../components/Molecules/VanCard.vue'
import HomeBanner from '../components/Atoms/HomeBanner.vue'

export default {
  name: 'IndexPage',
  components: { ButtonPrimary, NavBar, HomeBanner },
}
</script>
