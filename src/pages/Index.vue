<template>
  <Layout>
    <v-carousel
      height="100vh"
      cycle
      progress
      progress-color="grey"
      interval="3000"
      class="slider-css"
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item>
        <g-image src="~/assets/header.jpg" class="carousel-img" quality="40" />
        <h1 class="text-slider">
          <!-- {{ $static.pages.header1 }} -->
        </h1>
        <!-- <p>{{ title }}</p> -->
      </v-carousel-item>
    </v-carousel>
  </Layout>
</template>
 <!--
<static-query>
query{
 pages(id: "1"){
   id
  title
  header1
  }
}
</static-query>
-->
<script>
  export default {
    metaInfo: {
      title: "Dobrodošli",
    },
  };
</script>

<style scoped>
  .slider-css {
    background-color: #4aade2;
  }
  .carousel-img {
    position: absolute;
    top: -2000px;
    bottom: -2000px;
    left: -2000px;
    right: -2000px;
    margin: auto;
    opacity: 0.4;
  }
  .text-slider {
    position: absolute;
    bottom: 20%;
    background-color: #ffffffad;
    border-radius: 20px;
    color: #58585a;
    font-size: 45px;
    font-weight: 500;
    padding: 10px;
    margin: 0 50px;
  }
  @media screen and (max-width: 900px) {
    .text-slider {
      font-size: 30px !important;
      margin: 0 10px;
    }
  }
</style>
