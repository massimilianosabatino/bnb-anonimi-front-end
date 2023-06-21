<script>
import HeaderApp from "./components/header/HeaderApp.vue";
import FooterApp from "./components/footer/FooterApp.vue";
import MainApp from "./components/main/MainApp.vue";
import JumboApp from "./components/header/JumboApp.vue";
export default {
  name: "App",
  components: {
    HeaderApp,
    JumboApp,
    MainApp,
    FooterApp
  },
};
</script>

<template>
  <HeaderApp />
  <JumboApp />
  <MainApp />
  <FooterApp />
</template>

<style lang="scss">


</style>
