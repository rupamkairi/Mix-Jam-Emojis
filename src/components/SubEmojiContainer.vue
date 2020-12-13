<template>
  <div class="flex">
    <div
      class="rounded border-solid border-2 border-red-500 outline-none select-none bg-transparent sub-emoji-box"
      :class="computed_width_height"
    >
      <div
        class="w-full h-full bg-transparent"
        :style="{ fontSize: computed_fontSize + 'rem' }"
      >
        {{ sub_emoji }}
      </div>
    </div>
    <div class="flex flex-col justify-end font-bold text-lg text-red-700 ml-2">
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
  name: "SubEmojiContainer",
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
    const sub_emoji = ref(props.emoji);

    const computed_fontSize = computed(() => 2.5 * main_size.value);
    const computed_width_height = computed(
      () => `w-${16 * main_size.value} h-${16 * main_size.value}`
    );

    return {
      main_size,
      computed_width_height,
      computed_fontSize,
      sub_emoji,
    };
  },
};
</script>

<style scoped>
.sub-emoji-box {
  font-size: 2rem;
}
</style>
