<template>
    <div class="bg-white text-xs font-bold shadow-md rounded-full py-0.5 px-1 absolute top-0 flex items-center">
        <p class="pr-1">{{van.review_average}}</p>
        <img src="../../static/icons/icon-etoile.png" alt="Etoile" class="h-3">
    </div>
</template>

<script>
export default {
    name:'BadgeReview',
    props: {
    van: {
      type: Object,
      required: true
    }
  },

}
</script>