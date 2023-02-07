<template>
<header class="sticky top-0 z-10 grid grid-cols-2 md:grid-cols-3 bg-red-500 shadow-md p-5 md:px-10 bg-gradient-to-r from-cyan-500 to-teal-500 ">
    <div class="relative flex items-center h-10">
        <!-- <logo-typo/> -->
        <p class="text-white text-3xl font-bold">Yespapa</p>
    </div>
    <div class="flex items-center hidden md:flex border-2 rounded-full py-2 ">
        <input type="text" placeholder="Rechercher un van" class="flex-grow pl-5 bg-transparent outline-none placeholder-gray-100 text-white">
        <search-icon class="cursor-pointer hidden md:inline-flex md:mx-2"/>
    </div>
    <div class="flex items-center justify-end h-10">
        <globe-icon class="cursor-pointer"/>
    </div>
</header>
  
</template>

<script>
import SearchIcon from '@/components/Atoms/SearchIcon.vue'
import GlobeIcon from '@/components/Atoms/GlobeIcon.vue'
// import LogoTypo from '../Atoms/LogoTypo.vue'
export default {
     components: { SearchIcon, GlobeIcon },
    
}
</script>