<template>
  <div class="globalContent" :class="{ easterEgg: isEasterEggActive }">
    <div class="welcomeContent">
      <div class="helloText">
        <transition name="fade" mode="out-in">
          <p :key="isEasterEggActive">{{ isEasterEggActive ? "SpaceDreamer" : "Noé GUILLAUMIN" }}</p>
        </transition>
      </div>
      <div class="subHelloText">
        Immersive Software Developer
      </div>
      <!-- <div class="warning">
        <p v-if="!isEasterEggActive">
          This website is under construction and some info is missing / not updated.
          Thank you for your comprehension.
        </p>
      </div> -->
    </div>

    <div class="vignette">
      <img :src="isEasterEggActive ? 'img/space_dreamer_25-modified.png' : 'img/noeguillaumin_pp_circled-min.png'"
        alt="Photo de profil de Noé Guillaumin" class="profile-picture" @click="easterEggClick">

      <div class="about-me">
        <p>From video game conception to VR application for research, checkout what I did over the last few years!</p>
      </div>
    </div>
    <div class="contactMe">
      <a href="#contactContent">Contact Me!</a>
    </div>
    <div class="contactMe">
      <a target="_blank" href="/pdf/noe_guillaumin_cv_26_rx.pdf" download>Download my resume</a>
    </div>
    <div class="content">
      <div class="category">
        <h2 class="categoryTitle">Virtual & Augmented Reality</h2>
        <div class="thumbnailContainer">
          <router-link class="thumb-link" to="/olfactorymap">
            <Thumbnail thumbnailTitle="2D Olfactory Map"
              thumbnailSubtitle="A texture-based solution to map olfactory data in VR applications."
              imageSrc="/img/smell_map_visual.webp" tags="2025 - DevTool - Unity"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/">
            <Thumbnail thumbnailTitle="Dynamic Weather System"
              thumbnailSubtitle="Comming Soon !"
              imageSrc="/img/xrtp_1.webp" tags="2024 - VR - Unity" commingSoon="true"></Thumbnail>
          </router-link>
        </div>
      </div>
      <div class="category">
        <h2 class="categoryTitle">Video Games</h2>
        <div class="thumbnailContainer">
          <a href="https://oceane-famechon.itch.io/murphys-escape" target="_blank">
            <Thumbnail thumbnailTitle="Murphy's Escape"
              thumbnailSubtitle="Everytime you finish the level, it restart, but with more stuff. Will you ever escape the loop?"
              imageSrc="/img/murphys_escape.webp" tags="2020 - GameJam - Unity"></Thumbnail>
          </a>
          <a href="https://faraldram.itch.io/xenos-heresy" target="_blank">
            <Thumbnail thumbnailTitle="Xenos Heresy"
              thumbnailSubtitle="Turn by turn strategy mobile game. Available on Google Playstore."
              imageSrc="/img/xenos_heresy.webp" tags="2021 - School Project - Unity"></Thumbnail>
          </a>
          <a href="https://baptiste-figeac.itch.io/yeet-the-gift" target="_blank">
            <Thumbnail thumbnailTitle="Yeet The Gift"
              thumbnailSubtitle="As Santa, your elves start to rebel. Punish them by yeeting gift at them using your 'Gift Bazooka'."
              imageSrc="/img/yeet_the_gift.webp" tags="2021 - GameJam - UnrealEngine"></Thumbnail>
          </a>
          <a href="https://lucasvh.itch.io/ocultas" target="_blank">
            <Thumbnail thumbnailTitle="Ocultas"
              thumbnailSubtitle="Couch Game. Find your friends among impostors, without being catched first!"
              imageSrc="/img/ocultas.webp" tags="2022 - School Project - Unity"></Thumbnail>
          </a>
          <a href="https://minstery.itch.io/save-the-office" target="_blank">
            <Thumbnail thumbnailTitle="Save The Office"
              thumbnailSubtitle="Looking for someone to save the office!!! Theme : 'Super hero of a new kind'."
              imageSrc="/img/save_the_office.webp" tags="2020 - GameJam - Unity"></Thumbnail>
          </a>
        </div>
      </div>
      <div class="category">
        <h2 class="categoryTitle">Professional Experiences</h2>
        <div class="thumbnailContainer">
          <a href="https://oodaworld.com/fr/" target="_blank">
            <Thumbnail thumbnailTitle="Obvious Technologies"
              thumbnailSubtitle="Worked on 'OODA', a command & control platform that aggregates multi-source data in 3D, enabling users to observe, orient, decide, and act in real time."
              imageSrc="/img/obvious_technologies_logo.webp" tags="2024 - Unity3D - MVCS Architecture"></Thumbnail>
          </a>
          <a href="https://team.inria.fr/hybrid/" target="_blank">
            <Thumbnail thumbnailTitle="INRIA"
              thumbnailSubtitle="Developped a Unity3D application for a research publication on pseudo-haptic feedback in VR. Research paper to be published soon at the IHM2025 conference."
              imageSrc="/img/inria_logo_red.png" tags="2023 - AR/VR - Unity"></Thumbnail>
          </a>
          <a href="https://www.farmcube.eu" target="_blank">
            <Thumbnail thumbnailTitle="Farm3"
              thumbnailSubtitle="Developped an application to better manage vertical farming equipment using XR technologies."
              imageSrc="/img/farm3_logo.png" tags="2022 - XR - Unity3D"></Thumbnail>
          </a>
        </div>
      </div>
            <div class="category">
        <h2 class="categoryTitle">Articles</h2>
        <div class="thumbnailContainer">
          <a href="https://hal.science/hal-05294843/" target="_blank">
            <Thumbnail thumbnailTitle="Research Paper"
              thumbnailSubtitle="Flexible Reality: Can Pseudo-Haptics Enhance Vibration Intensity Perception in Co-Located AR Interaction?"
              imageSrc="/img/flexible-reality.webp" tags="2025 - Research - VR - Haptics - Unity"></Thumbnail>
          </a>
          <router-link class="thumb-link" to="/">
            <Thumbnail thumbnailTitle="An introduction to Solarpunk"
              thumbnailSubtitle="Comming Soon !"
              imageSrc="/img/solarpunk_flag.webp" tags="2025 - Article - Society" commingSoon="true"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/">
            <Thumbnail thumbnailTitle="Why virtual reality is important"
              thumbnailSubtitle="Comming Soon !"
              imageSrc="/img/vr_thumbnail.webp" tags="2024 - VR - Unity" commingSoon="true"></Thumbnail>
          </router-link>
        </div>
      </div>
      <div class="category">
        <h2 class="categoryTitle">Contacts</h2>
        <Contacts />
      </div>
    </div>
  </div>
</template>

<script>
import Thumbnail from '../components/Thumbnail.vue';
import Contacts from '../components/Contacts.vue';
import { RouterLink } from 'vue-router';
export default {
  components: {
    Thumbnail, Contacts
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
.globalContent {
  display: flex;
  flex-direction: column;
  min-height: 95vh;
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

.warning {
  text-align: center;
  font-family: "Montserrat";
  color: brown;
}

.subHelloText {
  padding-top: 1rem;
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
  margin-top: 2rem;
}

.about-me p {
  color: var(--pure-black);
  font-family: "Montserrat";
  font-size: 1.8rem;
}

.links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1rem auto;
}

.links .linkItem a {
  color: var(--pure-black);
  text-decoration: none;
  font-family: "Sansation";
  border: 3px solid var(--pure-black);
  border-radius: 15px;
  box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.5);
  padding: 0.5em 1em;
  font-size: clamp(30px, 4vw, 36px);
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

.content {
  margin-top: -1rem;
  margin-left: 6rem;
  margin-right: 6rem;
}

.categoryTitle {
  margin: 0;
  margin-top: 3rem;
  font-family: "Montserrat";
  color: var(--dark-bluegreen);
  font-size: 2rem;
}

.thumbnailContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: -1rem;
}

.thumbnailContainer a,
.thumb-link {
  margin: 1rem;
  max-width: 250px;
  text-decoration: none;
}

.contactMe {
  display: block;
  color: var(--dark-bluegreen);
  font-family: "Montserrat";
  font-size: clamp(30px, 4vw, 36px);
  text-align: center;
  margin-bottom: 2rem;
}

.contactMe a {
  margin-left: 10px;
  text-decoration: none;
  color: var(--dark-bluegreen);
  
  font-family: "Sansation";
  font-size: clamp(24px, 4vw, 36px);

  padding: 0.5rem;

  border-style: solid;
  border-width: 3px;
  border-radius: 15px;

  align-content: center;
  transition: ease 0.3s;
  box-shadow: 4px 4px 2px 1px rgba(0, 48, 32, 0.5);
}

.contactMe a:hover {
  color: var(--pure-white);
  background-color: var(--dark-bluegreen);
  border-color: var(--dark-bluegreen);
  transition: ease 0.3s;
  box-shadow: 3px 3px 2px 1px rgba(0, 48, 32, 0.7);
}

.contactMe .linkItem {
  align-self: center;
}

@media (max-width: 768px) {

  .helloText {
    width: 100%;
    margin: 0;
    font-size: 3rem;
    margin-bottom: -2rem;
  }

  .subHelloText {
    margin: 0;
    padding-top: 0;
  }

  .vignette {
    margin: 0;
    display: block;
    text-align: center;
  }

  .profile-picture {
    display: block;
    margin: 0 auto;
  }

  .about-me {
    width: 100%;
    margin-left: 0;
    text-align: center;
    margin-bottom: -3rem;
  }

  .about-me p {
    font-size: 1.3rem;
    margin-top: -1rem;
  }

  .content {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  .links {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  .links .linkItem a {
    width: 100%;
    max-width: 400px;
  }

  .contactMe {
    margin-top: 2rem;
    margin-bottom: 0.5em;
  }

  .contactMe a{
    font-size: clamp(32px, 4vw, 36px);
  }

  .thumbnailContainer {
    display: inline;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    align-items: start;
  }

  .categoryTitle {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
}
</style>