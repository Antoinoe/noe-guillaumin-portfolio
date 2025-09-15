<template>
  <div class="globalContent" :class="{ easterEgg: isEasterEggActive }">
    <div class="welcomeContent">
      <div class="helloText">
        <transition name="fade" mode="out-in">
          <p :key="isEasterEggActive">{{ isEasterEggActive ? "Space Dreamer" : "Noé GUILLAUMIN" }}</p>
        </transition>
      </div>
      <div class="subHelloText">
        Immersive Software Developer
      </div>
    </div>

    <div class="vignette">
      <img :src="isEasterEggActive ? 'img/space_dreamer_25-modified.png' : 'img/noeguillaumin_pp_circled-min.png'"
        alt="Photo de profil de Noé Guillaumin" class="profile-picture" @click="easterEggClick">

      <div class="about-me">
        <p>From video game conception to VR application for research, checkout what I did over the last few years!</p>
      </div>
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
import { ref, onUnmounted } from 'vue'

const clickCount = ref(0)
let timer = null
const isEasterEggActive = ref(false)
const audio = new Audio('/mp3/resonance.mp3')
const easterEggAuthorized = true;
audio.volume = 0.3

function easterEggClick() {
  if (easterEggAuthorized) {
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
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.globalContent {
  display: flex;
  flex-direction: column;
  min-height: 96vh;
  background: white;
  transition: background-color 3s ease, color 1s ease;
}

html,
body .easterEgg {
  background: rgb(129, 8, 173);
}

.helloText {
  flex: 1;
  font-size: 5rem;
  font-weight: 600;
  font-family: "Sansation";

  color: var(--dark-bluegreen);

  text-align: center;
  margin: -0.5em 0em -1em .0em;
}

.subHelloText {
  padding: 20px;
  color: var(--mid-bluegreen);
  font-family: "Montserrat";
  font-size: 24px;
  text-align: center;
}

.vignette {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 2rem;
  padding: 2em;
  margin-left: 25%;

}

.profile-picture {
  display: block;
  width: clamp(160px, 20vw, 240px);
  height: auto;
  max-width: 100%;
  object-fit: cover;
  transition: opacity 1s ease;
  flex: 0 0 auto;
}

.profile-picture[src*="/img/space_dreamer_25-modified.png"] {
  opacity: 1;
}

.profile-picture[src*="/img/noeguillaumin_pp_circled-min.png"] {
  opacity: 1;
}

.about-me {
  text-align: justify;
  width: min(700px, 60vw);
  margin-top: 20px;
}

.about-me p {
  color: var(--pure-black);
  font-family: "Montserrat";
  font-size: 36px;
  margin-left: 20px;
}

.links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem auto;
}

.links .linkItem {
  flex: 0 0 auto;
}

.links .linkItem a {
  color: var(--pure-black);
  text-decoration: none;
  font-family: "Sansation";
  border: 3px solid var(--pure-black);
  border-radius: 15px;
  box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.5);
  padding: 0.5em 1em;
  font-size: clamp(18px, 4vw, 36px);
  transition:
    color 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease,
    background-color 0.5s ease;
}

.links .linkItem a:hover {
  color: var(--pure-white);
  background-color: var(--mid-bluegreen);
  border-color: var(--dark-bluegreen);
  box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.7);
}

.easterEgg {
  --shadow-color: rgba(225, 0, 255, 0.384);
  --pure-black: rgba(255, 255, 255);
  --dark-bluegreen: rgb(231, 198, 12);
  --mid-bluegreen: rgb(240, 237, 77);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.contactMe {
  display: inline;
  margin-top: 1em;
  color: var(--pure-black);
  font-family: "Montserrat";
  font-size: 32px;
  text-align: center;
}

.contactMe a {
  margin-left: 10px;
  text-decoration: none;
  color: var(--pure-black);
  font-family: "Sansation";
  font-size: 32px;

  padding: 0.2em 1em 0.2em 1em;
  border-style: solid;
  border-width: 3px;
  border-radius: 25px;

  align-content: center;
}

.contactMe a:hover {
  color: var(--mid-bluegreen);
}

.contactMe .linkItem {
  align-self: center;
}

@media (max-width: 900px) {

  .helloText {
    width: 100%;
    margin: 0;
    font-size: 2rem;
  }

  .vignette {
    margin-left: 0;
  }

  .about-me {
    width: 100%;
    margin-left: 0;
  }

  .links {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .links .linkItem a {
    width: 100%;
    max-width: 300px;
  }
}
</style>