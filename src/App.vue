<template>
  <div id="app">
    <router-view />
    <Footer v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import Footer from "@/components/footer";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: { Footer },
  methods: {
    ...mapActions(["getUserInfo"]),
  },
  mounted() {
    this.getUserInfo();
  },
};
</script>

<style>
</style>
