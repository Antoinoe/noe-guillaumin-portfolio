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
        <img src= "img/nono_croped.jpg" alt="profile picture">
      </div>
    <div class="Top-Content"><p class="Subtitle">Discover Me!</p></div>
    </div>

    <div class="Bot">
      <div class="Separation"></div> 

      <div class="HomeNav">
        <HomeNavItem name="Projects" imageSrc ="img/dm_capture_croped.png" />
        <HomeNavItem name="Experiences" imageSrc ="img/experiences-croped.png"/>
        <HomeNavItem name="Education" imageSrc ="img/education-croped.png"/>
        <HomeNavItem name="Contact" imageSrc ="img/contact-cat-croped.png"/>
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
@import url('../assets/tools.css');

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
  width: 12vw;
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
  font-size: 4vw;
  margin-top: 2em;
  text-align: left;
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



  
</style>
