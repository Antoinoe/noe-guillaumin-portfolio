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
                    <li><div class="summarry-content-item"><a href="#StateOfTheArt" class="summary-item-title">State Of The Art</a></div></li>
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
            <div class="projectSubContentImage">
                <img src="../../public/img/xrtp_1.webp" width="60%" alt="Screenshot of the XR telepresence application on the main scene with the 3D environment and phsysically based sky.">
                <p>1] Screenshot of the XR telepresence application on the main scene with the 3D environment and phsysically based sky.</p>
            </div>
            <ol>
                <li>
                    <div class="projectSubItem">
                        <div id="About" class="projectSubTitle">About</div>
                        <div class="projectSubContent">
                            <p>
                                Virtual Reality (VR) has grow a lot over the past few years, researchers are trying to make these applications more <b>realistic</b> and <b>immersive</b>.
                                <b>Telepresence</b> is a regroupment of technologies that allows someone to physically feel being at a distant place while staying at its initial position. 
                                This feeling is achieved by fooling the human senses, and it's not only made by recreating a virtual realistic environment, it's also by fooling the sense of smell, touch, hear and even walking.
                            </p>
                            <p>
                                The XR Telepresence Platform is a Virtual Reality application that aims to make a step further the telepresence aspect, by creating a ground and celestial environment based on real-time environmental data.
                                These data can be used afterwards by future connected devices that will be able to trick human senses. 
                                The most intuitive exemples would be a thermal suit that takes the temperature as an input, and wind fans with wind direction.
                            </p>
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="StateOfTheArt" class="projectSubTitle">State Of The Art</div>
                        <div class="projectSubContent">
                            <p> This application is primarly inspired by the Doppelmarsh project. It is a Unity3D VR Application developped by the MIT Medial Lab in 2014 that aimed to better visualize environnemental data. Their data came from the Tidmarsh, a reabilitation of a marsh near Boston, Massachusetts.
                                Once they recieved these data, it changed the weather in the sky, and a simple day-night cycle was implemented. During the next years after the first version of this research application, other researchers has added their on project to it. 
                                The lack of code architecture made each projects a bit harder to implement, to the point where some could cause issue to others.
                            </p>
                            <p>
                                The Doppelmarsh project arrived at the IFT (Institute for Future Technologies), previously known as the "De Vinci Innovation Center". In 2022 I joined the IFT and learned the concept of telepresence application. I believed this project could be a great step forward telepresence, since it was communicating with real-time data that changes the environment.  
                                After making proof of concept of differents features, it was now time to upgrade this Unity project. Even though the main goal was to simply upgrade the application, it became quickly a necessity to remake the entire code architecture in order to make the application modular and thus usable by other IFT's students who wants to implement their own innovative projects on the platform.
                            </p>
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="PlatformArchitecture" class="projectSubTitle">Platform Architecture</div>
                        <div class="projectSubContent">
                            <p>The XR Telepresence Platform is developped on the game engine Unity3D. This game engine has multiple render system. Doppelmarsh was on URP (Universal Render Pipeline), which is the default render system when developpers want to add some visual effects to their application.
                                Unity also have a High Definition Render Pipeline. It is costly in ressources, but in return can handle high-resolution textures, complex shaders, and a physically-based celestial environment. .</p>
                            <p>Several plugins exists to make a Virtual Reality application. For maximum compatibility, I decided to chose OpenXR, a library with not much features in it, but compatible with all VR headsets.</p>
                            <p>The Core features contains data that are required for most sub-projects to work properly. They give access to player and online services.</p>
                            <p>After that comes the Project Manager. It is the central component for all sub-projects. From the unity editor, it is possible to create a sub-project, with it's own folders and classes. First of all, there is a script Project.cs that contain all shared functions for each project, such as ActivateProject(), DeactivateProject() or GetProjectDescription(), just to name a few. After that, there is a template : it's a folder containing a c# folder inheriting the Project class and an Asset folder, where all c# classes, textures and prefab will be stored.</p>
                            <p>A sub-project is a feature that can be added to the session at the start of the application. Deactivating a sub-project will also deactivate all sub-project that are dependent to this one. Here's what a sub-project UI looks like in the inspector. It's here where dependencies set.</p>
                            <img src="../../public/img/project_exemple.png" alt="Exemple of a sub-project in the Unity inspector.">   
                        </div>
                    </div>
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="CelestialEnvironment" class="projectSubTitle">Celestial Environment</div>
                        <div class="projectSubContent">
                            <p> Weather is a vast word. For this project, it consist of managing the clouds, the wind, the rain and the snow. 
                            The first feature created was the CloudManager, it takes a float between 0 & 1 as an input and modify the following values of the volumetric cloud component: 
                            - Cloud Density
                            - Shape Factor
                            - Light Exposure

                            here's the result : 
                            </p>
                            <img src="../../public/img/cloud_coverage.png" alt = "Screenshot of the top-view of the terain with only the terrain textures plus the snow texture" width="340px"/>
                            <p>
                                After that came the SnowHandler. Generating snow on most GameObjects in the scene was quite easy since it consisted of changing a value of the "TriForge Snow Controller" GameObject provided by the "Real Landscape - Valley Forest" asset pack. The snow on the ground layers was a bit trickier. The Unity Terrain can have a parameter in its material called "Height Transition", which means that a layer can be set to a specific height by setting the G (of the RGBA) value of the normal map of the layer texture to a desired value.

                                these lines of code allow to dynamically change this value, which result in a dynamic ground snow system without using complex shaders.
                                the parameter HeightBase correspond to a float value between -1 and 1, where -1 means no texture at all and 1 means full texture opacity
                            </p>
                            <p>var layer = _terrain.terrainData.terrainLayers[_terrainLayerIndex];</p>
                            <p>layer.maskMapRemapMax = new Vector4(1,1,HeightBase,1);</p>
                            <p>layer.maskMapRemapMin = new Vector4(0,0,0,0);</p>
                                    
                            <p>Which gives the following terrain texture map when the value is at 1 : </p>
                            
                            <img src="../../public/img/terrain_snow_texture_top_view.png" alt = "Screenshot of the top-view of the terain with only the terrain textures plus the snow texture"/>
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="EnvironmentDataCollection" class="projectSubTitle">Environment Data Collection</div>
                        <div class="projectSubContent">
                            <p>Tidmarsh is a project conducted by the MIT in 2011 that collects and display on a website real-time environmental data of an overexploited craberry farm. The MIT Media Lab have an API that still collect these data, and it's thanks to this API the Doppelmarsh project could display these data in another way than 2D Diagrams. It collects 2 types of data : 
- Numerical data : temperature, lighting, atmospheric pressure, humidity, etc.
- Ambient data : streaming audio

To get this data, we first have to find a base station. A base station is simply a regroupment of sensors that collects numeric data as shown above. 
The list of devices are present here : https://chain-api.media.mit.edu/devices/?site_id=7, and to know which one we want, we can see the one available on the Tidmarsh website : https://tidmarsh.media.mit.edu/data/herring.</p>
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="ExternalDevices" class="projectSubTitle">External Devices</div>
                        <div class="projectSubContent">
                            <p>The Olfactive interface is a device imagined by Romain Manoilov in 2022 that throw odors to a user to put they in a choosen ambiance. Smell can be very missleading for people. A smell of fresh menth will make the user feel more cold, while spices makes the user feel more hot. Virtual reality has tried to implement smells in their applications, but for most them, it's a device attached to the headset, and not easily procurable. So we decided with Romain Manoilov and Clement Duhart to implement his interface olfactive to XRTP. My part consisted on craeting a new sub-project where I built smellboxes, which are trigger collision boxes that detects when an entity enters or exit it. Each smellbox was given a type of smell and an intensity. Then a http request was thrown to the ESP86 of the olfactive interface thanks to the plugin Udiono, made by Marc Teyssier.</p>
                        </div>
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
                        <div class="projectSubContent">
                            <p>"Ocultas" is a fun couch-type game where from 2 to 4 players, you have to hide your character among several twins that resemble you. The goal is to find where your friends are before being spotted.</p>
                            <a href="https://noeguillaumin.itch.io">Check the game on itch.io!</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="XenosHeresy" class="projectSubTitle">Xenos Heresy</div>
                        <div class="projectSubContent">
                            <p>A turn-by-turn strategy mobile game where you control 2 characters. The goal is to defeat all monsters on the level and kill the Great Xenos! I principally worked on the UI design and coding.</p>
                            <a href="https://noeguillaumin.itch.io">Check the game on itch.io!</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="projectSubItem">
                        <div id="GameJams" class="projectSubTitle">Game Jams</div>
                        <div class="projectSubContent">
                            <p>During my 3 years learning game programming at IIM, I had the opportunity to participate in several game jams. My favorite one was definitely "Yeet The Gift" (yup, I found the name of this one). It's a first-person shooter where you incarnate Santa with a gift-missile launcher that combats his rebellious elves. I worked on some features like the reloading and the UI.</p>
                            <a href="https://noeguillaumin.itch.io">Check the games on itch.io!</a>
                        </div>
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
        top:245px;
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

    .projectSubContent p{
        color : var(--mid-beige);
        font-family: sans-serif;
        font-size: 16px;
        text-align: justify;
        text-justify :inter-word;
    }

    .projectSubContentImage img{
        border-style: solid;
        border-color: var(--light-grey);
        border-width: 5px;
        border-radius: 5px;
    }

    .projectSubContentImage{
        margin: 2em;
        display: inline-flexx;
        text-align: center;
    }
    .projectSubContentImage p{
        color : var(--mid-beige);
        font-family: sans-serif;
        font-size: 12px;
    }

    .projectItemSeparation {
        margin: 5em 0 5em 0;
    }
    
    .projectSubContent a {
        color :var(--mid-beige);
        font-size: 12px;
    }

</style>
