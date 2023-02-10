<template>
    <div>
        <h1>DETAILS</h1>
        <p>{{ $route.params.id }}</p>
        <p>{{van.id}}</p>
    </div>
</template>

<script>
export default {
  
  async asyncData({ params, $axios }) {
    const { results: vans } = await $axios.$get('/data.json')    
    const van = vans.find(van => van.id.toString() === params.id)

    console.log(van)
    

    
    return {
      van
    }
  }
}

</script>