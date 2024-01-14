<script>
    import PageTitle from '../components/PageTitle.vue';
  export default {
    components: {
      PageTitle
    }
  }
</script>

<template>
    <PageTitle name = "Projects"></PageTitle>
    <div id="content">
        <div class="summarry">
            <div class="summarry-title">
                <p>Overview</p>
            </div>
            <div class="summarry-content">
                <div class="summarry-content-item"><img class="elipse-section" src="../../public/img/Ellipse1.png" alt="section"><a href="" class="section-title">XR Telepresence Platform Application</a></div>
                <ol>
                    <li><div class="summarry-content-item"><a href="" class="item-title">About</a></div></li>
                    <li><div class="summarry-content-item"><a href="" class="item-title">Platform Architecture</a></div></li>
                    <li><div class="summarry-content-item"><a href="" class="item-title">OpenXR Keyboard</a></div></li>
                    <li><div class="summarry-content-item"><a href="" class="item-title">Celestial Environment</a></div></li>
                    <li><div class="summarry-content-item"><a href="" class="item-title">Environment Data Collection</a></div></li>
                    <li><div class="summarry-content-item"><a href="" class="item-title">External Devices</a></div></li>
                    <li><div class="summarry-content-item"><a href="" class="item-title">Future Additions</a></div></li>
                </ol>
                
                <div class="summarry-content-item"><img class="elipse-section" src="../../public/img/Ellipse1.png" alt="section"><a href="" class="section-title">Video Games</a></div>
                <ol>
                    <li><div class="summarry-content-item"><a href="" class="item-title">Occultas</a></div></li>
                    <li><div class="summarry-content-item"><a href="" class="item-title">Xenos Heresy</a></div></li>
                    <li><div class="summarry-content-item"><a href="" class="item-title">Game Jams</a></div></li>
                </ol>
            </div>
        </div>

        <div id="writingZone">
            <p>neofrgnetrij</p>
        </div>
    </div>
</template>

<style>
    .summarry{
        width:20%;
        height:480px;
        position : fixed;
        background-color: var(--mid-grey);
        border: solid; 
        border-color:var(--mid-red);
        border-radius: 5px;
        top:200px;
        left : 3%;
        display: block;
    }

    .summarry-content li{
        padding-left: 1em;
        color: var(--mid-beige);
        font-family: sans-serif;
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
        text-decoration: none;
        color: var(--mid-beige);
    }

    #writingZone{
        margin-left: 30%;
        width: 65%;
        height: 5000px;
        margin-top: 2em;
        background-color: var(--mid-grey);
        border: solid; 
        border-color:var(--light-grey);
        border-radius: 5px;
    }

</style>
