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
      <!-- <button-primary text="Je loue" link="#" /> -->
      <base-button class="box-border bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 px-9 rounded-full text-xl font-bold hover:scale-105 transition transform duration-200 ease-out h-14 w-48 m-1">Je loue</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'CardPricing',
  components: {
    BaseButton,
  },
  props: {
    van: {
      type: Object,
      required: true,
    },
  },
}
</script>
