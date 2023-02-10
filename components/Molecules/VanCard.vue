<template>
    <div class="mx-5 my-5 md:mx-0 md:mr-10 rounded-lg overflow-hidden shadow-md hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
        <img class="object-cover w-full max-h-72 sm:max-h-52" :src="van.pictures[0].url" alt="Van life">
        <div class="px-6 py-4">
            <h3 class="font-bold text-gray-700 mb-2">{{van.title}}</h3>
            <p class="text-gray-500">{{ van.vehicle_location_city }} <span class="text-gray-400">({{ van.vehicle_location_zipcode }})</span></p>
        </div>
        
    </div>
</template>

<script>
export default {
  props: {
    van: {
      type: Object,
      required: true
    }
  },

created(){
    console.log(this.van, "hello")
}
}
</script>