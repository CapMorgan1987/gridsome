<template>
  <Layout>
    <v-container>
      <v-row align="center" class="ma-5" style="background-color: #4aade2">
        <v-col cols="12" md="6" class="pa-sm-10 pa-5">
          <h2 style="color: white !important">IZRADA WEB STRANICA</h2>
          <p style="color: white !important">
            Želite istaknuti vaše poduzeće, proizvod i/ili uslugu, a ne znate
            kako? Mi imamo rješenje za vas! Nudimo vam
            <strong style="color: white !important"
              >uslugu dizajna, izradu landing stranica, klasičnih web stranica,
              web shopova i dr</strong
            >. Definirajte cilj i strategiju te privucite nove klijente uz
            <strong style="color: white !important">inovativna rješenja</strong
            >. U mogućnosti smo odgovoriti na svaki vaš zahtjev te u skladu s
            vašim mogućnostima i željama napraviti ponudu koja će vam najviše
            odgovarati.
          </p>
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
      <v-row
        align="center"
        class="ma-5 d-flex flex-reverse"
        style="background-color: #58585a"
      >
        <v-col cols="12" md="6" class="usluge2">
          <!-- <g-image
                src="~/assets/usluge2.jpg"
                class="img-content"
                quality="40"
              >
              </g-image> -->
        </v-col>
        <v-col cols="12" md="6" class="pa-sm-10 pa-5">
          <h2 style="color: white !important">DIGITALNI MARKETING</h2>
          <p style="color: white !important">
            Kako biste uspješno poslovali nije dovoljno imati kvalitetnu i
            modernu web stranicu, potreban je
            <strong style="color: white !important">marketing</strong> koji će
            vaše klijente spojiti s vama. Nudimo vam
            <strong style="color: white !important"
              >Facebook/Instagram i Google Ads</strong
            >
            oglašavanje, upravljanje društvenim mrežama, komunikaciju s
            potencijalnim klijentima. Uz naš tim stručnjaka definirajte
            strategiju i ostvarite cilj!
          </p>
        </v-col>
      </v-row>
      <v-row align="center" class="ma-5" style="background-color: #f2f2f2">
        <v-col cols="12" md="6" class="pa-sm-10 pa-5">
          <h2>PRIPREMA SADRŽAJA I FOTOGRAFIJA</h2>
          <p>
            Planirate izradu web stranica, a nemate tekst i fotografije? Ne
            brinite, nudimo vam uslugu
            <strong>pripreme tekstualnog i foto sadržaja</strong>. Dobar i
            kvalitetan sadržaj prilikom izrade web stranice važan je kako bi
            upoznali potencijalnog klijenta s vašim poduzećem, proizvodom i/ili
            uslugom.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="usluge3">
          <!-- <g-image
                src="~/assets/usluge3.jpg"
                class="img-content"
                quality="40"
              >
              </g-image> -->
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: "Usluge",
    },
  };
</script>

<style>
  .usluge1,
  .usluge2,
  .usluge3 {
    min-height: 500px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
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
      min-height: 300px; /* You must set a specified height */
      background-size: cover;
    }
    .flex-reverse {
      flex-direction: column-reverse;
    }
  }
</style>