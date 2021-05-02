<template>
  <div id="app">
    <router-view />
    <Footer v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import Footer from "@/components/footer";
import { reqShops } from "@/api/index";
export default {
  name: "App",
  components: { Footer },

  // mounted() {
  //   const result = reqShops();
  //   console.log(result);
  // },
};
</script>

<style>
</style>
