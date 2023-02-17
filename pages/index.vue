<template>
  <div>
    <nav-header />
    <home-banner />
  </div>
</template>

<script>
import NavHeader from '../components/Organisms/NavHeader.vue'
import HomeBanner from '../components/Atoms/HomeBanner.vue'

export default {
  name: 'IndexPage',
  components: { NavHeader, HomeBanner },
}
</script>
