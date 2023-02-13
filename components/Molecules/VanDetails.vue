<template>
  <div class="w-full rounded-lg shadow-md mb-10">
    <carousel-main :van="van" class="relative h-56 overflow-hidden rounded-t-lg md:h-96 bg-gray-50"/>
    <profil-user :van="van" />
    <van-description :van="van" />
  </div>
</template>

<script>
import ProfilUser from '../Atoms/ProfilUser.vue'
import CarouselMain from '../Organisms/CarouselMain.vue'
import VanDescription from './VanDescription.vue'

export default {
  name: 'VanDetails',
  components: {
    ProfilUser,
    VanDescription,
    CarouselMain,
  },
  props: {
    van: {
      type: Object,
      required: true,
    },
  },
}
</script>
