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
  padding: 2em;
  margin-left: 25%;
}

.profile-picture{
  display: block;
  width: 240px;
}

.about-me{
    justify-content: center; /* align horizontal */
    width: 650px;
    margin-left: 2em;
    margin-top: 20px;
}

.about-me p{
    color: var(--pure-black);
    text-decoration: none;
    font-family: sans-serif;
    font-size: 36px;
    margin-left: 20px;
}

.links{
  display: flex;
  text-align: center;
  margin-left: 37%;
}

.links .linkItem{
  margin-top: 2em;
  margin-bottom: 2em;
  padding: 2em;
}

.links .linkItem a{
  color: var(--pure-black);
  text-decoration: none;
  font-family: sans-serif;
  border-style: solid;
  border-color: var(--pure-black);
  border-width: 3px;
  border-radius: 15px;
  box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.5);
  padding: 0.5em;
  font-size: 36px;
}

.links .linkItem a:hover{
  color: var(--pure-white);
  background-color: var(--mid-bluegreen);
  border-style: solid;
  border-color: var(--dark-bluegreen);
  box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.7);
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
  border-radius: 25px;

  align-content: center;
}

.contactMe a:hover{
  color : var(--mid-bluegreen);
}

.contactMe .linkItem{
  align-self: center;
}

</style>
