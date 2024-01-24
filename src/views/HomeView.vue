<template>
  <div class="warper">
    <div class="welcomeContent">
      <div class="helloText">
        Hi, I'm Noé Guillaumin!
      </div>
      <div class="subHelloText">
        Welcome to my portfolio! I make telerepsence VR applications to better understand our world.
      </div>
    </div>
    <div class="checkout">
    From video game conception to VR application for research, checkout what I did over the last few years!
    </div>

    <div class="links">
      <div class="linkItem"><router-link to="/projects">Projects</router-link></div>
      <div class="linkItem"><router-link to="/experiences">Experiences</router-link></div>
      <div class="linkItem"><router-link to="/education">Education</router-link></div>
    </div>

    <div class="contactMe">
      <p>Interested in my work? Don't hesitate to contact me !</p>
      <div class="linkItem"><router-link to="/contact">GO</router-link></div>
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


.warper{
  margin: 1.5vw;
}

.welcomeContent {
  display: inline-block; 
}

.helloText {
  font-size: calc(5.5vw);
  font-weight: 900;
  font-family: sans-serif;
  color: var(--mid-red);
  padding: 0em .5em 0em .5em;
  background-color: var(--mid-beige);
  border-style: solid;
  border-color: var(--mid-red);
  border-width: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 0px;
  text-align: center;
}

.subHelloText{
  padding: 20px;
  border-style: solid;
  border-color: var(--mid-red);
  border-width: 0px 10px 10px 10px;
  border-radius: 0px 0px 10px 10px;
  background-color: var(--mid-grey);
  color: var(--mid-beige);
  font-family: sans-serif;
  font-size: 24px;
  display: inline-block;
  text-align: center;
  background-color: var(--dark-grey);
}

.checkout{
  margin-top : 3vw;
  color : var(--mid-beige);
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
  color: var(--mid-beige);
  text-decoration: none;
  font-family: sans-serif;
  border-style: solid;
  border-color: var(--mid-red);
  border-width: 3px;
  background-color: var(--light-grey);
  font-size: 36px;
  border-radius: 5px;
  padding: 1vw 2vw 1vw 2vw;
  
}

.links .linkItem a:hover{
  color: var(--mid-red);
  background-color: var(--mid-beige);
  font-weight: 600;
  border-width: 5px;
}

.contactMe{
  display: inline;
  margin-top : 5vw;
  color : var(--mid-beige);
  font-family: sans-serif;
  font-size: 32px;
  text-align: center;
}
.contactMe a {
  margin-left : 10px;

  text-decoration: none;
  color : var(--mid-beige);
  font-family: sans-serif;
  font-size: 32px;
  background-color: var(--mid-grey);

  padding: 0.2em 1em 0.2em 1em;
  border-style: solid;
  border-color: var(--mid-red);
  border-width: 3px;
  border-radius: 5px;

  align-content: center;
}

.contactMe a:hover{
  background-color: var(--mid-red);
}

.contactMe .linkItem{
  align-self: center;
}

</style>
