<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div>
      <nav-header/>
        <section class="grid grid-cols-2 md:grid-cols-3 px-5 md:px-14 lg:px-16 xl:px-18">
          <aside class="col-span-2 md:col-span-1 mt-10 md:mr-5">
            <filter-col @submit="submit"/>
          </aside>          
          <main class="col-span-2 mt-10">
            <h2 class="text-gray-700 text-3xl font-bold mb-5">{{ filteredVans.length }} Van(s) disponible(s)</h2>        
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              <template v-if="filteredVans.length === 0">
                <p class="text-gray-700 mb-3">Nous sommes désolé, aucun vans ne correspond à votre recherche</p>
              </template>
              <NuxtLink v-for="filteredVan in filteredVans" :key="filteredVan.id" :to="`/vans/${filteredVan.id}`">
                <van-card :van="filteredVan"/>
              </NuxtLink>
            </div>
          </main>
        </section>        
    </div>      
</template>

<script>
import NavHeader from '../../components/Organisms/NavHeader.vue'
import VanCard from '../../components/Molecules/VanCard.vue'
import FilterCol from '../../components/Organisms/FilterCol.vue'

export default {
  name: 'VansPage',
  components: { 
    NavHeader, 
    VanCard,
    FilterCol 
  },
  
  async asyncData({ $axios }) {
    const { results: vans } = await $axios.$get('/data.json')    
    
    return {
      vans
    }
  },
  data() {
    return {
      request: {},
      filter: false
    }
  },

  computed: {
    filteredVans() {
      if (this.filter) {
        const newVans = this.vans.filter(van => Number(van.starting_price) <= this.request.price && Number(van.vehicle_seats) >= this.request.seats && Number(van.vehicle_beds) >= this.request.beds)

      return newVans
      }
      return this.vans
    }
  },
  methods: {
    submit(form) {
      this.request = form
      if (form.price && form.seats && form.beds !== 0) {
        this.filter = !this.filter
      }
    },
  },
}

</script>