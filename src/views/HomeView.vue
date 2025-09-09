<template>
  <div class="warper">
    <div class="welcomeContent">
      <div class="helloText">
        Noé Guillaumin
      </div>
      <div class="subHelloText">
        Immersive Software Developer
      </div>
    </div>
    <div class="about-me">
    From video game conception to VR application for research, checkout what I did over the last few years!
    </div>

    <div class="links">
      <div class="linkItem"><router-link to="/projects">Projets</router-link></div>
      <div class="linkItem"><router-link to="/experiences">Expériences</router-link></div>
      <div class="linkItem"><router-link to="/education">Parcours</router-link></div>
    </div>

    <div class="contactMe">
      <p>Did I caught your attention?</p>
      <div class="linkItem"><router-link to="/contact">Contacte Me</router-link></div>
    </div>
  </div>
  
  
  
</template>

<script>
import HomeNavItem from '../components/HomeNavItem.vue';
export default {
  components: {
    HomeNavItem
  }
}
</script>

<style scoped>
/* .warper{
  margin: 1.5vw;
} */

.helloText {
  font-size: 4vw;
  font-weight: 600;
  font-family: sans-serif;
  
  color: var(--dark-bluegreen);

  text-align: center;
  padding: 0em .5em 0em .5em;
}

.subHelloText{
  padding: 20px;
  color: var(--mid-bluegreen);
  font-family: sans-serif;
  font-size: 24px;
  text-align: center;
}

.about-me{
  margin-top : 3vw;
  color : var(--pure-black);
  font-family: sans-serif;
  font-size: 32px;
  text-align: center;
}

.links{
  display: inline-flex;
  margin-top: 2em;  
  text-align: center;
  width: 100%;
}

.links .linkItem{
  margin-top: 3em;
  margin-bottom: 3em;
  width: 100%;
}

.links .linkItem a{
  color: var(--pure-black);
  text-decoration: none;
  font-family: sans-serif;
  border-style: solid;
  border-color: var(--pure-black);
  border-width: 3px;

  font-size: 36px;
  border-radius: 5px;
  padding: 1vw 2vw 1vw 2vw;
}

.links .linkItem a:hover{
  color: var(--mid-bluegreen);
  border-color: var(--mid-bluegreen);
  border-width: 5px;
}

.contactMe{
  display: inline;
  margin-top : 5vw;
  color : var(--pure-black);
  font-family: sans-serif;
  font-size: 32px;
  text-align: center;
}

.contactMe a {
  margin-left : 10px;

  text-decoration: none;
  color : var(--pure-black);
  font-family: sans-serif;
  font-size: 32px;

  padding: 0.2em 1em 0.2em 1em;
  border-style: solid;
  border-width: 3px;
  border-radius: 5px;

  align-content: center;
}

.contactMe a:hover{
  color : var(--mid-bluegreen);
}

.contactMe .linkItem{
  align-self: center;
}

</style>
