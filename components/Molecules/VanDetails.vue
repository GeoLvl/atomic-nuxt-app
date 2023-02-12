<template>
  <div class="w-full rounded-lg shadow-md mb-10">
    <carousel-img :van="van" />
    <profil-user :van="van" />
    <van-description :van="van" />
  </div>
</template>

<script>
import CarouselImg from '../Atoms/CarouselImg.vue'
import ProfilUser from '../Atoms/ProfilUser.vue'
import VanDescription from './VanDescription.vue'

export default {
  name: 'VanDetails',
  components: {
    CarouselImg,
    ProfilUser,
    VanDescription,
  },
  props: {
    van: {
      type: Object,
      required: true,
    },
  },
}
</script>
