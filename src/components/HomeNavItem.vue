<template>
    <router-link :to=name class="item"  @mouseover="extendDiv" @mouseleave="resetDiv" style="{padding-bottom:paddingBottom+'px';}">
      <div class="item-name">
        <p>{{ name }}</p>
      </div>
      <div class="image-container">
        <img src="../assets/img/nono_croped.jpg" alt="test_photo">
      </div>

    </router-link>
      
    </template>
      
    <script>
    
      export default {
        data(){
          return{
            isHovered: false,
            paddingBottom: 0,
          };
        },
        methods: {
          extendDiv() {
            // Change the height when hovering
            this.isHovered = true;
            this.divHeight = 250; // Set the extended height you want
            console.debug("entering");
          },
          resetDiv() {
            // Reset the height when not hovering
            this.isHovered = false;
            this.divHeight = 0; // Set the initial height
            console.debug("leaving");
          },
        },
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
        margin : 0 4vw 4vw 4vw;
       
        height:100%;

        border-style: solid;
        border-color: var(--light-grey);
        border-width: 0 8px 8px 8px;
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

        max-width: auto; /* Use the full width of the container */
        display: flex;
        align-items: center; /* Vertical centering */
        justify-content: center; /* Horizontal centering */

      }

      .image-container img {
      max-width: 100%; /* Ensure the image does not exceed its container */
      max-height: 100%; /* Ensure the image does not exceed its container */
      display: block; /* Remove any extra spacing around the image */

      }



    </style>
    
    
      
      
      
      
      
      