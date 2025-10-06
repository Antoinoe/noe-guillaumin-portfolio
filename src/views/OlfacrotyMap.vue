<template>
    <div class="pageContent">
        <div class="pageHeader">

            <img class="headerImage" src="/img/xrtp_1.webp" alt="Header Image">
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
                    At the same time, the VR project Doppelmarsh caught my attention, and we wanted to implement his
                    project into the VR application.
                </p>
                <p>Doppelmarsh is a project that was conducted by the MIT Media Lab in 2014. Based on <a
                        href="https://tidmarsh.media.mit.edu" target="_blank">Tidmarsh</a>, they
                    recreated a marsh that exists in real life to observe in VR how the terrain would heal from decades
                    of overfarming.</p>
                <p>The objective of the project was to deliver a scent to the user, based on its position in VR. To
                    achieve that, we used Unity, and created collider boxes.
                    A box collider is an invisible box inside the software that detects when a specific object enters,
                    stays, or leave itself. For the demonstration, a smellbox is linked to
                    In each collider box, we set a scent and an
                    intensity. <i>(eg: type="Forest", intensity=0.5)</i> The results show an improve of the sensation of
                    telepresence inside VR applications.</p>
                <h4>B. Limitation</h4>
                <p>Je raconte ici que même si le projet marche, utiliser des box colliders sur un projet à plus grande
                    échelle est un problème</p>
                <p>While the solution works on a small open area for a demo, it becomes clear that this cannot be
                    applied to an application with a large terrain, with more scents.</p>
                <p>Why? In our previous experiment, une collider box = one scent and its intensity. On a larger project,
                    with way more scents diversity, and the necessity to have a graduate scent's intensity curve,
                    collider boxes become harder to manage. </p>
                <h4>C. Texture-based olfactory data</h4>
                <p>The solution I propose and present on this page, is a texture-based approach. Each texture represents
                    a scent. And the alpha value of a pixel is the intensity of the smell at the pixel's coordinate.</p>
                <p>With this tool, mapping and reading olfactory intensities become more managable, and scalable, while
                    not using too much performance.</p>
            </div>
            <div class="chapter">
                <h3>2. Implementation</h3>
                <h4>A. How to make a texture</h4>
                <p>Je raconte ici que les textures sont faite à la main, a partir d'une vue de dessus de la map unity.
                    Je présente aussi comment gérer l'alpha et je montre les erreurs que j'ai commis au début.</p>
                <h4>B. Read data</h4>
                <p>Je présente ici le script Unity principal, celui qui store les textures, leurs dimensions ainsi que
                    la position du joueur.</p>
                <h4>C. Communication to the device</h4>
                <p>Je présente rapidement Uduino, et je mets un lien vers le tuto dvic.devinci de marc. Je présente
                    ensuite le script Unity qui fait le lien entre le device et le script principal.</p>
            </div>
            <div class="chapter">
                <h3>3. Performance Experiment</h3>
                <h4>A. Protocol</h4>
                <p>Je présente les objetcifs de l'experimentation. Je présente ensuite le script qui calcule les
                    performances</p>
                <h4>B. Results</h4>
                <p>Je présente et décrit les graphiques analysés par python</p>
            </div>
            <div class="chapter">
                <h3>4. Limitations & Future Work</h3>
                <h4>A. Performances</h4>
                <p>Je parle ici des performance qui ne sont pas vraiment au niveau. Je parle de la possibilité de
                    "chunk" les textures</p>
                <h4>B. Dynamism</h4>
                <p>Je parle ici de la possibilité de bouger la texture en fonction du vent. Je parle aussi de la
                    possibilité de lier ça a un device de ventilation.</p>
                <h4>C. General Conclusion</h4>
                <p>Je rappelle les hypothèses et les résultats</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.headerImage {
    height: 450px;
}
</style>