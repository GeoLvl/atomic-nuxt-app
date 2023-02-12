<template>
    <div>
        <nav-header/>
        <section class="grid grid-cols-2 md:grid-cols-3 px-5 md:px-14 lg:px-16 xl:px-18">
            <main class="col-span-2 mt-10">
                <h2 class="text-gray-700 text-3xl font-bold mb-5">{{ van.title}}</h2>                
                <div class="w-full rounded-lg shadow-md mb-10">
                    <!-- <img :src='van.pictures[0]?.url' alt="Image du van" class="object-cover h-72 w-full rounded-t-lg"> -->
                    <carousel-img :van='van'/>
                    <div class="flex justify-between p-4">
                        <div class="flex">
                            <img :src='van.vehicle_owner_picture_url' alt="Image de profil" class="rounded-full h-16 mr-4">
                            <div>
                                <p class="font-bold text-gray-700 text-base mb-none truncate">{{van.vehicle_owner_first_name}} <span class="text-sm font-light">{{van.vehicle_owner_language}}</span></p>
                                <p class="text-gray-500 text-base">{{ van.vehicle_location_city }} <span class="text-gray-400">({{ van.vehicle_location_zipcode }})</span></p>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center">   
                                <img src="../../static/icons/icon-etoile.png" alt="Etoile" class="h-3 mr-1">                           
                                <p class="text-sm font-bold text-gray-900">{{ van.review_average }}</p>
                                <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
                                <a href="#" class="text-sm text-gray-700 underline hover:no-underline ">{{ van.review_count }}</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-4">
                            <h2 class="text-lg text-gray-800 font-bold mb-4">Détails du van</h2>
                            <div class="flex p-4">
                                <div class="flex items-center mr-6">
                                    <img class="h-8" src="../../static/icons/icon-seat.png" alt="Icône de Siège">
                                    <p class="font-bold text-gray-900">{{van.vehicle_seats}} <span class="text-gray-700 font-normal text-md">places assises</span></p>
                                </div>
                                <div class="flex items-center mr-6">
                                    <img class="h-8" src="../../static/icons/icon-bed.png" alt="Icône de lit">
                                    <p class="font-bold text-gray-900">{{van.vehicle_beds}} <span class="text-gray-700 font-normal text-md">places couchées</span></p>
                                </div>
                                <div class="flex items-center mr-6">
                                    <p class="font-bold text-gray-900"><span class="text-gray-700 font-normal text-md">- -</span></p>
                                </div>
                                <div class="flex items-center mr-6">
                                    <p class="font-bold text-gray-900"><span class="text-gray-700 font-normal text-md">- -</span></p>
                                </div>
                            </div>
                            <h2 class="text-lg text-gray-800 font-bold mt-4 mb-1">Description</h2>
                            <div class="p-4">
                                <h3 class="text-gray-800 font-bold mb-2">{{ van.vehicle_type }}</h3>
                                <p class="mb-3">Le ZoomZoom 1000 est un véhicule polyvalent, plus grand que votre voiture standard, idéal pour le transport de personnes ou de biens. Achetez-le ou louez-le selon vos envies.</p>
                                <p class="mb-3">Le ZoomZoom 1000 peut être un véhicule de livraison, un camping-car ou un transport de personnes. Chacun adapté à des besoins différents. Partez en vacances avec le camping-car ou emmenez tous vos amis en road-trip avec le transport de personnes.</p>
                                <p class="mb-3">Le ZoomZoom 1000 peut transporter beaucoup de charges, offre une liberté pour les déplacements en groupe et peut même être personnalisé. Certains modèles peuvent même être transformés en petite maison sur roues. Options supplémentaires telles que lits, cuisines et salles de bain assurent un confort supplémentaire.</p>
                            </div>
                            <div class="flex justify-center md:justify-end">
                                <button-secondary text="Retour" link="/vans"/>
                                <button-primary  text="Je réserve" link="#"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <aside class="col-span-2 md:col-span-1 mt-10 md:ml-5">
                <h2 class="text-gray-700 text-3xl font-bold mb-5">Tarif</h2>
            </aside>          
        </section>       
    </div>
</template>

<script>
import NavHeader from '../../components/Organisms/NavHeader.vue'
import CarouselImg from '../../components/Atoms/CarouselImg.vue'
import ButtonPrimary from '../../components/Atoms/ButtonPrimary.vue'
import ButtonSecondary from '../../components/Atoms/ButtonSecondary.vue'

export default {
    name: 'VanPage',
    components: { 
    NavHeader,
    CarouselImg,
    ButtonPrimary,
    ButtonSecondary
  },
  
    async asyncData({ params, $axios }) {
        const { results: vans } = await $axios.$get('/data.json')    
        const van = vans.find(van => van.id.toString() === params.id)
        
        return {
        van
        }
    }
}

</script>