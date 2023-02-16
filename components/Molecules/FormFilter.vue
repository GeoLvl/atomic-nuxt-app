<template>
  <div class="w-full rounded-lg shadow-md mb-10 bg-gray-50 p-6">
      <form @submit.prevent="submit">
        <h3 class="text-gray-800 font-bold mb-4">Prix</h3>
        <div class="flex justify-between items-end mb-8">
          <input
            v-model="form.price"
            type="number"
            placeholder="Prix max"
            min="0"
            class="rounded-full w-full border border-teal-500 text-gray-500 text-sm p-2.5"
          />
        </div>

        <h3 class="text-gray-800 font-bold mb-4">Places assises</h3>
        <div class="flex justify-between items-end mb-8">
          <input
            v-model="form.seats"
            type="number"
            placeholder="Ex: 6"
            min="0"
            class="rounded-full w-full border border-teal-500 text-gray-500 text-sm p-2.5"
          />
        </div>

        <h3 class="text-gray-800 font-bold mb-4">Places couchées</h3>
        <div class="flex justify-between items-end mb-8">
          <input
            v-model="form.beds"
            type="number"
            placeholder="Ex: 4"
            min="0"
            class="rounded-full w-full border border-teal-500 text-gray-500 text-sm p-2.5"
          />
        </div>

        <div
          class="flex flex-col items-center md:flex-row md:justify-center p4"
        >
          <!-- <button
            type="submit"
            class="box-border border-2 border-teal-500 hover:border-teal-600 hover:to-teal-600 text-teal-500 hover:text-teal-600 py-3 px-9 rounded-full text-xl font-bold hover:scale-105 transition transform duration-200 ease-out h-14 w-48 m-1"
          >
            Retour
          </button> -->
          <base-button 
            type="submit"
            class="box-border border-2 border-teal-500 hover:border-teal-600 hover:to-teal-600 text-teal-500 hover:text-teal-600 py-3 px-9 rounded-full text-xl font-bold hover:scale-105 transition transform duration-200 ease-out h-14 w-48 m-1">Retour</base-button>
          <!-- <button
            type="submit"
            class="box-border bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 px-9 rounded-full text-xl font-bold hover:scale-105 transition transform duration-200 ease-out h-14 w-48 m-1"
          >
            Rechercher
          </button> -->
          <base-button 
            type="submit"
            class="box-border bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 px-9 rounded-full text-xl font-bold hover:scale-105 transition transform duration-200 ease-out h-14 w-48 m-1">Rechercher</base-button>
        </div>
      </form>
  </div>
</template>

<script>
import BaseButton from '../Atoms/BaseButton.vue'
export default {
  name: 'FormFilter',
  components: { BaseButton },

  data() {
    return {
      form: {
        price: '',
        seats: '',
        beds: '',
      },
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.form)
    },
  },
}
</script>
