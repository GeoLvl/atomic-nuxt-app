<template>
  <div class="flex justify-between p-4">
    <div class="flex">
      <img
        :src="van.vehicle_owner_picture_url"
        alt="Image de profil"
        class="rounded-full h-16 mr-4"
      />
      <div>
        <p class="font-bold text-gray-700 text-base mb-none truncate">
          {{ van.vehicle_owner_first_name }}
          <span class="text-sm font-light">{{
            van.vehicle_owner_language
          }}</span>
        </p>
        <p class="text-gray-500 text-base">
          {{ van.vehicle_location_city }}
          <span class="text-gray-400"
            >({{ van.vehicle_location_zipcode }})</span
          >
        </p>
      </div>
    </div>
    <div>
      <div class="flex items-center">
        <img
          src="../../static/icons/icon-etoile.png"
          alt="Etoile"
          class="h-3 mr-1"
        />
        <p class="text-sm font-bold text-gray-900">{{ van.review_average }}</p>
        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
        <a
          href="#"
          class="text-sm text-gray-700 underline hover:no-underline"
          >{{ van.review_count }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilUser',
  props: {
    van: {
      type: Object,
      required: true,
    },
  },
}
</script>
