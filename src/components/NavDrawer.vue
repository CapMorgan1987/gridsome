<template>
  <div>
    <v-navigation-drawer class="asideMenu" fixed permanent expand-on-hover>
      <v-list style="background-color: white">
        <g-link to="/">
          <v-list-item class="pa-2">
            <g-image
              src="~/assets/logo_single.png"
              class="drawer-logo"
            ></g-image>
            <v-list-item-title class="page-title">{{
              $static.metadata.siteName
            }}</v-list-item-title>
          </v-list-item>
        </g-link>
      </v-list>

      <v-list nav dense>
        <g-link to="/akcije">
          <v-list-item link>
            <g-image src="~/assets/akcije.svg"></g-image>
            <v-list-item-title class="asideMenuItem">Akcije</v-list-item-title>
          </v-list-item>
        </g-link>
        <g-link to="/o-nama">
          <v-list-item link>
            <g-image src="~/assets/nama.svg"></g-image>
            <v-list-item-title class="asideMenuItem">O Nama</v-list-item-title>
          </v-list-item>
        </g-link>
        <g-link to="/usluge">
          <v-list-item link>
            <g-image src="~/assets/usluge.svg"></g-image>
            <v-list-item-title class="asideMenuItem">Usluge</v-list-item-title>
          </v-list-item>
        </g-link>
        <g-link to="/paketi">
          <v-list-item link>
            <g-image src="~/assets/paketi.svg"></g-image>
            <v-list-item-title class="asideMenuItem">Paketi</v-list-item-title>
          </v-list-item>
        </g-link>
        <g-link to="/kontakt">
          <v-list-item link>
            <g-image src="~/assets/mail.svg"></g-image>
            <v-list-item-title class="asideMenuItem">Kontakt</v-list-item-title>
          </v-list-item>
        </g-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
  }
}
</static-query>
<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .drawer-logo {
    width: 45px;
  }
  .page-title {
    font-size: 20px;
    padding-left: 10px;
    color: #404040;
    font-weight: 700;
  }
  .asideMenu {
    background-color: #404040;
  }
  .asideMenuItem {
    color: white;
    padding-left: 10px;
  }
</style>