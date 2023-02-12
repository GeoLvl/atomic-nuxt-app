<template>
  <div class="w-full rounded-lg shadow-md mb-10 bg-gray-50 p-6">
    <h3 class="text-gray-800 font-bold mb-4">Prix pour 1 journée :</h3>
    <div class="flex justify-between items-end mb-8">
      <p class="text-gray-700 text-clip max-w-sm">
        Le {{ van.title }} à partir de
      </p>
      <p class="text-4xl font-bold text-gray-800">
        {{ van.starting_price }}
        <span class="text-sm font-light">{{ van.currency_used }}</span>
      </p>
    </div>
    <div class="flex justify-center">
      <button-primary text="Je loue" link="#" />
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '../../components/Atoms/ButtonPrimary.vue'

export default {
  name: 'CardPricing',
  components: {
    ButtonPrimary,
  },
  props: {
    van: {
      type: Object,
      required: true,
    },
  },
}
</script>
