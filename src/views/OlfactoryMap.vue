<template>
    <div class="pageContent">
        <div class="pageHeader">

            <img class="headerImage" src="/img/smells_thumbnail.webp" alt="Header Image">
            <div class="headerOverlay">
                <h2 class="headerPageTitle">2D Olfactory Map</h2>
                <p class="headerTags">2025 - DevTool - Unity</p>
            </div>
            <div class="returnToHomePage"><router-link to="/">
                    <p>&lt; Return</p>
                </router-link></div>
            <a href="https://github.com/Antoinoe/2D-Olfactory-Map" target="_blank" class="githubIcon"><img
                    src="/img/github_white.png" alt="github logo"></a>
        </div>
        <div class="pageBody">
            <div class="chapter">
                <h3>1. Introduction</h3>
                <h4>A. Context & Previous Work</h4>
                <p>When I first arrived at the <a class="link" href="https://ift.devinci.fr" target="_blank">IFT</a>, I
                    met <a class="link" href="https://ift.devinci.fr/member/romain-manoilov3" target="_blank">Romain
                        Manoilov</a>, a student who worked on a device called the <a class="link"
                        href="https://ift.devinci.fr/augmented-olfactory-interface-for-telepresence-in-metaverse"
                        target="_blank">"Olfactory Interface"</a> that can provide diverse scents to a mobile user.
                    At the same time, the VR project <a href="https://ift.devinci.fr/projects/doppelmarsh-2022"
                        target="_blank">Doppelmarsh</a> caught my attention, and we wanted to implement his
                    project into the VR application.
                </p>
                <p><a href="https://ift.devinci.fr/projects/doppelmarsh-2022" target="_blank">Doppelmarsh</a> is a
                    project that was conducted by the MIT Media Lab in 2014. Based on <a
                        href="https://tidmarsh.media.mit.edu" target="_blank">Tidmarsh</a>, they
                    recreated a marsh that exists in real life to observe in VR how the terrain would heal over decades
                    of overfarming.</p><br>
                <p>The objective of the project was to deliver a scent to the user based on its position in the VR
                    application.
                    To detect the player position, we used the unity box colliders. A box collider is an invisible box
                    that detects when a specific object enters,
                    stays, or leave. For the demonstration, a smellbox is linked to a scent and an
                    intensity. <i>(eg: type="Forest", intensity=0.5)</i> The results show an improve of the sensation of
                    telepresence inside VR applications.</p>
                <figure class="simpleColliderBox">
                    <img src="/img/simple_collixer_box_labeled.webp" alt="A box collider inside the unity software">
                    <figcaption class="captionText">A box collider inside the unity software, linked to a scent and an
                        intensity.</figcaption>
                </figure>
                <h4>B. Limitation</h4>
                <p>While the solution works on a small open area for a demo, it becomes clear that this cannot be
                    applied to an application with a large terrain, with more scents.</p>
                <p>Why? In our previous experiment, une collider box = one scent and its intensity. On a larger project,
                    with way more scents diversity, and the necessity to have a graduate scent's intensity curve,
                    collider boxes become harder to manage. </p>
                <figure class="combinedColliderBox">
                    <img src="/img/terrain_up_all_combined_collider_boxes.webp"
                        alt="The map from the top-view with the collider boxes for each scents. (blue : water, green : forest, orange : marsh)">
                    <figcaption class="captionText">The Unity terrain from the top-view with the collider boxes for each
                        scents.
                        (blue :
                        water, green : forest, orange : marsh)</figcaption>
                </figure>
                <p>The image above illustrates how cluttered the scene can get as more scent are added. Note that
                    it shows the box colliders as if the intensity were always set to maximum. To create a gradual
                    intensity, we need to add multiple box colliders with lower intensity values to form a kind of
                    gradient. The smoother and more precise you want the scent intensity to be, the more colliders
                    you'll need, and the messier the scene becomes.</p>
                <p>On a small terrain with a few scents, it's still managable, but our terrain here is 512m². I wanted
                    to find a way for developers to easily implement, manage, and scale projects that include olfactory
                    feedback across large, open, and complex environments.</p>
                <h4>C. Texture-based olfactory data</h4>
                <p>One possible solution is to use a texture-based approach.</p>
                <p>Instead of using collider boxes, we use a top-down view of the terrain and paint on separate layers.
                    Each layer is a texture that represents a specific scent. The transparency <i>(alpha)</i> value of
                    each
                    pixel defines the intensity of that scent at the corresponding position on the terrain.</p>
                <p>This allow for better development of feature including olfactory feedback,</p>
                <p>The 2DOlfactory Map represents each scent as a 2D texture, where the alpha channel defines its
                    intensity. These textures are scaled to the terrain, allowing smooth and precise scent transitions.
                    Each scent has its own texture, making it easy to layer and combine multiple scents.</p>
                <p>
                    The process involves two steps: creating the scent textures in external tools, then importing them
                    into Unity for real-time interaction. At runtime, the system reads the alpha value at the player's
                    position and adjusts the olfactory device accordingly.
                </p>
                <p>
                    This method offers better precision, flexibility, and scalability than traditional approaches.
                    Although limited to static terrains, it provides a solid foundation for immersive experiences by
                    syncing scents with visuals.
                </p>
                <figure class="smell0">
                    <img src="/img/smell1.webp" alt="2D Olfactory Texture (for the marsh scent)">
                    <figcaption class="captionText">2D Olfactory Texture (for the marsh scent). The whiter the pixel's
                        color is, the more intense the scent is.</figcaption>
                </figure>
            </div>
            <div class="chapter">
                <h3>2. Implementation</h3>
                <h4>A. How to make a texture</h4>
                <p>
                    Any drawing software that handle alpha will do it. For this project, the texture were made on
                    Photoshop.
                </p><br>
                <p>The steps are quite simple : </p>
                <ol>
                    <li>Take a screenshot of the top view of your terrain in your game engine.</li>
                    <li>Open your drawing software, and create a squared shape canvas <i>(eg. 1024*1024)</i>. Be careful
                        though, don't create a texture too large, or you might experience performance issues.</li>
                    <li>Place the screenshot of your terrain on your drawing software to determine where to draw.</li>
                    <li>Start drawing. This is the fun part. Any color will do. The most important thing is to know
                        how you want to draw your transparency. Try multiple brushes to see how they affect your
                        drawing. <br>
                        You might want to be careful because if your texture and your terrain is for example 512*512, a
                        pixel
                        length is equal to one meter, so your drawing should be precise depending on your needs.</li>
                    <li>Before exporting your texture, you want to check if there are "mistakes" in your drawing.
                        Try to put a black-colored layer under your drawing to see how your alpha is. I personally got
                        some
                        bad surprises where some regions were not correctly drawn.</li>
                    <li>To avoid any rescale of your canvas when exporting, you might want to take your drawing
                        tool and set its alpha to 1%. Then, draw a point at each corner of your canvas.</li>
                    <li>Hide all layer except your olfactory texture and export it as a .png file.</li>
                    <li>Your texture is ready. We'll now see how to read it in Unity, and then how to send the data
                        to the Olfactory Interface.</li>
                </ol>

                <h4>B. Read data</h4>
                <p><b>Note : The project is available on <a href="https://github.com/Antoinoe/2D-Olfactory-Map"
                            target="_blank" class="link">GitHub</a>.</b></p><br>
                <p>We need several informations : </p>
                <ul class="dashed">
                    <li>how many scent are available?</li>
                    <li>what are the size of the textures?</li>
                    <li>the player's position</li>
                    <li>the delay between each requests <i>(you don't want to read all of your textures 60 times per
                            second, but
                            maybe once or twice every 10 seconds)</i></li>
                </ul>
                <p>You want to have a structure that looks like this :</p>
                <figure class="drawioOI1">
                    <img src="/img/drawio_oi_1.webp"
                        alt="Simplified representation of the code architecture for reading the textures">
                    <figcaption class="captionText">Simplified representation of the code architecture for reading the
                        textures</figcaption>
                </figure>
                <p>The <b><i>ScentTexReader.cs</i></b> script stores a list of the textures and their corresponding
                    scent and intensity.
                    When triggered <i>(by the script I'll explain in the next part)</i>, it takes the position of the
                    user in
                    Unity, and map it to each textures. Then, it retrieves the alpha of the pixel on the texture and set
                    it to the intensity value OlfactoryData struct.</p>
                <h4>C. Communication to the device</h4>
                <p>The Olfactory Interface is using an ESP microcontroller. To communicate between the ESP and Unity, we
                    can use the <a
                        href="https://assetstore.unity.com/packages/tools/input-management/uduino-plugin-wifi-for-esp8266-and-esp32-134187"
                        class="link" target="_blank">Uduino plugin</a>, which let you send commands such as
                    "analogWrite" or "analogRead" in C# like with Arduino.</p>
                <figure class="drawioOI2">
                    <img src="/img/drawio_oi_2.webp"
                        alt="Simplified representation of the code architecture for reading the textures">
                    <figcaption class="captionText">Simplified representation of the code architecture for reading the
                        textures and sending the data to the Olfactory Interface</figcaption>
                </figure>
                <p>The <b><i>OlfactoryInterfaceManager.cs</i></b> script is the bridge between Uduino, which sends the
                    data to the device, and the textures on Unity.</p>
                <p>Every <i>x</i> seconds, the OIManager triggers the TexReader. Going through each OlfactoryData, it
                    gets the intensity for each scent, and call the AnalogWrite function of the UduinoManager.</p>
                <p>If you want to know how Uduino works, I can only recommend you to checkout <a
                        href="https://assetstore.unity.com/packages/tools/input-management/uduino-plugin-wifi-for-esp8266-and-esp32-134187"
                        target="_blank" class="link">Marc Teyssier's tutorial</a></p>
            </div>
            <div class="chapter">
                <h3>3. Performance Experiment</h3>
                <h4>A. Protocol</h4>
                <p>This experiment aims to verify these two hypothesis:</p>
                <ol>
                    <li>The 2D Olfactory Map system allow smoother and more precise scent transition than collider boxes
                    </li>
                    <li>The system is not too cost performant.</li>
                </ol>
                <p>Through these evaluations, the experiment seeks to validate the 2D Olfactory Map's practicality and
                    scalability for large-scale virtual environments.</p>
                <br>
                <p>I created an empty project, with only a 512*512m terrain, a fake player and the olfactory maps</p>
                <p>The fake player would walk by going to points to point accross the terrain several time. The path is
                    the same everytime. The only things that changes are the walk speed, and the number of map texture
                    used, and their dimension.</p>


                <figure class="expeOi">
                    <img src="/img/expe_oi.webp" alt="View of the empty terrain from above, with drawn on it the path of
                        the fake user">
                    <figcaption class="captionText">View of the empty terrain from above, with drawn on it the path of
                        the fake user</figcaption>
                </figure>

                <figure class="expeOiTable">
                    <img src="/img/expe_oi_table.webp"
                        alt="Table showing all of the different settings for the experiment">
                    <figcaption class="captionText">Table showing all of the different settings for the experiment
                    </figcaption>
                </figure>
                <p>In total, 21 different combinaisons were tested.</p>
                <br>
                <h4>B. Results</h4>
                <figure class="resultOiFps">
                    <img src="/img/Figure_1_fps.webp"
                        alt="Graph showing the FPS (Frame Per Second) during the test for the main configurations">
                    <figcaption class="captionText">Graph showing the mean of the FPS (Frame Per Second) during the test
                        for the main configurations</figcaption>
                </figure>
                <p>The frame rate dropped by about half when the system handled four textures. As expected, processing
                    detailed textures every second affects performance. What I didn't expect, however, was the jittery
                    frames per second while handling four textures at 1 m/s, and I'm not really sure how to explain
                    it...</p>
                <figure class="resultOiPerf">
                    <img src="/img/Figure_3_performances_fixed.webp"
                        alt="GPU & CPU performance graph with Q1-Q3 ranges">
                </figure>
                <p>Regarding CPU and GPU usage, I thought it would be worse. The GPU doesn't skyrocket when handling
                    larger textures, but it still consumes some resources.</p>
                <figure class="resultOiTransition">
                    <img src="/img/Figure_2_smells_every_seconds_4-1.webp" alt="View of the empty terrain from above, with drawn on it the path of
                        the fake user">
                </figure>

                <figure class="resultOiTransition">
                    <img src="/img/Figure_2_smells_every_seconds_4-3.webp" alt="View of the empty terrain from above, with drawn on it the path of
                        the fake user">
                    <figcaption class="captionText">The upper graph shows the scent's intensity transition when the user
                        moves at 1m/s. The bottom one is the same at 3m/s</figcaption>
                </figure>
                <p>The scent transition is very interesting. Both graphs shows how the transition when the user moves
                    around. The speed makes some scents less intense, like with the wooden bridge : at 3m/s, the user
                    walk fast on the bridge and won't smell it as if it were going slower.</p>

            </div>
            <div class="chapter">
                <h3>4. Limitations & Future Work</h3>
                <p>Using collider boxes to represent smells in 3D application is complicated on a large scale. The 2D
                    Olfactory Map project aims to facilitate the development of such application by reading scent
                    intensity through textures. We showed how to create the textures, read them and send their value to
                    the Olfactory Interface.</p>
                <p>The results showed that it is unfortunately cost performant as for the frame per seconds, but show in
                    return a greater precision in scent intentity transition when the user moves.</p>
                <p>An interesting improvement would be to link these texture with other environmental data such as the
                    wind. A simple example would be that when the wind is going to the north, the texture, would move
                    too a little bit, because the smell is transported by the wind.</p>
                <p>However, this might just take more resources for little effect.</p>
                <figure class="oiWind">
                    <img src="/img/oi_wind.webp"
                        alt="A visualisation of how a 2D Olfactory Map could change based on the wind.">
                    <figcaption class="captionText">A visualisation of how a 2D Olfactory Map could change based on the
                        wind. A : Normal. B : Wind</figcaption>
                </figure>
                <p>An attempt to improve the performances would be to divide the textures into chunks, and the scripts
                    only read the chunk where the user is at. This lower the number of pixels to read for each scent,
                    and could be adapted to different computer configuration to make the application more accessible.
                </p>
                <p>It would have taken thousands of collider boxes to achieve the same result, and the performances and
                    the management of the project would have been a nightmare. Here we only have one texture per scent,
                    which makes the project more managable, and more scalable.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.headerImage {
    height: 450px;
}

.simpleColliderBox {
    width: 40%;
    margin-left: 30%;
}

.smell0 {
    width: 40%;
    margin-left: 30%;
}

.expeOi {
    width: 50%;
    margin-left: 25%;
}

.expeOiTable {
    width: 50%;
    margin-left: 25%;
}

@media (max-width: 768px) {

    .simpleColliderBox {
        width: 60%;
        margin-left: 20%;
    }

    .combinedColliderBox {
        width: 90%;
        margin-left: 5%;
    }

    .expeOi {
        width: 60%;
        margin-left: 20%;
    }

    .expeOiTable {
        width: 80%;
        margin-left: 10%;
    }
}
</style>