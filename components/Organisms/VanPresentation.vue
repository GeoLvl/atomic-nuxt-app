<template>
  <div>
    <h2 class="text-gray-700 text-3xl font-bold mb-5">{{ van.title }}</h2>
    <van-details :van="van" />
  </div>
</template>

<script>
import VanDetails from '../../components/Molecules/VanDetails.vue'

export default {
  name: 'VanPresentation',
  components: {
    VanDetails,
  },
  props: {
    van: {
      type: Object,
      required: true,
    },
  },
}
</script>
