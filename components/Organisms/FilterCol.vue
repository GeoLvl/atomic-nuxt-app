<template>
  <div>
    <h2 class="text-gray-700 text-3xl font-bold mb-5">Filtrer par</h2>
    <form-filter class="mt-9" @submit="submit" />
  </div>
</template>

<script>
import FormFilter from '../Molecules/FormFilter.vue'

export default {
  name: 'FilterCol',
  components: {
    FormFilter,
  },

  methods: {
    submit(form) {
      this.$emit('submit', form)
    },
  },
}
</script>
