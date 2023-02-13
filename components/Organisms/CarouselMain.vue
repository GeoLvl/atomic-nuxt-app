<template>
  <van-carousel>
    <van-slide v-for="slide in slides" :key="slide.id">
      <img :src="slide.url" alt="Images du van" class="object-contain m-auto"/>
    </van-slide>
  </van-carousel>
</template>

<script>
import VanCarousel from '../Molecules/VanCarousel.vue'
import VanSlide from '../Atoms/VanSlide'

export default {
  name: 'CarouselMain',
  components: {
    VanCarousel,
    VanSlide,
  },
  props: {
    van: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      slides: this.van.pictures
    }
  },
}
</script>