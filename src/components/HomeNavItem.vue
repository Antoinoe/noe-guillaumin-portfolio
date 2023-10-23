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
        margin : 0 4vw 0 4vw;
        background-color: var(--light-grey);
        border-style: solid;
        border-color: var(--light-grey);
        border-width: 0 8px 8px 8px;
        border-radius: 0 0 10px 10px;
      }

      .item-name {
        background-color: var(--mid-red);
        width:12vw;
        height: 100%;

        min-width: none;

        
        display: inline-block;
      
        align-items: center;
        text-align: center;
        font-size: 1.4vw;
        color :var(--mid-beige);
        text-transform: uppercase;
        font-family: sans-serif;

        border-radius: 0 0 10px 10px;
      }

      .item-name p{
        padding-top: 0.5vw;
      }


    </style>
    
    
      
      
      
      
      
      