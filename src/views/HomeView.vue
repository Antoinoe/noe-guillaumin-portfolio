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
      <div class="warning">
        <p v-if="!isEasterEggActive">
          This website is under construction and some info is missing / not updated.
          Thank you for your comprehension.
        </p>
      </div>
    </div>

    <div class="vignette">
      <img :src="isEasterEggActive ? 'img/space_dreamer_25-modified.png' : 'img/noeguillaumin_pp_circled-min.png'"
        alt="Photo de profil de Noé Guillaumin" class="profile-picture" @click="easterEggClick">

      <div class="about-me">
        <p>From video game conception to VR application for research, checkout what I did over the last few years!</p>
      </div>
    </div>
    <div class="content">
      <div class="category">
        <h2 class="categoryTitle">Virtual & Augmented Reality</h2>
        <div class="thumbnailContainer">
          <router-link class="thumb-link" to="/olfactorymap">
            <Thumbnail thumbnailTitle="2D Olfactory Map"
              thumbnailSubtitle="A solution to map olfactory data in VR applications. A solution to map olfactory data in VR applications. A solution to map olfactory data in VR applications. A solution to map olfactory data in VR applications. A solution to map olfactory data in VR applications. A solution to map olfactory data in VR applications. A solution to map olfactory data in VR applications. A solution to map olfactory data in VR applications. A solution to map olfactory data in VR applications. "
              imageSrc="/img/xrtp_1.webp" tags="2025 - DevTool - Unity"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/dynamicweathersystem">
            <Thumbnail thumbnailTitle="Dynamic Weather System"
              thumbnailSubtitle="Modify the celestial environment based on environmental and temporal data"
              imageSrc="/img/nono_croped.jpg" tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="Pyramidal Hologram" thumbnailSubtitle="Sous-titre"
              imageSrc="/img/noeguillaumin_pp_circled-min.png" tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
        </div>
      </div>
      <div class="category">
        <h2 class="categoryTitle">Video Games</h2>
        <div class="thumbnailContainer">
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="Murphy's Escape" thumbnailSubtitle="Sous-titre" imageSrc="/img/xrtp_1.webp"
              tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="Xenos Heresy" thumbnailSubtitle="Sous-titre" imageSrc="/img/xrtp_1.webp"
              tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="Yeet The Gift" thumbnailSubtitle="Sous-titre" imageSrc="/img/xrtp_1.webp"
              tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="Ocultas" thumbnailSubtitle="Sous-titre" imageSrc="/img/xrtp_1.webp"
              tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="Save The Office" thumbnailSubtitle="Sous-titre" imageSrc="/img/xrtp_1.webp"
              tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
        </div>
      </div>
      <div class="category">
        <h2 class="categoryTitle">Professional Experiences</h2>
        <div class="thumbnailContainer">
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="Obvious Technologies" thumbnailSubtitle="Sous-titre" imageSrc="/img/xrtp_1.webp"
              tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="INRIA" thumbnailSubtitle="Sous-titre" imageSrc="/img/xrtp_1.webp"
              tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="Farm3" thumbnailSubtitle="Sous-titre" imageSrc="/img/xrtp_1.webp"
              tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
        </div>
      </div>
      <div class="category">
        <h2 class="categoryTitle">Others</h2>
        <div class="thumbnailContainer">
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="Titre" thumbnailSubtitle="Sous-titre" imageSrc="/img/xrtp_1.webp"
              tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="Titre" thumbnailSubtitle="Sous-titre" imageSrc="/img/xrtp_1.webp"
              tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
          <router-link class="thumb-link" to="/contact">
            <Thumbnail thumbnailTitle="Titre" thumbnailSubtitle="Sous-titre" imageSrc="/img/xrtp_1.webp"
              tags="2024 - VR - Unity"></Thumbnail>
          </router-link>
        </div>
      </div>
    </div>

    <!-- <div class="test">
    <h3 class="categoryTitle">Category</h3>
    <div class="thumbnailContainer">
      <router-link to="/contact" class="thumb-link">
        <Thumbnail 
        thumbnailTitle="2D Olfctory Map"
        thumbnailSubtitle="A solution to map olfactory data in VR applications." 
        imageSrc="/img/xrtp_1.webp
        tags="2024 - VR - Unity 
      />
      </router-link>
      
      <router-link to="/contact" class="thumb-link">
        <Thumbnail 
          thumbnailTitle="Dynamic Weather System"
          thumbnailSubtitle="A solution to map olfactory data in VR applications." 
          imageSrc="/img/xrtp_1.webp"
          tags="2024 - VR - Unity" 
        />
      </router-link>
      <Thumbnail 
        thumbnailTitle="My experience at Farm3"
        thumbnailSubtitle="A solution to map olfactory data in VR applications." 
        imageSrc="/img/xrtp_1.webp"
        tags="2024 - VR - Unity" 
      />
      
      <router-link to="/contact" class="thumb-link">
        <Thumbnail 
          thumbnailTitle="My experience at INRIA"
          thumbnailSubtitle="A solution to map olfactory data in VR applications." 
          imageSrc="/img/xrtp_1.webp"
          tags="2024 - VR - Unity" 
        />
      </router-link>
    </div>
    <h3 class="categoryTitle">Category</h3>
    <div class="thumbnailContainer">
      <router-link to="/contact" class="thumb-link">
        <Thumbnail 
          thumbnailTitle="My experience at Obvious Technologies"
          thumbnailSubtitle="A solution to map olfactory data in VR applications." 
          imageSrc="/img/xrtp_1.webp"
          tags="2024 - VR - Unity" 
        />
      </router-link>

      <a class ="thumbnailRedirection" href="https://lucasvh.itch.io/ocultas" target="_blank">
        <Thumbnail 
          thumbnailTitle="Xenos Heresy"
          thumbnailSubtitle="A solution to map olfactory data in VR applications." 
          imageSrc="/img/xrtp_1.webp"
          tags="2024 - VR - Unity" 
        />
      </a>

      <a class ="thumbnailRedirection" href="https://lucasvh.itch.io/ocultas" target="_blank">
        <Thumbnail 
          thumbnailTitle="Yeet The Gift"
          thumbnailSubtitle="A solution to map olfactory data in VR applications." 
          imageSrc="/img/xrtp_1.webp"
          tags="2024 - VR - Unity" 
        />
      </a>

      <a class ="thumbnailRedirection" href="https://lucasvh.itch.io/ocultas" target="_blank">
        <Thumbnail 
          thumbnailTitle="Ocultas"
          thumbnailSubtitle="A solution to map olfactory data in VR applications." 
          imageSrc="/img/xrtp_1.webp"
          tags="2024 - VR - Unity" 
        />
      </a>

      <a class ="thumbnailRedirection" href="https://lucasvh.itch.io/ocultas" target="_blank">
        <Thumbnail 
          thumbnailTitle="Murphy's Escape"
          thumbnailSubtitle="A solution to map olfactory data in VR applications." 
          imageSrc="/img/xrtp_1.webp"
          tags="2024 - VR - Unity" 
        />
      </a>

      <a class ="thumbnailRedirection" href="https://lucasvh.itch.io/ocultas" target="_blank">
        <Thumbnail 
          thumbnailTitle="Save The Office"
          thumbnailSubtitle="A solution to map olfactory data in VR applications." 
          imageSrc="/img/xrtp_1.webp"
          tags="2024 - VR - Unity" 
        />
      </a>

      <router-link to="/contact" class="thumb-link">
        <Thumbnail 
          thumbnailTitle="My vision of Solarpunk"
          thumbnailSubtitle="A solution to map olfactory data in VR applications." 
          imageSrc="/img/xrtp_1.webp"
          tags="2024 - VR - Unity" 
        />
      </router-link>

      <router-link to="/contact" class="thumb-link">
        <Thumbnail 
          thumbnailTitle="Why Virtual Reality is useful?"
          thumbnailSubtitle="A solution to map olfactory data in VR applications." 
          imageSrc="/img/xrtp_1.webp"
          tags="2024 - VR - Unity" 
        />
      </router-link>
      </div> 
    </div>-->

    <!-- <div class="links">
      <div class="linkItem"><router-link to="/projects">Projects</router-link></div>
      <div class="linkItem"><router-link to="/experiences">Experiences</router-link></div>
      <div class="linkItem"><router-link to="/education">Education</router-link></div>
    </div>

    <div class="contactMe">
      <p>Did I catch your attention?</p>
      <div class="linkItem"><router-link to="/contact">Contacte Me</router-link></div>
    </div> -->
  </div>
</template>

<script>
import HomeNavItem from '../components/HomeNavItem.vue';
import Thumbnail from '../components/Thumbnail.vue';
import { RouterLink } from 'vue-router';
export default {
  components: {
    HomeNavItem, Thumbnail
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

.thumb-link {
  margin: 1rem;
  max-width: 250px;
  text-decoration: none;
}

.contactMe {
  display: inline;
  margin-top: 3rem;
  color: var(--pure-black);
  font-family: "Montserrat";
  font-size: clamp(30px, 4vw, 36px);
  text-align: center;
}

.contactMe a {
  margin-left: 10px;
  text-decoration: none;
  color: var(--pure-black);
  font-family: "Sansation";
  font-size: clamp(24px, 4vw, 36px);

  padding: 1rem;

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

@media (max-width: 950px) {

  .helloText {
    width: 100%;
    margin: 0;
    font-size: 2rem;
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

  .about-me p{
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
    margin-bottom: 1em;
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