<template>
  <Layout>
    <v-container>
      <v-row align="center" class="ma-1 ma-lg-5">
        <v-col cols="12" class="px-2 px-md-10 ma-lg-3 cookies-page">
          <p>
            <strong>{{ info.title }}</strong>
          </p>
          <div v-html="info.content"></div>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
  import axios from "axios";

  export default {
    metaInfo: {
      title: "Zaštita privatnosti",
    },
    data() {
      return {
        info: {
          title: "",
          content: "",
        },
      };
    },
    async mounted() {
      try {
        const results = await axios.get(
          "https://aron-strapi-heroku.herokuapp.com/policies/4"
        );

        this.info = results.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
</script>
