<script>

</script>

<template>
    <div id="content">
        <div class="title">MY PROJECTS</div>
        <div class="summarry">
            <div class="summarry-title">
                <p>Overview</p>
            </div>
            <div class="summarry-content">
                <div class="summarry-content-item"><img class="elipse-section" src="img/Ellipse1.png" alt="section"><a href="" class="section-title">Doppelmarsh</a></div>
                <div class="summarry-content-item"><a href="" class="item-title">1. About</a></div>
                <div class="summarry-content-item"><a href="" class="item-title">2. Technological Platform</a></div>
                <div class="summarry-content-item"><a href="" class="item-title">3. DoppelWatch</a></div>
                <div class="summarry-content-item"><a href="" class="item-title">4. OpenXR Keyboard</a></div>
                <div class="summarry-content-item"><a href="" class="item-title">5. Weather System</a></div>
                <div class="summarry-content-item"><a href="" class="item-title">6. Olfactive Interface</a></div>
                <div class="summarry-content-item"><a href="" class="item-title">7.Future Additions</a></div>
                <div class="summarry-content-item"><img class="elipse-section" src="img/Ellipse1.png" alt="section"><a href="" class="section-title">Video Games</a></div>
                <div class="summarry-content-item"><a href="" class="item-title">1. Occultas</a></div>
                <div class="summarry-content-item"><a href="" class="item-title">2. Xenos Heresy</a></div>
                <div class="summarry-content-item"><a href="" class="item-title">3. Ch'ti Pirate!</a></div>
                <div class="summarry-content-item"><a href="" class="item-title">4. Game Jams</a></div>
                

            </div>
        </div>
    </div>
</template>

<style>
    #content{
        margin: 2em;
    }

    .title{
        color:var(--mid-beige);
        font-family: sans-serif;
        font-size: 56px;
    }
    .summarry{
        width:300px;
        height:450px;
        position : fixed;
        background-color: var(--mid-grey);
        border: solid; 
        border-color:var(--mid-red);
        border-radius: 5px;
        top:200px;
        display: block;
    }

    .summarry-title p{
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
    .item-title{
        padding-left: 1em;
        color: var(--mid-beige);
        font-family: sans-serif;
    }

</style>
