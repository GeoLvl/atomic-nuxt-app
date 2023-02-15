<template>  
    <div v-show="visible">
      <slot></slot>
    </div>  
</template>

<script>
export default {
  name: 'VanSlide',
  data() {
    return {
      index: 0,
    }
  },
  computed: {
    visible() {
      return this.index === this.$parent.index
    }
  },
}
</script>