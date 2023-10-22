<template>
<div class="Top">
  <div class="Top-Content">
    <div class="Name">
      <p class = "First-Name">Noé</p>
      <p class = "Last-Name">GUILLAUMIN</p>
    </div>
  </div>

  


  <div class="Top-Content">
    <img src= "../assets/img/nono_croped.jpg" alt="profile picture" width="240px">
  </div>
  <div class="Top-Content"><p class="Subtitle">Discover Me!</p></div>
</div>

<div class="Bot">
  <div class="Separation"></div> 

  <div class="HomeNav">
    <HomeNavItem name="Projects" />
    <HomeNavItem name="Experiences" />
    <HomeNavItem name="Education" />
    <HomeNavItem name="Contact" />
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
.Top {
  margin: 0.5vw;
  display: flex;
}

.Bot{
  background-color: var(--mid-grey);
  
}

.Top-Content {
  flex: 1;
  text-align: center;
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
  margin-left: -1.5em;
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
