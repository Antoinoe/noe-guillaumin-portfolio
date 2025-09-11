<template>
  <div class="globalContent">
    <div class="welcomeContent">
      <div class="helloText">
        Noé Guillaumin
      </div>
      <div class="subHelloText">
        Immersive Software Developer
      </div>
    </div>
    
    <div class="vignette">
      <img src="../../img/noeguillaumin_pp_circled-min.png" alt="" class="profile-picture">
      <div class="about-me"><p>From video game conception to VR application for research, checkout what I did over the last few years!</p></div>
    </div>

    <div class="links">
      <div class="linkItem"><router-link to="/projects">Projects</router-link></div>
      <div class="linkItem"><router-link to="/experiences">Experiences</router-link></div>
      <div class="linkItem"><router-link to="/education">Education</router-link></div>
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
.globalContent{
  margin-top: 50px;
}

.helloText {
  font-size: 64px;
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

.vignette{
  display: inline-flex; 
  align-content: center;
  padding: 1em;
  margin-left: 25%;
}

.profile-picture{
  display: block;
  width: 240px;
}

.about-me{
    justify-content: center; /* align horizontal */
    width: 480px;
}

.about-me p{
    color: var(--pure-black);
    text-decoration: none;
    font-family: sans-serif;
    font-size: 36px;
    margin-left: 20px;
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
