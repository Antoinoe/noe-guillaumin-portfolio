<template>
    <div class="thumbnail">
        <router-link class="thumb-link" :to="`/${pageName}`">
            <div class="content">
                <h2>{{ thumbnailTitle }}</h2>
                <img :src="imageSrc" alt="thumbnail picture" width="240" />
                <div class="subContent">
                    <h3>{{ thumbnailSubtitle }}</h3>
                    <p class="tags">{{ tags }}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        pageName: String,
        thumbnailTitle: String,
        thumbnailSubtitle: String,
        tags: String,
        desc: String,
        imageSrc: String,
    }
}
</script>

<style scoped>
@import url('../assets/tools.css');
@import url('../assets/fonts.css');

/* Carte */
.thumbnail {
    background-color: var(--pure-white);
    border: 5px solid var(--dark-bluegreen);
    border-radius: 16px;
    height: 360px;
    width: 240px;
    overflow: hidden;
    cursor: pointer;
}

.thumb-link {
    display: block;
    height: 100%;
    width: 100%;
    color: inherit;
    text-decoration: none;
}

.content {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
}

h2 {
    margin: 0;
    padding: .25rem .5rem;
    font-family: "Sansation";
    color: var(--pure-white);
    background-color: var(--dark-bluegreen);
    border-radius: 10px 10px 0 0;
}

.content img {
    width: 100%;
    height: auto;
    display: block;
    flex: 0 0 auto;
}

.subContent {
    background-color: var(--dark-bluegreen);
    color: var(--pure-white);
    flex: 1;
    width: 100%;
    padding: .6rem .5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.subContent h3 {
    font-family: "Montserrat";
    font-weight: 300;
}

.subContent p {
    color: gray;
    font-family: "Montserrat";
}
</style>