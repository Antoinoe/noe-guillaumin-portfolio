<template>
    <Navbar/>
  <section style="padding:2rem">
    <PageTitle name="Dev Page"></PageTitle>
    <Thumbnail pageName="contact" thumbnailTitle="2D Olfctory Map" thumbnailSubtitle="A solution to map olfactory data in VR applications." imageSrc="/img/xrtp_1.webp" tags="2024 - VR - Unity" />
  </section>
</template>

<script>
import Thumbnail from '@/components/Thumbnail.vue'
import Navbar from '@/components/NavBar.vue'
import PageTitle from '@/components/PageTitle.vue';
export default {
  components: { Navbar, Thumbnail, PageTitle }
}
</script>