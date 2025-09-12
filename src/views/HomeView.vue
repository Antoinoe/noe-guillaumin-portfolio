<template>
  <div class="globalContent" :class="{ easterEgg: isEasterEggActive }">
    <div class="welcomeContent">
      <div class="helloText">
        <transition name="fade" mode="out-in"><p :key="isEasterEggActive">{{ isEasterEggActive ? "Space Dreamer" : "Noé GUILLAUMIN" }}</p></transition>
      </div>
      <div class="subHelloText">
        Immersive Software Developer
      </div>
    </div>
    
    <div class="vignette">
      <img :src="isEasterEggActive ? './public/img/space_dreamer_25-modified.png' : './public/img/noeguillaumin_pp_circled-min.png'"
           alt="Photo de profil de Noé Guillaumin" 
           class="profile-picture" 
           @click="easterEggClick" >

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

<script setup>
import { ref, onUnmounted  } from 'vue'

const clickCount = ref(0)
let timer = null
const isEasterEggActive = ref(false)
const audio = new Audio('./public/mp3/resonance.mp3')
const easterEggAuthorized = true;
audio.volume = 0.3 // volume à 30%

function easterEggClick() {
if(easterEggAuthorized){
  if (clickCount.value === 0) {
    timer = setTimeout(() => {
      clickCount.value = 0
    }, 5000)
  }

  clickCount.value++

  if (clickCount.value >= 10) {
    clearTimeout(timer)
    clickCount.value = 0

    isEasterEggActive.value = true

    audio.currentTime = 0
    audio.play()

    // désactive après 30 secondes
    setTimeout(() => {
      isEasterEggActive.value = false
    }, 23000)
  }
}

}
onUnmounted(() => {
  audio.pause()
  audio.currentTime = 0
})
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.globalContent{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: white;
  transition: background-color 3s ease, color 1s ease;
}

html, body .easterEgg {
  background: rgb(174, 0, 255); /* couleur spéciale pendant 30s */
}

.helloText {
  flex: 1;
  font-size: 64px;
  font-weight: 600;
  font-family: "Sansation";
  
  color: var(--dark-bluegreen);

  text-align: center;
  margin: 0em .0em -1em .0em;
}

.subHelloText{
  padding: 20px;
  color: var(--mid-bluegreen);
  font-family: "Montserrat";
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
  transition: opacity 3s ease;
}

.profile-picture[src*="./public/img/space_dreamer_25-modified.png"]{
 opacity: 1;
}

.profile-picture[src*="./public/img/noeguillaumin_pp_circled-min.png"]{
 opacity: 1;
}

.about-me{
    justify-content: center;
    text-align: justify;
    width: 700px;
    margin-left: 2em;
    margin-top: 20px;
}

.about-me p{
    color: var(--pure-black);
    font-family: "Montserrat";
    font-size: 36px;
    margin-left: 20px;
}

.links{
  display: flex;
  text-align: center;
  margin-left: 40%;
}

.links .linkItem{
  padding: 2em;
}

.links .linkItem a{
  color: var(--pure-black);
  text-decoration: none;
  font-family: "Sansation";
  border-style: solid;
  border-color: var(--pure-black);
  border-width: 3px;
  border-radius: 15px;
  box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.5);
  padding: 0.5em;
  font-size: 36px;
    transition: 
    color 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
}

.links .linkItem a:hover{
  color: var(--pure-white);
  background-color: var(--mid-bluegreen);
  border-style: solid;
  border-color: var(--dark-bluegreen);
  box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.7);
    transition: 
    color 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
}

.easterEgg {
  --shadow-color: rgba(225, 0, 255, 0.384);
  --pure-black : rgba(255,255,255);
  --dark-bluegreen : rgb(231, 198, 12);
  --mid-bluegreen : rgb(240, 237, 77);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.contactMe{
  display: inline;
  margin-top : 5vw;
  color : var(--pure-black);
  font-family: "Montserrat";
  font-size: 32px;
  text-align: center;
}

.contactMe a {
  margin-left : 10px;

  text-decoration: none;
  color : var(--pure-black);
  font-family: "Sansation";
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
footer {
  flex-shrink: 0;
  text-align: center;
}
</style>
