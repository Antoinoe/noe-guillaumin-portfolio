<template>
    <nav>
      <router-link to="/">Home</router-link>
      <NavSep/>
      <router-link to="/projects">Projects</router-link>
      <NavSep/>
      <router-link to="/experiences">Experiences</router-link>
      <NavSep/>
      <router-link to="/education">Education</router-link>
      <NavSep/>
      
      <router-link to="/contact">Contact</router-link>
    </nav>
  </template>
  
  <script>
  import NavSep from '../components/NavSep.vue';

  export default {
      components: {
      NavSep
    }
  }
</script>
  
<style scoped>
@import url('../assets/tools.css');

nav {
    display: inline-flex;
    margin: 2em;
    border-radius: 5px 5px 0 0;
    background-color: var(--light-grey);
    border-radius: 5px;
    border-width: 5px;
    border-color: var(--mid-grey);
    border-style:solid;
}

nav a {
    font-family: sans-serif;
    margin: 15px; 
    font-size: 18px; 
    color: var(--mid-beige); 
    text-decoration: none;

}

nav .router-link-active{
    font-weight: 600;
    font-size: 20px;
}

nav a:hover {
    color: var(--mid-red); 
}



</style>