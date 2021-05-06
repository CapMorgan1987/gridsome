<template>
  <Layout>
    <v-container>
      <v-row align="center" class="ma-1 ma-lg-5">
        <v-col cols="12" md="3" class="pl-m-10 pr-m-10">
          <h2 class="mb-3">{{ info.title }}</h2>
          <div v-html="info.description"></div>
        </v-col>
        <v-col cols="12" md="9">
          <g-image src="~/assets/o-nama.png" class="img-content" quality="40">
          </g-image>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>
<!--
<static-query>
query{
 pages(id: "2"){
   id
  title
  header1
  description
  }
}
</static-query>
-->
<script>
  import axios from "axios";

  export default {
    metaInfo: {
      title: "O Nama",
    },
    data() {
      return {
        info: {
          title: "",
          description: "",
        },
      };
    },
    async mounted() {
      try {
        const results = await axios.get(
          "https://aron-strapi-heroku.herokuapp.com/o-nama"
        );

        this.info = results.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
</script>
<style scoped>
  p {
    margin-bottom: 0;
  }
  .center {
    text-align: center;
  }
</style>