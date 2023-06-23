<script>
import HeaderApp from "./components/header/HeaderApp.vue";
import FooterApp from "./components/footer/FooterApp.vue";
import { router } from "./router";
export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp
  },
};
</script>

<template>
  <HeaderApp />
  <router-view></router-view>
  <FooterApp></FooterApp>
</template>

<style lang="scss">


</style>
