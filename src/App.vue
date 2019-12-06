<template>
  <div id="app" :class="themeName">
    <theme-picker />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { mapGetters } from "vuex";
import ThemePicker from "@/components/theme-picker.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    ThemePicker
  },
  computed: {
    ...mapGetters(["themeName"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
