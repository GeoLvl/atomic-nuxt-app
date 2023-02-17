<template>
    <component :is="type" :to="to">
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  components: {},
  props: {
    to: {
      type: String,
      default: null
    }
  },

  computed: {
      type() {
        if (this.to) {
          return 'nuxt-link'
        } else {
          return 'button'
        }
      }
    }
}
</script>