<!--
<template>
  <Layout>
    <v-container>
      <v-row align="center" class="ma-5 pa-5 justify-space-around">
        <v-col
          cols="12"
          md="4"
          class="pa-5 rounded-xl ma-4 border-paket"
          style="background-color: #4aade2"
        >
          <h3 align="center" style="color: white">Landing stranica</h3>
          <p style="color: white" class="py-3">
            Landing stranica je najbitnija u digitalnom marketingu, a
            optimizirana je i pripremljena na poseban način s ciljem postizanja
            akcije (pretplata na newsletter, upit…). Sastoji se od kratkog i
            jasnog sadržaja, a brzina i jednostavnost stranice ključna je za
            uspjeh online kampanja. Paket uključuje:
          </p>
          <ul align="left">
            <li style="color: white">Grafički design landing stranice</li>
            <li style="color: white">
              Web forma, karta, linkovi za telefon, mail
            </li>
            <li style="color: white">Prilagodba slika i tekstova za web</li>
            <li style="color: white">Unos sadržaja</li>
            <li style="color: white">Responsive web design</li>
            <li style="color: white">SEO optimizacija</li>
            <li style="color: white">Prijava na Google Analytics</li>
          </ul>
          <h3 align="center" class="py-5">
            <strong style="color: white">od 750 kn</strong>
          </h3>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="pa-5 rounded-xl ma-4 border-paket"
          style="background-color: #f2f2f2"
        >
          <h3 align="center" style="color: #4aade2">Web apartmani</h3>
          <p style="color: #4aade2" class="py-3">
            Iznajmljujete apartmane, a nemate vlastitu stranicu za direktan
            booking? Pripremit ćemo vam stranicu s kojom ćete privući nove
            goste, bitno je pokazati sve prednosti smještaja i olakšati budućim
            gostima rezervaciju i direktan kontakt s vama.
          </p>
          <ul align="left">
            <li style="color: #4aade2">Grafički dizajn web stranice</li>
            <li style="color: #4aade2">
              Web forma, karta, linkovi za telefon, mail
            </li>
            <li style="color: #4aade2">Izrada stranica za svaki apartman</li>
            <li style="color: #4aade2">Photo i video galerija</li>
            <li style="color: #4aade2">Unos sadržaja</li>
            <li style="color: #4aade2">Prilagodba slika i tekstova za web</li>
            <li style="color: #4aade2">Responsive web design</li>
            <li style="color: #4aade2">Mogućnost višejezičnosti</li>
            <li style="color: #4aade2">SEO optimizacija</li>
            <li style="color: #4aade2">Prijava na Google Analytics</li>
          </ul>
          <h3 align="center" class="py-5">
            <strong style="color: #4aade2">od 2200 kn</strong>
          </h3>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="pa-5 rounded-xl ma-4 border-paket"
          style="background-color: #404040"
        >
          <h3 align="center" style="color: white">Web stranice</h3>
          <p style="color: white" class="py-3">
            Paket Web Stranica namijenjen je tvrtkama kod kojih se sadržaj na
            web stranicama generira ovisno o zahtjevima korisnika, trenutno
            dostupnim podacima na web poslužitelju ili nekom trećem faktoru.
            Paket obuhvaća CMS administracijsko sučelje za samostalnu izmjenu
            sadržaja. Paket uključuje:
          </p>
          <ul align="left">
            <li style="color: white">Grafički design landing stranice</li>
            <li style="color: white">
              Web forma, karta, linkovi za telefon, mail
            </li>
            <li style="color: white">Izrada stranica za novosti, blogove...</li>
            <li style="color: white">Photo i video galerija</li>
            <li style="color: white">Unos sadržaja</li>

            <li style="color: white">Prilagodba slika i tekstova za web</li>
            <li style="color: white">Responsive web design</li>
            <li style="color: white">Mogućnost višejezičnosti</li>

            <li style="color: white">SEO optimizacija</li>
            <li style="color: white">Prijava na Google Analytics</li>
          </ul>
          <h3 align="center" class="py-5">
            <strong style="color: white">od 3500 kn</strong>
          </h3>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="pa-5 rounded-xl ma-4 border-paket"
          style="background-color: white"
        >
          <h3 align="center">Web shop</h3>
          <p class="py-3">
            Kupnja iz udobnosti doma postala je trend zadnjih godina te se sve
            više poduzeća orijentiralo na web prodaju proizvoda. Izrada web
            shopa jedna je od najboljih investicija za pokretanje i/ili širenje
            poslovanja. Fokus web shopa je prezentacija proizvoda s ciljem
            ostvarenja prodaje.
          </p>
          <ul align="left">
            <li>Grafički design landing stranice</li>
            <li>Kategorije i filteri za web shop</li>
            <li>Web forma, karta, linkovi za telefon, mail</li>
            <li>Izrada stranica za novosti, blogove...</li>
            <li>Photo i video galerija</li>
            <li>Unos sadržaja</li>

            <li>Prilagodba slika i tekstova za web</li>
            <li>Responsive web design</li>
            <li>Mogućnost višejezičnosti</li>

            <li>SEO optimizacija</li>
            <li>Prijava na Google Analytics</li>
          </ul>
          <h3 align="center" class="py-5">
            <strong>od 5000 kn</strong>
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>
-->
<template>
  <Layout>
    <v-container>
      <v-row align="center" class="ma-5 pa-5 justify-space-around">
        <v-col
          v-for="edge in $page.packages.edges"
          :key="edge.id"
          cols="12"
          md="4"
          class="pa-5 rounded-xl ma-4 border-paket"
          style="background-color: #4aade2"
        >
          <h3 align="center" style="color: white">{{ edge.node.title }}</h3>
          <div v-html="edge.node.content" class="py-3 color"></div>
          <!-- <ul align="left">
            <li style="color: white">Grafički design landing stranice</li>
          </ul> -->
          <h3 align="center" class="py-5">
            <strong style="color: white">{{ edge.node.price }}</strong>
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query{
  packages: allPackages{
    edges{
      node{
        id
        title
        content
        price
      }
    }
  }
}
 </page-query>

<script>
  export default {
    metaInfo: {
      title: "Paketi",
    },
  };
</script>

<style scoped>
  .border-paket {
    border: 2px solid #404040;
  }
  .color {
    color: white !important;
  }
</style>
