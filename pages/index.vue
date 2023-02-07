<template>

<div>
<nav-bar/>
<img class="bg-cover max-h-96 max-w-full" src="../static/bg-van.jpeg" alt="Van life"/>
<button-primary text="Je découvre"/>
<van-card/>

  

</div>
  
</template>

<script>
import ButtonPrimary from '../components/Atoms/ButtonPrimary.vue'
import NavBar from '../components/Molecules/NavBar.vue'
import VanCard from '../components/Molecules/VanCard.vue'

export default {
  name: 'IndexPage',
  components: { ButtonPrimary, NavBar, VanCard },
}
</script>
