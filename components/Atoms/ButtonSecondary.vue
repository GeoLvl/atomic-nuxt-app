<template>
<NuxtLink :to='link'>
  <button class="box-border border-2 border-teal-500 hover:border-teal-600 hover:to-teal-600 text-teal-500 hover:text-teal-600 py-3 px-9 rounded-full my-10 mx-2 text-xl font-bold hover:scale-105 transition transform duration-200 ease-out h-14 w-44">{{ text }}</button>
</NuxtLink>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>