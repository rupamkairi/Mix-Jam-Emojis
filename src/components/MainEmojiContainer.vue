<template>
  <div class="flex">
    <div
      class="rounded border-solid border-2 border-blue-500 outline-none select-none main-emoji-box"
      :class="computed_width_height"
    >
      <!-- {{ main_emoji }} -->
      <div
        class="bg-blue-200 w-full h-full"
        :style="{ fontSize: computed_fontSize + 'rem' }"
      >
        {{ main_emoji }}
      </div>
    </div>
    <div class="flex flex-col font-bold text-lg text-blue-700 ml-2">
      <span>
        Size:
        <input class="outline-none w-10" type="text" v-model="main_size" />
      </span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "MainEmojiContainer",
  props: {
    size: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const main_size = ref(props.size);
    const main_emoji = ref(props.emoji);

    const computed_fontSize = computed(() => 2.5 * main_size.value);
    const computed_width_height = computed(
      () => `w-${16 * main_size.value} h-${16 * main_size.value}`
    );
    // const main_emoji = ref("💻");
    // const sub_emoji = ref("🚀");
    // return { main_emoji, sub_emoji };

    return {
      main_size,
      computed_width_height,
      computed_fontSize,
      main_emoji,
    };
  },
};
</script>

<style scoped>
.main-emoji-box {
  font-size: 2rem;
}
</style>
