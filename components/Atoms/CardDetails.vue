<template>
    <div class="flex justify-between">
        <div class="flex justify-start align-bottom">
            <div class="flex items-center mr-2">
                <p class="text-gray-700">{{van.vehicle_seats}}</p>
                <img class="h-5" src="../../static/icons/icon-seat.png" alt="Icône de Siège">
            </div>
            <div class="flex items-center">
                <p class="text-gray-700">{{van.vehicle_beds}}</p>
            <img class="h-5" src="../../static/icons/icon-bed.png" alt="Icône de Lit">
            </div>            
        </div>
        <div class="flex">
            <p class="text-3xl font-bold text-gray-800">{{van.starting_price}} <span class="xsmall font-light">{{van.currency_used}}</span></p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'CardDetails',
    props: {
    van: {
      type: Object,
      required: true
    }
  },

}
</script>

<style scoped>
.xsmall {
    font-size: 10px;
}
</style>