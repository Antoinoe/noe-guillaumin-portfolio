<script>

</script>

<template>
    <h2>CONTACT</h2>
    <div class="contactZone">
        <div class="contactItem">
        <div class="contactTitle">Email : </div>
        <div class="contactContent">noeguillaumin@gmail.com</div>
    </div>
    <div class="contactItem">
        <div class="contactTitle">Phone (FRA) : </div>
        <div class="contactContent">+33 6 67 46 93 93</div>
    </div>
    <div class="contactItem">
        <div class="contactTitle"><a href="https://www.linkedin.com/in/noe-guillaumin/">LinkedIn</a></div>
    </div>
    <div class="contactItem">
        <div class="contactTitle"><a href="https://github.com/Antoinoe">GitHub</a></div>
        <div class="contactContent"></div>
    </div>
    <div class="contactItem">
        <div class="contactTitle"><a href="https://noeguillaumin.itch.io">Itch.IO</a></div>
        <div class="contactContent"></div>
    </div>
    <div class="contactItem">
        <div class="contactTitle"><a href="../../public/pdf/nguillaumin_cv_en.pdf" download>  Resume (EN)</a></div>
    </div>
    <div class="contactItem">
        <div class="contactTitle"><a href="../../public/pdf/nguillaumin_cv_fr.pdf" download>  Resume (FR)</a></div>
    </div>
    </div>
    
    

</template>


<style scoped>
    h2{
        margin: 1em;
        color: var(--mid-red);
        font-size: 3em;
        font-family: sans-serif;
    }
    .contactZone{
        margin: 2em;
    }
    .contactItem{
        margin: 1em;
        display: flex;
        font-size: 2em;
        font-family: sans-serif;
    }
    .contactItem .contactTitle{
        color: var(--mid-red);
        padding: 0.2em;
    }
    .contactItem .contactTitle a{
        color: var(--mid-red);
        padding: 0.2em;
        text-decoration: underline;
    }


    .contactItem .contactContent{
        color: var(--mid-beige);
        padding: 0.2em;
    }
</style>
