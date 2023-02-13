<template>
  <div class="w-full rounded-lg shadow-md mb-10 bg-gray-50 p-6">
    <h3 class="text-gray-800 font-bold mb-4">Prix</h3>
    <div class="flex justify-between items-end mb-8">
      <input type="number" placeholder="Prix max" />
    </div>
    <h3 class="text-gray-800 font-bold mb-4">Places assises</h3>
    <div class="flex justify-between items-end mb-8">
      <input type="number" placeholder="Ex: 4" />
    </div>
    <h3 class="text-gray-800 font-bold mb-4">Places couchées</h3>
    <div class="flex justify-between items-end mb-8">
      <input type="number" placeholder="Ex: 6" />
    </div>
    <p>{{ score }}</p>
    <div class="flex justify-center">
      <button-primary text="Rechercher" @click="trig"/>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '../../components/Atoms/ButtonPrimary.vue'

export default {
  name: 'CardFilter',
  components: {
    ButtonPrimary,
  },

  data() {
    return {
        score : 0
    }
  },

  methods: {
    trig() {
      return this.score++
    }
  },
}
</script>
