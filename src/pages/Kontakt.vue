<template>
  <Layout>
    <v-container>
      <v-row align="center" class="ma-1 pa-1 pa-lg-5 justify-space-around">
        <v-col
          cols="12"
          md="8"
          class="pa-5 rounded-xl ma-4"
          style="background-color: #7cc8f180"
        >
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Ime i prezime"
                    required
                    outlined
                    clearable
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="mail"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    outlined
                    clearable
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="broj"
                    label="Telefon"
                    outlined
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="tekst"
                    label="Poruka"
                    outlined
                    clearable
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-checkbox
                    v-model="checkbox"
                    label="Slanjem podataka putem ove kontakt forme, dozvoljavam da me AM-Website kontaktira u vezi mog upita, a moje prikupljene osobne podatke koristi i obrađuje dalje, sukladno izjavi o privatnosti."
                  ></v-checkbox>
                </v-col>
                <v-col cols="12">
                  <v-btn class="mr-4" @click="submit">submit</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>
        <v-col cols="12" md="8" class="pa-5 rounded-xl ma-4">
          <v-row>
            <v-col cols="12" md="8">
              <h3 class="pb-3">Kontakt</h3>
              <p>
                <a href="tel:00385981388791">
                  <v-icon color="#4aade2"> mdi-phone </v-icon> 098 138 8791
                </a>
              </p>
              <p>
                <a href="mailto:info@am-website.com">
                  <v-icon color="#4aade2"> mdi-email </v-icon> 098 138 8791
                  info@am-website.com
                </a>
              </p>
            </v-col>
            <v-col cols="12" md="4">
              <g-image
                src="~/assets/mail.png"
                class="img-mail"
                quality="40"
              ></g-image>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: "Kontakt",
    },
    data() {
      return {
        name: "",
        nameRules: [(v) => !!v || "Obavezno polje"],
        mail: "",
        emailRules: [
          (v) => !!v || "Obavezno polje",
          (v) => /.+@.+/.test(v) || "Krivi format maila",
        ],
        broj: "",
        tekst: "",
        checkbox: true,
        valid: false,
      };
    },
    methods: {
      submit() {
        console.log("Submited");
      },
    },
  };
</script>

<style>
  .img-mail {
    max-width: 200px;
  }
</style>