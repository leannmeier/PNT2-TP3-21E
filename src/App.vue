<template>
  <div class="contain">
    <div class="jumbotron">
      <Navbar/>
      <RouterView />
    </div>
  </div> 
</template>
<script>
import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>

</style>
