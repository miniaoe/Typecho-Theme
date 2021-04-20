<template>
  <div>
    <div
      class="imgBackground w-full flex items-center justify-center text-white"
    >
      <div class="text-center tracking-widest">
        <h2 class="text-6xl mb-4">112233</h2>
        <h3>112233</h3>
      </div>
    </div>
    <main class="flex flex-col items-center">
      <EssayList
        v-for="(item, index) in essayList"
        :item="item"
        class="max-w-6xl mt-8"
        @viewEssay="viewEssay(item.val._id)"
      />
    </main>
  </div>
</template>

<script>
import EssayList from "../components/EssayList.vue";
import API from "../module/api.js";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  emits: ["openEssay"],
  components: {
    EssayList,
  },
  setup() {
    const router = useRouter();
    const essayList = ref();

    // 方法
    const getEssay = async () => {
      const res = await API.getEssay("8");
      return res.data.data;
    };

    const viewEssay = (val) => {
      router.push({ path: "/essay/" + val });
    };

    // 声明周期
    onMounted(async () => {
      essayList.value = await getEssay();
    });

    return {
      essayList,
      viewEssay,
    };
  },
};
</script>

<style scoped>
.imgBackground {
  height: 55vh;
  background-image: url("../assets/images/bgimg.jpg");
  background-color: #00000080;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
}
.tracking-widest {
  letter-spacing: 0.4rem;
}
</style>
