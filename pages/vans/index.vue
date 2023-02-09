<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div>
        <h1>LIST OF VANS</h1>    
        <van-card></van-card> 
    </div>
    
</template>

<script>
import VanCard from '../../components/Molecules/VanCard.vue'

export default {
  name: 'VansPage',
  components: { VanCard },


  async asyncData({ params, $axios }) {
    const vansList = await $axios.$get('db')
    return [ vansList ]
  }
}

</script>
