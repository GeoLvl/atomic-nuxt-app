<template>
  <div class="w-full rounded-lg shadow-md mb-10 bg-gray-50 p-6">
    <div class="flex">
      <img
        class="mr-2 h-6"
        src="../../static/icons/icon-assurance.png"
        alt="Icône assurance"
      />
      <h3 class="text-gray-800 font-bold mb-4">Assurance</h3>
    </div>
    <div class="flex justify-between items-end mb-8">
      <p class="text-gray-700 text-clip max-w-sm">
        Profitez du {{ van.title }} sereinement avec l'assurance AssurMoi
      </p>
    </div>
    <div class="flex">
      <img
        class="mr-2 h-6"
        src="../../static/icons/icon-partner.png"
        alt="Icône des partenaires"
      />
      <h3 class="text-gray-800 font-bold mb-4">Partenaires</h3>
    </div>
    <div class="flex justify-between items-end mb-8">
      <p class="text-gray-700 text-clip max-w-sm">
        Avec nos partenaires profitez d'avantages exclusifs pour un voyage sans
        soucis !
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardReassurance',
  props: {
    van: {
      type: Object,
      required: true,
    },
  },
}
</script>
