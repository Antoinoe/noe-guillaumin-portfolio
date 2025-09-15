<template>
  <div class="title">
    <p>{{ name }}</p>
  </div>

</template>

<script>

export default {
  name: "TitleName",
  props: {
    name: String,
  }
}
</script>

<style scoped>
.title p {
  margin-left: 0.8em;
  margin-top: 0;
  padding: 0em;
  width: max-content;
  font-size: 50px;
  font-family: "Sansation";
  font-weight: 600;
  color: var(--dark-bluegreen);
}
</style>