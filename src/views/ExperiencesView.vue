<script>
import NavBar from '../components/NavBar.vue';
import PageTitle from '../components/PageTitle.vue';
export default {
    components: {
      PageTitle, NavBar
    }
  }
</script>

<template>
    <NavBar/>
    <div id="page_content">
    <PageTitle name = "Experiences"></PageTitle>
    <h3>Research Intern at INRIA</h3>
    <div class="subtitle">France - Rennes 35000 - 2023</div>
    <p class="expe_content">I had the incredible opportunity to work at INRIA. Collaborating with Gauthier Gendreau during this internship, we developed a Unity AR/VR application aimed at studying and comparing human feedback when interacting with a pseudo-haptic interface in both VR and AR environments.</p>
    <p class="expe_content">In virtual reality applications, immersion holds significant importance. The challenge of replicating the sensation of touching unreal objects has spurred extensive research for improvement. One prevalent method for achieving a sense of touch is through the use of vibration effects. Our objective was to develop a tactile device for users to interact with, visually presented as a device with simulated vibration effects. Through manipulating the visual effects, their intensity, and the strength of the vibrator, we aimed to determine which combination offered the most "realistic" experience to the user.</p>
    <img src="../../public/img/inria_diagram.png" alt="Diagram that shows how the user interacts with the application" width="480px" class="experienceImg">
    <h3>Unity AR Dev Intern at Farm3</h3>
    <div class="subtitle">France - Paris 75005 - 2022</div>
        <p class="expe_content">Farm3 is a French startup specializing in the creation of an optimized structure for vertical farming. The "Cube," with its 12m² floor size, houses shelves containing plants in a closed environment that provides the right amount of nutrition to the plants inside. My objective was to develop an augmented reality application allowing users to scan a plant, access its data, and make modifications as necessary.</p>
        <p class="expe_content">It's during this internship I've heavilly developped an interest to XR application. </p>
        <img src="../../public/img/shelf.png" alt="graphic of how the user interact in AR with vertical farming." width="480px" class="experienceImg">
        
    </div>
    

</template>


<style scoped>
    h2{
        color: var(--mid-red);
        font-size: 3em;
        font-family: sans-serif;
    }

    h3{
        margin-left: 5em;
        padding-top:1em ;
        color: var(--dark-bluegreen);
        font-size: 2em;
        font-family: sans-serif;
    }

    .subtitle{
        font-style: italic;
        font-size: 1.8em;
        margin-left: 6em;
        color: var(--pure-black);
        font-family: sans-serif;
    }

    .expe_content{
        margin-left: 10em;
        margin-right: 10em;
        font-size: 1.5em;
        text-justify: inter-word;
        color: var(--pure-black);
        font-family: sans-serif;
        text-align: center;
        min-width: 500px;
    }

    .experienceImg{
        margin: 5em;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-style: solid;
        border-width: 5px;
        border-radius: 5px;
        border-color: var(--mid-grey);
    }
</style>
