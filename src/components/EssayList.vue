<template>
  <div class="w-full">
    <div class="bg-white p-8">
      <div class="flex items-center">
        <div class="inline-block overflow-hidden text-line">
          <h1
            class="text-2xl font-bold cursor-pointer"
            @click="$emit('viewEssay')"
          >
            {{ item.val.title }}
          </h1>
          <div></div>
        </div>
        <div class="ml-4">
          <div class="category">{{ item.cate.name }}</div>
        </div>
      </div>
      <p class="mt-2 opacity-60">
        {{ item.val.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EssayList.vue",
  props: ["item"],
  setup() {},
};
</script>

<style scoped>
.text-line > div {
  border: 1px solid black;
  left: -100%;
  transition: all 0.3s;
  position: relative;
}
.text-line:hover > div {
  left: 0;
}
.category {
  font-size: 0.8rem;
  background-color: black;
  color: #fff;
  padding: 0.2rem 0.4rem 0.1rem 0.4rem;
  border-radius: 0.2rem;
}
</style>
