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
        text-align: center;
        width: 100%;
        margin-left :5em;
        margin-right:5em;

        border-style: solid;
        border-color: var(--light-grey);
        border-width: 0 5px 5px 5px;
        border-radius: 0 0 5px 5px;
        
      }

      .item-name {
        background-color: var(--mid-beige);
        border-style: solid;
        border-color: var(--mid-red);
        border-width: 5px;
        font-size: 24px;
        font-weight: 600;
        color :var(--dark-grey);
        text-transform: uppercase;
        font-family: sans-serif; 
      }

      .image-container {

          display: flex;
          align-items: center; 
          justify-content: center; 

      }

      .image-container img {
        max-width: 100%;  
      }



    </style>
    
    
      
      
      
      
      
      