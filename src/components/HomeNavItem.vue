<template>
    <router-link :to=name class="item">
      <div class="item-name">
        <p>{{ name }}</p>
      </div>
    </router-link>
      
    </template>
      
    <script>
    
      export default {
        name: "HomeNavItem",
        props: {
          name: String
        }
      }
    </script>
      
    <style scoped> 
    @import url('../assets/tools.css'); 
      a {
        text-decoration: none;
      }

      .item{
        margin : 0vw 2vw 1vw 1vw;
        background-color: var(--light-grey);
        border-style: solid;
        border-color: var(--light-grey);
        border-width: 0 8px 8px 8px;
        border-radius: 0 0 5px 5px;
      }

      .item-name {
        background-color: var(--mid-red);
        padding : 1vw 4vw 1vw 4vw;

        font-size: 22px;
        color :var(--mid-beige);
        text-transform: uppercase;
        font-family: sans-serif;

        border-radius: 0 0 5px 5px;
        

      }


    </style>
    
    
      
      
      
      
      
      