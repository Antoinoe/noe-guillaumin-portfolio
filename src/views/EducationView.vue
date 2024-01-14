<template>
    <div class="title"><p>Education</p></div>
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
    .title p{
        margin-left: 1.3em;
        margin-top: 0;
        padding: 0.3em;
        border-style: solid;
        border-color: var(--mid-red);
        border-radius: 5px;
        border-width: 2px;
        width: max-content;
        font-size: 42px;
        font-family: sans-serif;
        color: var(--mid-beige);
        background-color: var(--mid-grey);
    }

    p{
        font-family:sans-serif;
    }

    .educationBoxItemTitle{
        background-color: var(--mid-beige);
        border-style: solid;
        border-width: 5px;
        border-color: var(--mid-red);
        border-radius: 5px;
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
        background-color: var(--light-grey);
        border-style: solid;
        border-width: 5px;
        border-radius: 5px;
        border-color: var(--mid-grey);
        padding: 1em;
        padding-top: 2em;
        margin-top: 2em;
        display: flex;
        flex-direction: column;
        text-align: center;
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
        border-color: var(--dark-grey);
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
