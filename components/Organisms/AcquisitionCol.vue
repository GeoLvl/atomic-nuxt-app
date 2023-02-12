<template>
  <div>
    <h2 class="text-gray-700 text-3xl font-bold mb-5">Tarif</h2>
    <card-pricing :van="van" />
    <card-reassurance :van="van" />
  </div>
</template>

<script>
import CardPricing from '../../components/Atoms/CardPricing.vue'
import CardReassurance from '../../components/Atoms/CardReassurance.vue'

export default {
  name: 'AcquisitionCol',
  components: {
    CardPricing,
    CardReassurance,
  },
  props: {
    van: {
      type: Object,
      required: true,
    },
  },
}
</script>
