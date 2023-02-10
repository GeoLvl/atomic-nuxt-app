<template>
<NuxtLink to="/vans">
  <button class="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 px-9 rounded-full m-10 text-xl font-bold hover:scale-105 transition transform duration-200 ease-out">{{ text }}</button>
</NuxtLink>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>