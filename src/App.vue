<script>
import HeaderApp from "./components/header/HeaderApp.vue";
import FooterApp from "./components/footer/FooterApp.vue";
import MainApp from "./components/main/MainApp.vue";
export default {
  name: "App",
  components: {
    HeaderApp,
    MainApp,
    FooterApp
  },
};
</script>

<template>
  <HeaderApp />
  <MainApp />
  <FooterApp />
</template>

<style lang="scss">


</style>
