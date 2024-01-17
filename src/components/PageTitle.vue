<template>
    <div class="title">
        <p>{{ name }}</p>
    </div>
      
    </template>
      
    <script>
    
      export default {
        name: "TitleName",
        props: {
          name: String,
        }
      }
    </script>
      
    <style scoped> 
       .title p{
        margin-left: 0.8em;
        margin-top: 0;
        padding: 0.3em;
        border-style: solid;
        border-color: var(--mid-red);
        border-radius: 5px;
        border-width: 2px;
        width: max-content;
        font-size: 42px;
        font-family: sans-serif;
        color: var(--mid-beige);
        background-color: var(--mid-grey);
    }

    </style>
    
    
      
      
      
      
      
      