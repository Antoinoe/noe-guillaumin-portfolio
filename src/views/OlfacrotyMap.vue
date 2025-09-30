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
                <p>Je raconte ici mon premier travail avec Romain, et la présentation de la démo avec les box colliders
                </p>
                <h4>B. Limitation</h4>
                <p>Je raconte ici que même si le projet marche, utiliser des box colliders sur un projet à plus grande
                    échelle est un problème</p>
                <h4>C. Texture-based olfactory data</h4>
                <p>Je raconte ici que contrairement aux related works, la texture permet une meilleure précision et un
                    meilleur développement, le tout en restant performant</p>
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
                <p>Je présente les objetcifs de l'experimentation. Je présente ensuite le script qui calcule les performances</p>
                <h4>B. Results</h4>
                <p>Je présente et décrit les graphiques analysés par python</p>
            </div>
            <div class="chapter">
                <h3>4. Limitations & Future Work</h3>
                <h4>A. Performances</h4>
                <p>Je parle ici des performance qui ne sont pas vraiment au niveau. Je parle de la possibilité de "chunk" les textures</p>
                <h4>B. Dynamism</h4>
                <p>Je parle ici de la possibilité de bouger la texture en fonction du vent. Je parle aussi de la possibilité de lier ça a un device de ventilation.</p>
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