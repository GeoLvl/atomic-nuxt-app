<template>
    <div class="flex items-center hidden md:flex border-2 rounded-full py-2">
        <input-search/>
        <button-search/>
    </div>
</template>

<script>
import InputSearch from '../Atoms/InputSearch.vue'
import ButtonSearch from '../Atoms/ButtonSearch.vue'

export default {
  name: 'SearchBar',
  components: { InputSearch, ButtonSearch, },
}
</script>