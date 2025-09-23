<template>
    <div class="thumbnail">
        <div class="content">
            <h3>{{ thumbnailTitle }}</h3>
            <img :src="imageSrc" alt="thumbnail picture" width="240" />
            <div class="subContent">
                <h4>{{ thumbnailSubtitle }}</h4>
                <p class="tags">{{ tags }}</p>
            </div>
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
        desc: String,
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
    height: 360px;
    width: 240px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.7);
    transition: ease 0.2s;
}

.thumbnail:hover {
    background-color: var(--mid-bluegreen);
    border: 5px solid var(--mid-bluegreen);
    box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.5);
    transition: ease 0.2s;
}

.content {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
}

h3 {
    margin: 0;
    padding: .5rem .5rem;
    font-family: "Sansation";
    font-size: clamp(16px, 2vw, 20px);
    color: var(--pure-white);
    border-radius: 10px 10px 0 0;
}

.content img {
    width: 100%;
    height: auto;
    display: block;
    flex: 0 0 auto;
}

.subContent {
    color: var(--pure-white);
    flex: 1;
    width: 100%;
    padding: .6rem .5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.subContent h4 {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: clamp(11px, 1vw, 16px);
    text-align: center;
}

.subContent p {
    color: gray;
    font-family: "Montserrat";
}
</style>