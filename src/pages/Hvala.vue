<template>
  <Layout>
    <v-container>
      <v-row align="center" class="ma-1 ma-lg-5">
        <v-col cols="12" class="mt-5 pl-m-10 pr-m-10 text-center">
          <h2 class="mb-3">Hvala na poslanom upitu!</h2>
          <g-image src="~/assets/mail.png" quality="40" class="my-12"></g-image>
          <p class="my-12">Kontaktirati ćemo vas u najkraćem mogućem roku</p>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>
<script>
  export default {
    metaInfo: {
      title: "Hvala",
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