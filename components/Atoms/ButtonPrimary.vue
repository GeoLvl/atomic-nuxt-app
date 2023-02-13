<template>
  <NuxtLink :to="link">
    <button
      class="box-border bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 px-9 rounded-full text-xl font-bold hover:scale-105 transition transform duration-200 ease-out h-14 w-48 m-1"
    >
      {{ text }}
    </button>
  </NuxtLink>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    link: {
      type: String,
      default: '#',
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
