<template>
    <PageTitle name = "Education"></PageTitle>
    <div class="educationContent">
        
        <div class="educationZone">
            <div class="educationBoxItem">
                <div class="educationBoxItemTitle">
                    <p>IIM Digital School - Institute for Future Technologies</p>
                    <p class="educationBoxItemSubTitle">Since 2022</p>
                </div>
                <div class="educationBoxItemAbout">
                    <p>It has been my second home for the last two years. Here, I learned almost everything. From molding to soldering and 3D printing, I learned how to take the initiative to create innovative projects. I found what I wanted to do by developing VR applications. The XR Telepresence Platform is the project that today makes me capable of creating immersive VR environments.</p>
                </div>
            </div>
            <div class="educationBoxItem">
                <div class="educationBoxItemTitle">
                    <p>IIM Digital School - Game Programming</p>
                    <p class="educationBoxItemSubTitle">from 2019 to 2022</p>
                </div>
                <div class="educationBoxItemAbout">
                    <p>
I like playing video games, but what interested me was the creation of them. I knew a bit about how to code back then, so it was completely logical for me to join the IIM Digital School to learn game programming. I learned a lot of things regarding video game conception, and by working on several game projects and game jams, I quickly got the hang of making Unity projects. By working for the startup Farmcube, I realized that I wanted to focus more on innovative projects and serious games. That's why I decided to quit the Video Game course to join the IFT.</p>
                </div>
            </div>
            <div class="educationBoxItem">
                <div class="educationBoxItemTitle">
                    <p>ESTIAM</p>
                    <p class="educationBoxItemSubTitle">From 2018 to 2019</p>
                </div>
                <div class="educationBoxItemAbout">
                    <p>"Learn in the morning, practice in the afternoon." Perfectly balanced, as all things should be. I learned during this first year the basics of DevOps, web development, and IoT. I had to quit ESTIAM for personal reasons.</p>
                </div>
            </div>
            <div class="educationBoxItem">
                <div class="educationBoxItemTitle">
                    <p>Highschool</p>
                </div>
                <div class="educationBoxItemAbout">
                    <p>The golden age... Got the diploma with mention!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    p{
        font-family:sans-serif;
    }

    .educationBoxItemTitle{
        border-style: solid;
        border-width: 5px;
        border-color: var(--dark-bluegreen);
        padding: 1em;
        
    }
    .educationBoxItemTitle p {
        color: var(--dark-bluegreen);
        font-size: 32px;
        font-weight: 600;
    }
    
    .educationZone {
        margin-left: 10%;
        margin-right: 10%;
        padding: 1em;
        padding-top: 2em;
        margin-top: 2em;
        display: flex;
        flex-direction: column;
        text-align: center;
        position: relative;
    }

    .educationBoxItemAbout p{
        color: var(--pure-black);
        padding: 1em;
    }

    .educationBoxItem {
        width: 35%; 
        margin-bottom: 1em;
        display: flex;
        flex-direction: column;
    }

    .educationBoxItem:nth-child(even) {
        margin-left: auto;
        margin-right: 100px;
    }

    .educationBoxItem:nth-child(odd) {
        margin-left: 100px;
        margin-right: auto;
    }
</style>
<script>
    import PageTitle from '../components/PageTitle.vue';
  export default {
    components: {
      PageTitle
    }
  }</script>