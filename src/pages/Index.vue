<template>
  <Layout>
    <v-carousel
      v-model="model"
      height="100vh"
      cycle
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      interval="3000"
      class="slider-css"
    >
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: "Dobrodošli",
    },
    data: () => ({
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    }),
  };
</script>

<style scoped>
  .slider-css {
    padding-left: 55px;
  }
</style>
