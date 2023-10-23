<template>
    <nav>
      <router-link to="/">Home</router-link>
      <NavSep/>
      <router-link to="/education">Education</router-link>
      <NavSep/>
      <router-link to="/experiences">Experiences</router-link>
      <NavSep/>
      <router-link to="/projects">Projects</router-link>
      <NavSep/>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </template>
  
  <script>
  import NavSep from './NavSep.vue';

  export default {
      components: {
      NavSep
    }
  }
</script>
  
<style scoped>
@import url('../assets/tools.css');

/* Styles spécifiques au composant */
nav {
    display: flex;
    background-color: var(--dark-grey); /* Couleur de fond */
    padding: 5px; /* Augmente la marge intérieure pour plus d'espace */
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 5px 5px 0 0;
}

nav a {
    font-family: sans-serif;
    margin: 15px; /* Espacement entre les éléments */
    font-size: 18px; /* Taille du texte */
    color: var(--mid-beige); /* Couleur du texte */
    text-decoration: none;

}

nav .router-link-active{
    font-weight: bold;
    font-size: 20px;
}

nav a:hover {
    color: var(--mid-red); /* Couleur différente au survol */
}



</style>