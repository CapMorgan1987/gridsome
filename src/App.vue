  <template>
  <v-app>
    <v-row>
      <v-col cols="12">
        <v-main>
          <NavDrawer />
          <DefaultLayout>
            <transition name="slide-fade" mode="out-in">
              <router-view />
            </transition>
          </DefaultLayout>
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
  import DefaultLayout from "~/layouts/Default.vue";

  export default {
    components: {
      NavDrawer,
      DefaultLayout,
    },
  };
</script>

<style>
  .row {
    margin: 0;
  }
  .col {
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .slotDiv {
    padding: 20px 20px 20px 75px;
  }
  .mainContent {
    min-height: 100vh;
  }
  .slide-fade-enter-active {
    transition: all 1s ease;
  }
  .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(1000px);
    opacity: 0;
  }
</style>