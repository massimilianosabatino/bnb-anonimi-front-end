<script>
import HeaderApp from "./components/header/HeaderApp.vue";
import FooterApp from "./components/footer/FooterApp.vue";
import { router } from "./router";
import { useViewStore } from './viewStore';
import { mapActions } from "pinia";
export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp
  },
  methods: {
    ...mapActions(useViewStore, ['getIpAddress']),
  },
  created() {
    this.getIpAddress();
  }
};
</script>

<template>
  <HeaderApp />
  <router-view></router-view>
  <FooterApp></FooterApp>
</template>

<style lang="scss">


</style>
