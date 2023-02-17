<template>
  <div>
    <div class="p-4">
      <h2 class="text-lg text-gray-800 font-bold mb-4">Détails du van</h2>
      <div class="flex p-4">
        <div class="flex items-center mr-6">
          <img
            class="h-8"
            src="../../static/icons/icon-seat.png"
            alt="Icône de Siège"
          />
          <p class="font-bold text-gray-900">
            {{ van.vehicle_seats }}
            <span class="text-gray-700 font-normal text-md"
              >places assises</span
            >
          </p>
        </div>
        <div class="flex items-center mr-6">
          <img
            class="h-8"
            src="../../static/icons/icon-bed.png"
            alt="Icône de lit"
          />
          <p class="font-bold text-gray-900">
            {{ van.vehicle_beds }}
            <span class="text-gray-700 font-normal text-md"
              >places couchées</span
            >
          </p>
        </div>
        <div class="flex items-center mr-6">
          <p class="font-bold text-gray-900">
            <span class="text-gray-700 font-normal text-md">- -</span>
          </p>
        </div>
      </div>
      <h2 class="text-lg text-gray-800 font-bold mt-4 mb-1">Description</h2>
      <div class="p-4">
        <h3 class="text-gray-800 font-bold mb-2">{{ van.vehicle_type }}</h3>
        <p class="text-gray-700 text-justify mb-3">
          Le {{ van.title }} est un véhicule polyvalent, plus grand que votre
          voiture standard, idéal pour le transport de personnes ou de biens.
          Achetez-le ou louez-le selon vos envies.
        </p>
        <p class="text-gray-700 text-justify mb-3">
          Le {{ van.title }} peut être un véhicule de livraison, un camping-car
          ou un transport de personnes. Chacun adapté à des besoins différents.
          Partez en vacances avec le camping-car ou emmenez tous vos amis en
          road-trip avec le transport de personnes.
        </p>
        <p class="text-gray-700 text-justify mb-3">
          Le {{ van.title }} peut transporter beaucoup de charges, offre une
          liberté pour les déplacements en groupe et peut même être
          personnalisé. Certains modèles peuvent même être transformés en petite
          maison sur roues. Options supplémentaires telles que lits, cuisines et
          salles de bain assurent un confort supplémentaire.
        </p>
      </div>
      <div class="flex flex-col items-center md:flex-row md:justify-end p4">
        <!-- <button-secondary text="Retour" link="/vans" /> -->
        <base-button to="/vans" class="box-border border-2 border-teal-500 hover:border-teal-600 hover:to-teal-600 text-teal-500 hover:text-teal-600 py-3 px-9 rounded-full text-xl font-bold hover:scale-105 transition transform duration-200 ease-out m-1 ">Retour</base-button>
        <!-- <button-primary text="Je réserve" link="#" /> -->
        <base-button to="#" class="box-border bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 px-9 rounded-full text-xl font-bold hover:scale-105 transition transform duration-200 ease-out m-1">Réserver</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../Atoms/BaseButton.vue'

export default {
  name: 'VanDescription',
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
