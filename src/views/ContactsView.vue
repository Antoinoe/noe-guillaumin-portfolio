<script>
import PageTitle from '../components/PageTitle.vue';
export default {
    components: {
        PageTitle,
    }
}
</script>

<template>
    <Navbar />
    <PageTitle name="Contact"></PageTitle>
    <div id="page_content">
        <div class="contactZone">
            <div class="contactItem">
                <div class="contactTitle">Email : </div>
                <div class="contactContent">noeguillaumin@gmail.com</div>
            </div>
            <div class="contactItem">
                <div class="contactTitle">Phone (FR) : </div>
                <div class="contactContent">+33 6 67 46 93 93</div>
            </div>
            <div class="contactItem">
                <div class="contactTitle"><a target="_blank"
                        href="https://www.linkedin.com/in/noe-guillaumin/">LinkedIn</a></div>
            </div>
            <div class="contactItem">
                <div class="contactTitle"><a target="_blank" href="https://github.com/Antoinoe">GitHub</a></div>
                <div class="contactContent"></div>
            </div>
            <div class="contactItem">
                <div class="contactTitle"><a target="_blank" href="https://noeguillaumin.itch.io">Itch.IO</a></div>
                <div class="contactContent"></div>
            </div>
            <!-- <div class="contactItem">
                <div class="contactTitle"><a target="_blank" href="/public/pdf/nguillaumin_cv_en.pdf" download>
                        Download my resume (EN) (not updated)</a></div>
            </div> -->
            <div class="contactItem">
                <div class="contactTitle"><a target="_blank" href="/pdf/noe_guillaumin_cv_2025_fr.pdf" download>
                        Download my resume (FR)</a></div>
            </div>
        </div>
    </div>
</template>


<style scoped>
#page_content {
    display: flex;
    flex-direction: column;
    min-height: 74vh;
    width: max-content;
}

.contactItem {
    margin-left: 1.5em;
    display: flex;
    font-size: 26px;
    padding: 0.1em;
    font-family: "Sansation";
    width: max-content;
}

.contactItem .contactTitle {
    color: var(--dark-bluegreen);
    padding: 0.1em;
}

.contactItem .contactTitle a {
    color: var(--dark-bluegreen);
    padding: 0.1em;
    text-decoration: underline;
}


.contactItem .contactContent {
    color: var(--pure-black);
    padding: 0.1em;
}
</style>
