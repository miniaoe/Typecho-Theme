<template>
  <div>
    <div class="imgBackground"></div>
    <main class="flex justify-center">
      <EssayContent
        v-if="show"
        :content="content"
        class="w-full max-w-6xl p-8 mt-8"
      />
    </main>
  </div>
</template>

<script>
import EssayContent from "../components/EssayContent.vue";
import API from "../module/api";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Essay.vue",
  components: { EssayContent },
  setup() {
    const route = useRoute();
    const content = ref({});
    const show = ref(false);

    onMounted(async () => {
      const res = await API.getEssayContent(route.params.id);
      content.value = res.data.data;
      show.value = true;
    });

    return {
      content,
      show,
    };
  },
};
</script>

<style scoped>
.imgBackground {
  height: 25vh;
  background-image: url("../assets/images/bgimg.jpg");
  background-color: #00000080;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
}
</style>
