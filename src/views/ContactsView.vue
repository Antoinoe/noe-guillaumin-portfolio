<script>

</script>

<template>
    <div class="title"><p>Contact</p></div>
    <div id="page_content">
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
            <div class="contactTitle"><a href="../../public/pdf/nguillaumin_cv_en.pdf" download> Download my resume (EN)</a></div>
        </div>
        <div class="contactItem">
            <div class="contactTitle"><a href="../../public/pdf/nguillaumin_cv_fr.pdf" download> Download my resume (FR)</a></div>
        </div>
        </div>
    </div>
    
    
    

</template>


<style scoped>
.title p{
        margin-left: 1.3em;
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

    #page_content{
        border-style: solid;
        border-color: var(--light-grey);
        width: max-content;
        margin: 3.5em;
    }

    .contactItem{
        margin: 1em;
        display: flex;
        font-size: 26px;
        padding: 0.1em;
        font-family: sans-serif;
        border-style: solid;
        border-color: var(--light-grey);
        width: max-content;
        background-color: var(--mid-grey);
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
