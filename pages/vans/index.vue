<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div>
      <nav-header/>
        <section class="grid grid-cols-2 md:grid-cols-3 px-5 md:px-14 lg:px-16 xl:px-18">
          <aside class="col-span-2 md:col-span-1 mt-10">
            <h2 class="text-gray-700 text-3xl font-bold mb-5">Filtrer par</h2>
          </aside>          
          <main class="col-span-2 mt-10">
            <h2 class="text-gray-700 text-3xl font-bold mb-5">Vans disponibles</h2>        
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              <NuxtLink v-for="van in vans" :key="van.id" :to="`/vans/${van.id}`">
                <van-card :van="van"/>
              </NuxtLink>
            </div>
          </main>
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
    const { results: vans } = await $axios.$get('/data.json')  
    
    return {
      vans
    }
  }
}

</script>