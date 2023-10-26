<script >
  import Navbar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  export default {
    components: {
      Navbar,Footer
    }
  }
</script>

<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <Footer></Footer>
  </div>
  
</template>

<style scoped>
  @import "@/assets/tools.css";
  html{
    background-color: var(--primary-grey);
  }

  
</style>
