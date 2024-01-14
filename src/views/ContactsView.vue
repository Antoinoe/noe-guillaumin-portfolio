<script>
    import PageTitle from '../components/PageTitle.vue';
  export default {
    components: {
      PageTitle
    }
  }
</script>

<template>
    <PageTitle name = "Contact"></PageTitle>
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
            <div class="contactTitle"><a target="_blank" href="https://www.linkedin.com/in/noe-guillaumin/">LinkedIn</a></div>
        </div>
        <div class="contactItem">
            <div class="contactTitle"><a target="_blank" href="https://github.com/Antoinoe">GitHub</a></div>
            <div class="contactContent"></div>
        </div>
        <div class="contactItem">
            <div class="contactTitle"><a target="_blank" href="https://noeguillaumin.itch.io">Itch.IO</a></div>
            <div class="contactContent"></div>
        </div>
        <div class="contactItem">
            <div class="contactTitle"><a target="_blank" href="../../public/pdf/nguillaumin_cv_en.pdf" download> Download my resume (EN)</a></div>
        </div>
        <div class="contactItem">
            <div class="contactTitle"><a target="_blank" href="../../public/pdf/nguillaumin_cv_fr.pdf" download> Download my resume (FR)</a></div>
        </div>
        </div>
    </div>
    
    
    

</template>


<style scoped>
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
