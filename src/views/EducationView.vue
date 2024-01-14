<template>
    <PageTitle name = "Education"></PageTitle>
    <div class="educationContent">
        
        <div class="educationZone">
            <div class="educationBoxItem">
                <div class="educationBoxItemTitle">
                    <p>IIM Digital School - Institute for Future Technologies</p>
                </div>
                <div class="educationBoxItemAbout">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni quia corrupti veniam. Asperiores iusto, quas quos error delectus, atque odit voluptatibus vitae rem, omnis voluptatum veniam in vel consequuntur.</p>
                </div>
            </div>
            <div class="educationBoxItem">
                <div class="educationBoxItemTitle">
                    <p>IIM Digital School - Game Programming</p>
                </div>
                <div class="educationBoxItemAbout">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni quia corrupti veniam. Asperiores iusto, quas quos error delectus, atque odit voluptatibus vitae rem, omnis voluptatum veniam in vel consequuntur.</p>
                </div>
            </div>
            <div class="educationBoxItem">
                <div class="educationBoxItemTitle">
                    <p>ESTIAM</p>
                </div>
                <div class="educationBoxItemAbout">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni quia corrupti veniam. Asperiores iusto, quas quos error delectus, atque odit voluptatibus vitae rem, omnis voluptatum veniam in vel consequuntur.</p>
                </div>
            </div>
            <div class="educationBoxItem">
                <div class="educationBoxItemTitle">
                    <p>Highschool</p>
                </div>
                <div class="educationBoxItemAbout">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni quia corrupti veniam. Asperiores iusto, quas quos error delectus, atque odit voluptatibus vitae rem, omnis voluptatum veniam in vel consequuntur.</p>
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
        background-color: var(--mid-beige);
        border-style: solid;
        border-width: 5px;
        border-color: var(--mid-red);
        padding: 1em;
        
    }
    .educationBoxItemTitle p {
        color: var(--mid-red);
        font-size: 32px;
        font-weight: 600;
    }
    
    .educationZone {
        margin-left: 10%;
        margin-right: 10%;
        /* background-color: var(--light-grey); */
        /* border-style: solid;
        border-width: 5px;
        border-radius: 5px;
        border-color: var(--mid-grey); */
        padding: 1em;
        padding-top: 2em;
        margin-top: 2em;
        display: flex;
        flex-direction: column;
        text-align: center;
        position: relative;
    }

    .educationBoxItemAbout{
        background-color: var(--mid-grey);
    }

    .educationBoxItemAbout p{
        color: var(--mid-beige);
        padding: 1em;
    }

    .educationBoxItem {
        width: 35%; 
        margin-bottom: 1em;
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-color: var(--light-grey);
        border-width: 5px;
        border-radius: 5px;
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