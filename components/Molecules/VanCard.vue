<template>
  <div
    class="mx-4 my-4 md:mx-0 md:mr-10 rounded-lg overflow-hidden shadow-md hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
  >
    <nuxt-link class="absolute w-full h-full" :to="`/vans/${van.id}`"></nuxt-link>
    <img
      class="object-cover bg-gray-50 w-full max-h-72 h-72 sm:max-h-52 sm:h-52"
      :src="van.pictures[0].url"
      alt="Image du van"
    />
    <div class="p-2">
      <h3 class="font-bold text-gray-700 text-base mb-none truncate">
        {{ van.title }}
      </h3>
      <p class="text-gray-500 text-base">
        {{ van.vehicle_location_city }}
        <span class="text-gray-400">({{ van.vehicle_location_zipcode }})</span>
      </p>
    </div>
    <badge-review class="absolute top-0 right-0 mr-2 mt-2" :van="van" />
    <card-details class="px-2" :van="van" />
  </div>
</template>

<script>
import BadgeReview from '../Atoms/BadgeReview.vue'
import CardDetails from '../Atoms/CardDetails.vue'
export default {
  name: 'VanCard',
  components: { BadgeReview, CardDetails },
  props: {
    van: {
      type: Object,
      required: true,
    },
  },
}
</script>
