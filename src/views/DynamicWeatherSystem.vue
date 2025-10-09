<template>
    <div class="pageContent">
        <div class="pageHeader">

            <img class="headerImage" src="/img/xrtp_1.webp" alt="Header Image">
            <div class="headerOverlay">
                <h2 class="headerPageTitle">Dynamic Weather System</h2>
                <p class="headerTags">2024 - DevTool - Unity</p>
            </div>
            <div class="returnToHomePage"><router-link to="/">
                    <p>&lt; Return</p>
                </router-link></div>
            <a href="https://github.com/DeVinci-Innovation-Center/Doppelmarsh" target="_blank" class="githubIcon"><img
                    src="/img/github_white.png" alt="github logo"></a>
        </div>
        <div class="pageBody">
            <div class="chapter">
                <h3>1. Introduction</h3>
                <h4>A. Context & Motivation</h4>
                <p>Je parle ici de l'importance de l'immersion en VR, et qu'avec la technologie d'aujourd'hui, il est
                    possible de créer des environnements celestes dynamique.
                </p>
                <h4>B. Related Works</h4>
                <p> Je parle ici des related works sur la conception de météo et de cycle nycthémeraux dans les
                    applications 3D en temps réel.</p>
                <h4>C. Solutions</h4>
                <p>Je parle ici des deux projets qui sont liés : ws & dnc. en présentant rapidement leurs spécificités
                    et leurs objectifs.</p>
            </div>
            <div class="chapter">
                <h3>2. Implementation</h3>
                <h4>A. Overview</h4>
                <p>Je précise ici ce que j'utilise (unity 6 HDRP), et que le WS comporte différents sous-module. Je
                    précise aussi que ce système peut marcher avec des données environnementales</p>
                <h4>B. Clouds & Fog</h4>
                <p>Je parle ici des nuages et fog volumétrique, en présentant les différents paramètres, et en montrant
                    une photo comparative</p>
                <h4>C. Rain & Snow Precipitations</h4>
                <p>Je parle ici des particle system qui serviront à faire les précipitations. Je parle du fait que c'est
                    centré sur le joueur uniquement et pas sur tout le terrain pour des raisons de performances.</p>
                <h4>D. Snowy Terrain</h4>
                <p>Je parle ici de comment modifier les textures du terrain pour faire apparaitre une texture de neigne
                    ou l'on veut.</p>
                <h4>E. Nycthemeral Cycle</h4>
                <p>Je présente ici le mode jour/nuit, un cycle qui prend en compte la periode de l'année et de la
                    position géographique réelle de l'utilisateur pour assurer un rendu réaliste.</p>
            </div>
            <div class="chapter">
                <h3>3. Experiment</h3>
                <h4>A. Disclaimer</h4>
                <p>préciser que l'experimentation n'a pas étée conduite, mais que s'il fallait en faire une, voila
                    comment il faudrait la faire.</p>
                <h4>B. Protocol</h4>
                <p>Je présente ici comment les utilisateurs participeraient à l'experimentation. J'indique leur nombre,
                    et leurs objectifs</p>
                <h4>C. Measurements</h4>
                <p>Je présente ici ce que l'on veut mesurer, que ce soit subjectif ou objectif.</p>
            </div>
            <div class="chapter">
                <h3>4. Discussion</h3>
                <h4>A. Limitation</h4>
                <p>Je présente les difficultés d'avoir des performances correctes en VR, et qu'il
                    faudrait se rabbattre sur des technologies moins couteuses en perf.</p>
                <h4>B. Future Works</h4>
                <p>Je montre que le WS ne permet pas avec précision d'avoir un changement de météo précis, et qu'une IA
                    entrainée sur une localisation précise permettrait d'améliorer les résultats avec nottamment des
                    prédictions.</p>
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