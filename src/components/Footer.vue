<template>
  <div class="imgBackground bg-black flex items-end justify-center text-white">
    <div
      class="flex w-full max-w-6xl justify-between items-center h-20 text-gray-300 tracking-widest"
    >
      <div>2021 ZIHAO.WIKI</div>
      <div>
        <a href="">关于我</a>
        <a class="ml-6" href="">文章归档</a>
        <a class="ml-6" href="">友情链接</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer.vue",
};
</script>

<style scoped>
.imgBackground {
  height: 30vh;
  background-image: url("../assets/images/footer.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
