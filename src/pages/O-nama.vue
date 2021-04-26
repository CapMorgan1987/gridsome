<template>
  <Layout>
    <v-container>
      <v-row align="center" class="ma-5">
        <v-col cols="12" md="3" class="pl-m-10 pr-m-10">
          <h2 class="mb-3">O Nama</h2>
          <p>
            U današnje vrijeme prezentacija poduzeća i/ili proizvoda na
            internetu i društvenim mrežama ključna je za uspješno poslovanje. Uz
            nas unaprijedite svoje poslovanje brzo i kvalitetno! AM-WEBSITE nudi
            vam izradu web stranica i uslugu digitalnog marketinga osluškujući
            želje i potrebe svojih klijenata.
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