<template>
  <Layout>
    <v-container>
      <v-row
        v-for="service in services"
        :key="service.id"
        align="center"
        class="ma-5 background-package"
      >
        <v-col cols="12" md="6" class="pa-sm-10 pa-5">
          <h2>{{ service.title }}</h2>
          <div v-html="service.description" class="text-service"></div>
        </v-col>
        <v-col cols="12" md="6" class="usluge1">
          <!-- <g-image
                src="~/assets/usluge1.jpg"
                class="img-content"
                quality="40"
                fit="outside"
              >
              </g-image> -->
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
  import axios from "axios";

  export default {
    metaInfo: {
      title: "Usluge",
    },
    data() {
      return {
        services: [],
      };
    },
    async mounted() {
      try {
        const results = await axios.get("http://localhost:1337/services");

        this.services = results.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
</script>

<style>
  .usluge1,
  .usluge2,
  .usluge3 {
    min-height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .usluge1 {
    background-image: url("./../assets/img/usluge1.jpg");
  }
  .usluge2 {
    background-image: url("./../assets/img/usluge2.jpg");
  }
  .usluge3 {
    background-image: url("./../assets/img/usluge3.jpg");
  }

  @media screen and (max-width: 956px) {
    .usluge1,
    .usluge2,
    .usluge3 {
      min-height: 300px;
      background-size: cover;
    }
  }
</style>