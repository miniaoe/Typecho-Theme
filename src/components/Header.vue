<template>
  <div class="flex justify-center text-gray-300 tracking-widest">
    <div>
      <ul class="h-full flex items-center">
        <li class="transition-all hover:text-white">
          <router-link to="/" class="py-12 px-12 block">首页</router-link>
        </li>
        <li class="transition-all hover:text-white">
          <a class="py-12 px-12 block" href="">关于</a>
        </li>
      </ul>
    </div>
    <div class="flex items-center">
      <a class="text-4xl px-10 font-normal text-white" href="">
        <h1>网站标题</h1>
      </a>
    </div>
    <div>
      <ul class="flex">
        <li class="transition-all hover:text-white">
          <a class="py-12 px-12 block" href="">归档</a>
        </li>
        <li class="transition-all hover:text-white">
          <a class="py-12 px-12 block" href="">留言</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
