  <template>
  <v-app>
    <NavDrawer />
    <v-main style="padding: 0px 0px 0px 56px">
      <DefaultLayout>
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
      </DefaultLayout>
    </v-main>
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
  * {
    color: #404040;
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
  .img-content {
    width: 100%;
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease-in;
  }
  .slide-fade-leave-active {
    transition: all 0.8s ease-out;
  }
  .slide-fade-leave-to
       /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(1000px);
    opacity: 0;
  }
  .slide-fade-enter {
    transform: translateX(-200px);
    opacity: 0;
  }
  .v-window__next,
  .v-window__prev {
    display: none !important;
  }
  .color p,
  .color li {
    color: white !important;
  }
</style>