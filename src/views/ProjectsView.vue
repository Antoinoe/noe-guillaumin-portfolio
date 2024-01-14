<script>
    import PageTitle from '../components/PageTitle.vue';
  export default {
    components: {
      PageTitle,
    }
  }
</script>

<template>
    <PageTitle name = "Projects"></PageTitle>
    <div id="content">
        <div class="summarry">
            <div class="summarry-title">
                <a href="#">Overview</a>
            </div>
            <div class="summarry-content">
                <div class="summarry-content-item"><img class="elipse-section" src="../../public/img/Ellipse1.png" alt="section"><a href="#XRTelepresencePlatform" class="section-title">XR Telepresence Platform</a></div>
                <ol>
                    <li><div class="summarry-content-item"><a href="#About" class="summary-item-title">About</a></div></li>
                    <li><div class="summarry-content-item"><a href="#PlatformArchitecture" class="summary-item-title">Platform Architecture</a></div></li>
                    <li><div class="summarry-content-item"><a href="#OpenXRKeyboard" class="summary-item-title">OpenXR Keyboard</a></div></li>
                    <li><div class="summarry-content-item"><a href="#CelestialEnvironment" class="summary-item-title">Celestial Environment</a></div></li>
                    <li><div class="summarry-content-item"><a href="#EnvironmentDataCollection" class="summary-item-title">Environment Data Collection</a></div></li>
                    <li><div class="summarry-content-item"><a href="#ExternalDevices" class="summary-item-title">External Devices</a></div></li>
                    <li><div class="summarry-content-item"><a href="#FutureAdditions" class="summary-item-title">Future Additions</a></div></li>
                </ol>
                
                <div class="summarry-content-item"><img class="elipse-section" src="../../public/img/Ellipse1.png" alt="section"><a href="#VideoGames" class="section-title">Video Games</a></div>
                <ol>
                    <li><div class="summarry-content-item"><a href="#Occultas" class="summary-item-title">Occultas</a></div></li>
                    <li><div class="summarry-content-item"><a href="#XenosHeresy" class="summary-item-title">Xenos Heresy</a></div></li>
                    <li><div class="summarry-content-item"><a href="#GameJams" class="summary-item-title">Game Jams</a></div></li>
                </ol>
            </div>
        </div>

        <div id="writingZone">
            <div id="XRTelepresencePlatform" class="projectTitle">XR Telepresence Platform</div>
            <ol>
                <li>
                    <div class="projectSubItem">
                        <div id="About" class="projectSubTitle">About</div>
                    </div>
                    <div class="projectSubContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque at quo, praesentium sint illum aut quam quia aliquam eum consequatur amet dolorem eveniet corporis numquam quas esse in deleniti!</p>
                    </div>
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="PlatformArchitecture" class="projectSubTitle">Platform Architecture</div>
                    </div>
                    <div class="projectSubContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque at quo, praesentium sint illum aut quam quia aliquam eum consequatur amet dolorem eveniet corporis numquam quas esse in deleniti!</p>
                    </div>
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="CelestialEnvironment" class="projectSubTitle">Celestial Environment</div>
                    </div>
                    <div class="projectSubContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque at quo, praesentium sint illum aut quam quia aliquam eum consequatur amet dolorem eveniet corporis numquam quas esse in deleniti!</p>
                    </div>
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="EnvironmentDataCollection" class="projectSubTitle">Environment Data Collection</div>
                    </div>
                    <div class="projectSubContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque at quo, praesentium sint illum aut quam quia aliquam eum consequatur amet dolorem eveniet corporis numquam quas esse in deleniti!</p>
                    </div>
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="ExternalDevices" class="projectSubTitle">External Devices</div>
                    </div>
                    <div class="projectSubContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque at quo, praesentium sint illum aut quam quia aliquam eum consequatur amet dolorem eveniet corporis numquam quas esse in deleniti!</p>
                    </div>
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="FutureAdditions" class="projectSubTitle">Future Additions</div>
                    </div>
                    <div class="projectSubContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque at quo, praesentium sint illum aut quam quia aliquam eum consequatur amet dolorem eveniet corporis numquam quas esse in deleniti!</p>
                    </div>
                </li>
            </ol>

            <div class="projectItemSeparation"></div>
            
            <div id="VideoGames" class="projectTitle">Video Games</div>
            <ol>
                <li>
                    <div class="projectSubItem">
                        <div id="Occultas" class="projectSubTitle">Occultas</div>
                        <p class="projectSubContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et, iusto distinctio tempore quod inventore earum labore fuga aliquam illo corporis assumenda perferendis iure, excepturi, harum ex sunt libero unde!</p>
                    </div>
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="XenosHeresy" class="projectSubTitle">Xenos Heresy</div>
                        <p class="projectSubContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et, iusto distinctio tempore quod inventore earum labore fuga aliquam illo corporis assumenda perferendis iure, excepturi, harum ex sunt libero unde!</p>
                    </div>
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="GameJams" class="projectSubTitle">Game Jams</div>
                        <p class="projectSubContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et, iusto distinctio tempore quod inventore earum labore fuga aliquam illo corporis assumenda perferendis iure, excepturi, harum ex sunt libero unde!</p>
                    </div>
                </li>
            </ol>
            
            
            
            
            
            
            
            
            
            
        </div>
    </div>
</template>

<style>
    .summarry{
        width:max-content;
        height:max-content;
        position : fixed;
        background-color: var(--mid-grey);
        border: solid; 
        border-color:var(--mid-red);
        border-radius: 5px;
        top:205px;
        left : 3.5em;
        display: block;
        padding: 0.2em;
    }

    .summarry-content li{
        color: var(--mid-beige);
        font-family: sans-serif;
    }

    .summarry-title a{
        margin: 1em;
        font-family: sans-serif;
        color : var(--mid-beige);
        text-decoration: underline;
        font-size: 25px;
    }

    .summarry-content{
        margin: 1em;
    }

    .summarry-content-item{
        display: flex;
        margin:10px;
    }

    .summarry-content-item a{
        margin: 0px 10px 0px 0px;
        text-decoration: none;
    }

    .elipse-section{
        padding:0 0.5em 0 0;
        width: 15px;
        height: 15px;
    }
    .section-title{

        color: var(--mid-beige);
        font-family: sans-serif;
    }
    .summary-item-title{
        text-decoration: none;
        color: var(--mid-beige);
    }

    #writingZone{
        margin-left: 400px;
        margin-right: 3em;
        margin-bottom: 1em;
        width: auto;
        height: auto;
        background-color: var(--mid-grey);
        border: solid; 
        border-color:var(--light-grey);
        border-radius: 5px;
        padding: 2em;
    }

    .projectTitle{
        color : var(--mid-red);
        font-family: sans-serif;
        font-size: 36px;
        border-style: solid;
        border-width: 5px;
        border-radius: 5px;
        border-color: var(--mid-red);
        background-color: var(--mid-beige);
        width: max-content;
        padding: 0.2em;
    }

    #writingZone li{
        color : var(--mid-red);
        font-family: sans-serif;
        font-size: 24px;
        margin-left: 0.2em;
        
    }

    .projectSubTitle{
        color : var(--mid-red);
        font-family: sans-serif;
        font-size: 24px;
    }

    .projectSubContent{
        color : var(--mid-beige);
        font-family: sans-serif;
        font-size: 16px;
        text-justify: auto;
    }

    .projectItemSeparation{
        margin: 5em 0 5em 0;
    }

</style>
