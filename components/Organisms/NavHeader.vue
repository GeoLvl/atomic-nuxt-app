<template>
    <header class="sticky top-0 z-10 grid grid-cols-2 md:grid-cols-3 bg-red-500 shadow-md p-5 md:px-10 bg-gradient-to-r from-cyan-500 to-teal-500 ">        
        <logo-typo class="relative flex items-center h-10"/>        
        <search-bar/>
        <div class="flex justify-end items-center h-10">
            <globe-icon class="cursor-pointer"/>
        </div>    
    </header>  
</template>

<script>
import LogoTypo from '../Atoms/LogoTypo.vue'
import GlobeIcon from '../Atoms/GlobeIcon.vue'
import SearchBar from '../Molecules/SearchBar.vue'


export default {
    name: 'NavHeader',
    components: { LogoTypo, SearchBar, GlobeIcon },
    
}
</script>