<template>
    <div class="thumbnail" :class="{ 'not-ready': commingSoon }">
        <h3>{{ thumbnailTitle }}</h3>
        <img :src="imageSrc" alt="thumbnail picture" width="240" />
        <h4 class="thumbnailSubtitle">{{ thumbnailSubtitle }}</h4>
        <p class="tags">{{ tags }}</p>
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
        commingSoon : {
            type : Boolean,
            default : false
        }
    }
}
</script>

<style scoped>

.thumbnail {
    height: 320px;
    width: 230px;
    min-width: 14rem;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-left: -1rem;

    background-color: var(--dark-bluegreen);
    border: 5px solid var(--dark-bluegreen);
    border-radius: 16px;
    box-shadow: 5px 5px 2px 1px rgba(0, 48, 32, 0.7);

    overflow: hidden;
    cursor: pointer;
    transition: ease 0.2s;
}

/* Si le projet n'est pas prêt */
.thumbnail.not-ready {
  filter: grayscale(1);     /* passe tout en niveaux de gris */
  opacity: 0.6;             /* rend la vignette un peu transparente */
  cursor:default;      /* curseur désactivé */
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
    font-size: clamp(14px, 1vw, 20px);
    color: var(--pure-white);
    border-radius: 10px 10px 0 0;
    text-overflow: ellipsis " [..]";
}

.thumbnail img {
    width: 100%;
    max-width: fit-content;
    height: auto;
    max-height: 40%;
    display: block;
    flex: 0 0 auto;
    align-self: center;
}

h4.thumbnailSubtitle {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: clamp(10px, 0.7vw, 16px);
    text-align: center;
    flex-shrink: 1;
    color: var(--pure-white);
    overflow:hidden;
    text-overflow: ellipsis;
}

.tags {
    color: gray;
    font-family: "Montserrat";
    margin-top: auto;
}

@media (max-width : 768px) {
    .thumbnail {
        width: 100%;
        height: 75px;
        border-radius: 4px;

        display: flex;
    }

    .thumbnail img {
        position: absolute;
        max-width: 75px;
        width: auto;
        height: auto;
        max-height: 75px;
        align-self: auto;
    }

    h3{
        font-size: clamp(16px, 2vw, 20px);
        margin: -1rem;
    }

    h3, h4 {
        padding-left: 75px;
        padding-right: 5px;
        text-align: right;
        margin: 0;
    }

    .thumbnail {
        gap: .5rem;
    }

    .tags {
        display: none;
    }
}
</style>