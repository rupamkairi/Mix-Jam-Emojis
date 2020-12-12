<template>
  <div class="flex mt-8">
    <div
      class="rounded border-solid border-4 border-red-500 outline-none select-none sub-emoji-box"
      :class="computed_width_height"
    >
      <!-- {{ main_emoji }} -->
      <div class="bg-red-200 w-full h-full"></div>
    </div>
    <div class="flex flex-col font-bold text-lg text-red-700 ml-2">
      <span>
        Width:
        <input class="outline-none w-10" type="text" v-model="main_width" />
      </span>
      <span>
        Height:
        <input class="outline-none w-10" type="text" v-model="main_height" />
      </span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "SubEmojiContainer",
  props: {
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const main_width = ref(props.width);
    const main_height = ref(props.height);
    const computed_width_height = computed(
      () => `w-${16 * main_width.value} h-${16 * main_height.value}`
    );
    // const main_emoji = ref("💻");
    // const sub_emoji = ref("🚀");
    // return { main_emoji, sub_emoji };

    return { main_width, main_height, computed_width_height };
  },
};
</script>

<style scoped>
.sub-emoji-box {
  font-size: 2rem;
}
</style>
