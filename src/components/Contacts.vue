<script>
export default {

}
</script>

<template>
    <div class="contactContent">
        <div class="contactItem">
            <p class="contactTitle">Email : </p>
            <p class="contactContent">noeguillaumin@gmail.com</p>
        </div>
        <div class="contactItem">
            <p class="contactTitle">Phone (FR) : </p>
            <p class="contactContent">+33 6 67 46 93 93</p>
        </div>
        <div class="contactItem">
            <p class="contactTitle"><a target="_blank" href="https://www.linkedin.com/in/noe-guillaumin/">LinkedIn</a>
            </p>
        </div>
        <div class="contactItem">
            <p class="contactTitle"><a target="_blank" href="https://github.com/Antoinoe">GitHub</a></p>
            <p class="contactContent"></p>
        </div>
        <div class="contactItem">
            <p class="contactTitle"><a target="_blank" href="https://noeguillaumin.itch.io">Itch.IO</a></p>
            <p class="contactContent"></p>
        </div>
        <div class="contactItem">
            <p class="contactTitle"><a target="_blank" href="/pdf/noe_guillaumin_cv_2025_fr.pdf" download>
                    Download my resume (FR)</a></p>
        </div>
    </div>

</template>


<style scoped>

.contactContent{
    /* margin-top: 2rem; */
}

.contactItem {
    display: flex;
    justify-content: flex-start;
}

    .contactContent, .contactTitle{
        font-size: 22px;
        margin: 0.4rem;
    }

.contactTitle {
    font-family: "Sansation";
    color: var(--dark-bluegreen);
}

.contactTitle a {
    color: var(--dark-bluegreen);
    text-decoration: underline;
    transition: ease 0.3s;
}

.contactTitle a:hover {
    color: var(--mid-bluegreen);
    transition: ease 0.3s;
}

.contactContent {
    font-family: "Montserrat";
    color: var(--pure-black);
}

@media (max-width : 768px) {
    .contactItem {
        justify-content: center;
    }

    .contactContent, .contactTitle{
        font-size: 16px;
        margin: 0.4rem;
    }
}
</style>
