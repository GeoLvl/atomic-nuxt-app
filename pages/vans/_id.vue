<template>
  <div>
    <nav-header />
    <section
      class="grid grid-cols-2 md:grid-cols-3 px-5 md:px-14 lg:px-16 xl:px-18"
    >
      <main class="col-span-2 mt-10">
        <van-presentation :van="van" />
      </main>
      <aside class="col-span-2 md:col-span-1 mt-10 md:ml-5">
        <acquisition-col :van="van" />
      </aside>
    </section>
  </div>
</template>

<script>
import AcquisitionCol from '../../components/Organisms/AcquisitionCol.vue'
import NavHeader from '../../components/Organisms/NavHeader.vue'
import VanPresentation from '../../components/Organisms/VanPresentation.vue'

export default {
  name: 'VanPage',
  components: {
    NavHeader,
    VanPresentation,
    AcquisitionCol,
  },

  async asyncData({ params, $axios }) {
    const { results: vans } = await $axios.$get('/data.json')
    const van = vans.find((van) => van.id.toString() === params.id)

    return {
      van,
    }
  },
}
</script>
