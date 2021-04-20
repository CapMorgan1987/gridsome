<template>
  <v-app>
    <v-row>
      <v-col cols="12">
        <v-main>
          <NavDrawer />
          <div class="mainContent">
            <div class="slotDiv">
              <slot />
            </div>
          </div>
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<script>
  import NavDrawer from "~/components/NavDrawer.vue";

  export default {
    components: {
      NavDrawer,
    },
  };
</script>

<style>
  .slotDiv {
    padding-left: 55px;
  }
  .row {
    margin: 0;
  }
  .col {
    padding: 0;
  }
  .mainContent {
    min-height: 100vh;
  }
  a {
    text-decoration: none;
  }
</style>
