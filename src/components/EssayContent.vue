<template>
  <div class="w-full bg-white">
    <div class="mb-8">
      <h1 class="text-2xl mb-2">{{ content.essay.title }}</h1>
      <div class="text-gray-400 aboutTime">
        <span class="mr-4">作者：{{ content.user.nickName }}</span>
        <span class="mr-4">发布日期：{{ content.essay.createTime }}</span>
        <span>{{ content.cate.name }}</span>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "EssayContent.vue",
  props: ["content"],
  setup() {},
};
</script>

<style scoped>
.aboutTime {
  font-size: 12px !important;
}
.content {
  letter-spacing: 0.02rem;
  line-height: 1.6rem;
}
</style>
