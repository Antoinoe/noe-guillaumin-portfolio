<template>
    <div class="thumbnail">
        <h3>{{ thumbnailTitle }}</h3>
        <img :src="imageSrc" alt="thumbnail picture" width="240" />
        <div class="thumbnailSubContent">
            <h4>{{ thumbnailSubtitle }}</h4>
            <p class="tags">{{ tags }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pageName: String,
        thumbnailTitle: String,
        thumbnailSubtitle: String,
        tags: String,
        imageSrc: String,
    }
}
</script>

<style scoped>
@import url('../assets/tools.css');
@import url('../assets/fonts.css');

.thumbnail {
    background-color: var(--dark-bluegreen);
    border: 5px solid var(--dark-bluegreen);
    border-radius: 16px;
    height: 320px;
    width: 240px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.7);
    transition: ease 0.2s;
    text-align: center;
    min-height: 100%;
}

.thumbnail:hover {
    background-color: var(--mid-bluegreen);
    border: 5px solid var(--mid-bluegreen);
    box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.5);
    transition: ease 0.2s;
}

h3 {
    margin: 0.5rem 0rem;
    max-height: 3rem;
    font-family: "Sansation";
    font-size: clamp(16px, 2vw, 20px);
    color: var(--pure-white);
    border-radius: 10px 10px 0 0;
}

.thumbnail img {
    width: 100%;
    height: auto;
    display: block;
    flex: 0 0 auto;
}

.thumbnailSubContent {
    color: var(--pure-white);
    flex: 0;
    width: 100%;
}

.thumbnailSubContent h4 {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: clamp(13px, 1vw, 16px);
    text-align: center;
}

.thumbnailSubContent p {
    color: gray;
    font-family: "Montserrat";
}

@media (max-width : 950px) {}
</style>