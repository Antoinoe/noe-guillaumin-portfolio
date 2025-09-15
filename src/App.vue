<script>
import Navbar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Navbar, Footer
  }
}
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>

</template>

<style scoped>
</style>
