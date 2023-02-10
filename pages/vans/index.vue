<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div>
      <nav-header/>
        <h1>LIST OF VANS</h1> 
        <section class="grid grid-cols-2 md:grid-cols-3 px-5 md:px-14 lg:px-16 xl:px-28">
          <aside class="col-span-2 md:col-span-1">
            <h2>filtre</h2>
          </aside>          
          <div class="col-span-2">
            <h2>Van</h2>        
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              <van-card v-for="result in results" :key="result.id" :van="result"/> 
            </div>
          </div>
        </section>        
    </div>      
</template>

<script>
import NavHeader from '../../components/Organisms/NavHeader.vue'
import VanCard from '../../components/Molecules/VanCard.vue'

export default {
  name: 'VansPage',
  components: { 
    NavHeader, 
    VanCard 
  },
  
  async asyncData({ $axios }) {
    const vans = await $axios.$get('/data.json')
    
    return vans
  },

  data() {
    return {
      van : [],
    }
  }
}

</script>
