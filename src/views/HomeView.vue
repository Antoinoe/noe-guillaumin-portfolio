<template>
  <div class="Container">
    <div class="Top">
      <div class="Top-Content">
        <div class="Name">
          <p class = "First-Name">Noé</p>
          <p class = "Last-Name">GUILLAUMIN</p>
        </div>
      </div>
      <div class="Top-Content">
        <img src= "../../public/img/nono_croped.jpg" alt="profile picture">
      </div>
    <div class="Top-Content"><p class="Subtitle">Improving Immersion in VR</p></div>
    </div>
    <div id="caution">/!\This portfolio is currently under construction, with several pieces of content yet to be added. More information about me and my projects will be available shortly. For inquiries, please contact me at : noeguillaumin@gmail.com . /!\</div>
    <div class="Bot">
      <div class="Separation"></div> 

      <div class="HomeNav">
        <HomeNavItem name="Projects" imageSrc ="./img/dm_capture_croped.png" />
        <HomeNavItem name="Experiences" imageSrc ="./img/experiences-croped.png"/>
        <HomeNavItem name="Education" imageSrc ="./img/education-croped.png"/>
        <HomeNavItem name="Contact" imageSrc ="./img/contact-cat-croped.png"/>
      </div>
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

.Container{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.Top {
  margin: 0.2vw;
  display: flex;
  flex: auto;
}

.Bot{
  background-color: var(--mid-grey);
  flex: auto;
}

.Top-Content {
  flex: 1;
  text-align: center;
}

.Top-Content img{
  width: 15vw;
  border-style: solid;
  border-width: 0.5vw;
  border-radius: 0.3vw;
  border-color: var(--light-grey);
}

.Name p{
  color : var(--mid-beige);
  font-family: sans-serif;
  font-size: 4vw;
  padding-top: -5px;
}

.First-Name{
  margin-bottom: -1px;
}

.Last-Name{
  margin-top: -1px;
}

.Subtitle{
  color : var(--mid-beige);
  font-family: sans-serif;
  font-size: 3vw;
  display: flex;
  margin-top:3em;
  margin-left:-2em;
}

.Separation{
  border: 4px solid var(--light-grey);
  text-align: center;
}

.HomeNav{
  display: flex;
  justify-content: center;  
  width: 100%;
}

#caution{
  color: rgb(194, 145, 55);
  text-align: center;
  font-size: 2em;
  font-family: sans-serif;
  margin: 1em;
}

  
</style>
