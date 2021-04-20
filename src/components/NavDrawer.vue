<template>
  <v-navigation-drawer class="asideMenu" permanent fixed expand-on-hover>
    <v-list>
      <g-link to="/">
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </g-link>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <g-link to="/akcije">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-sale</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="asideMenuItem">Akcije</v-list-item-title>
        </v-list-item>
      </g-link>
      <g-link to="/onama">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="asideMenuItem">O Nama</v-list-item-title>
        </v-list-item>
      </g-link>
      <g-link to="/usluge">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-code-json</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="asideMenuItem">Usluge</v-list-item-title>
        </v-list-item>
      </g-link>
      <g-link to="/paketi">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-archive</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="asideMenuItem">Paketi</v-list-item-title>
        </v-list-item>
      </g-link>
      <g-link to="/kontakt">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="asideMenuItem">Kontakt</v-list-item-title>
        </v-list-item>
      </g-link>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
  .asideMenu {
    background-color: #ecf8ff;
  }
  .theme--light.v-icon,
  .asideMenuItem {
    color: #4aade2;
  }
</style>