<template>
  <Layout>
    <v-container>
      <v-row align="center" class="ma-5">
        <v-col cols="12" md="3" class="pl-m-10 pr-m-10">
          <!-- <h2 class="mb-3">{{ $static.pages.header1 }}</h2> -->
          <p>
            <!-- {{ $static.pages.description }} -->
          </p>
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
  export default {
    metaInfo: {
      title: "O Nama",
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