<template>
    <router-link :to=name class="item">
      <div class="item-name">
        <p>{{ name }}</p>
      </div>
      <div class="image-container">
        <img :src="imageSrc" alt="card">
      </div>

    </router-link>
      
    </template>
      
    <script>
    
      export default {

        name: "HomeNavItem",
        props: {
          name: String,
          imageSrc: String,
        }
      }
    </script>
      
    <style scoped> 
    @import url('../assets/tools.css'); 
      a {
        text-decoration: none;
      }

      .item{
        margin : 0 4vw 4vw 4vw;
       
        height:100%;

        border-style: solid;
        border-color: var(--light-grey);
        border-width: 0 .5vw .5vw .5vw;
        border-radius: 0 0 10px 10px;

        display: inline;
      }

      .item-name {
        background-color: var(--mid-red);

        width:100%;
        max-height:5vw;


        border-radius: 3px 3px 3px 3px;
        
        display: inline-block;
        align-items: center;
        text-align: center;

        font-size: 1.4vw;
        color :var(--mid-beige);
        text-transform: uppercase;
        font-family: sans-serif;       
      }

      .image-container {

        max-width: auto; 
        
        display: flex;
        align-items: center; 
        justify-content: center; 

      }

      .image-container img {
        max-width: 100%; 
        max-height: 100%; 
        width: 512px;
        display: block; 
        border-radius: 3px 3px 3px 3px;

      }



    </style>
    
    
      
      
      
      
      
      