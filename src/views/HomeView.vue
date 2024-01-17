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
      <div class="linkItem"><a href=""></a></div>
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
  margin-top : 5vw;
  color : var(--mid-beige);
  font-family: sans-serif;
  font-size: 32px;
  text-align: center;
}

</style>
