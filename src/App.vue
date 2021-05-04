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
  .background-package {
    background-color: #4aade2;
  }
  .background-package:nth-child(2) {
    background-color: #404040;
    display: flex;
    flex-direction: row-reverse;
  }
  .background-package:nth-child(3) {
    background-color: #cfcfcf;
  }
  .background-package p,
  .background-package h2,
  .background-package strong {
    color: white;
  }
  .background-package:nth-child(3) p,
  .background-package:nth-child(3) h2,
  .background-package:nth-child(3) strong {
    color: #404040;
  }
  .border-paket {
    background-color: #4aade2;
  }
  .border-paket h3,
  .border-paket p,
  .border-paket li {
    color: white;
  }
  .border-paket:nth-child(2) {
    background-color: #404040;
  }
  .border-paket:nth-child(3) {
    background-color: #cfcfcf;
  }
  .border-paket:nth-child(3) p,
  .border-paket:nth-child(3) h3,
  .border-paket:nth-child(3) h3 strong,
  .border-paket:nth-child(3) li {
    color: #404040;
  }
</style>