<template>
  <div id="app">
    <header class="flex justify-center">
      <Header class="w-full absolute" />
    </header>
    <main>
      <router-view />
    </main>
    <footer class="flex justify-center">
      <Footer class="w-full mt-8" />
    </footer>
  </div>
</template>
<script>
// 引入组件
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {},
};
</script>

<style>
body {
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  background-color: rgba(244, 244, 244, 0.93);
}
.abd {
  border: 1px solid black;
}
</style>
