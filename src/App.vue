<script>
import HeaderApp from "./components/header/HeaderApp.vue";
import FooterApp from "./components/footer/FooterApp.vue";
import JumboApp from "./components/header/JumboApp.vue";
import { router } from "./router";
export default {
  name: "App",
  components: {
    HeaderApp,
    JumboApp,
    FooterApp
  },
};
</script>

<template>
  <HeaderApp />
  <JumboApp />
  <router-view></router-view>
  <FooterApp></FooterApp>
</template>

<style lang="scss">


</style>
