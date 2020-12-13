<template>
  <div class="flex">
    <div
      class="bg-transparent outline-none select-none sub-emoji-box"
      :class="[computed_width_height, !exportMode ? border : '']"
    >
      <div
        class="w-full h-full bg-transparent"
        :style="{ fontSize: computed_fontSize + 'rem' }"
      >
        {{ sub_emoji }}
      </div>
    </div>
    <div
      v-if="!exportMode"
      class="flex flex-col justify-end font-bold text-lg text-red-700 ml-2"
    >
      <span>
        Size:
        <input class="outline-none w-10" type="text" v-model="sub_size" />
      </span>
      <span>
        Emoji:
        <input class="outline-none w-10" type="text" v-model="sub_emoji" />
      </span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useExportMode } from "../store";
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
    const { exportMode } = useExportMode();
    const sub_size = ref(props.size);
    const sub_emoji = ref(props.emoji);

    const border = "rounded border-solid border-2 border-red-500 ";
    const computed_fontSize = computed(() => 2.5 * sub_size.value);
    const computed_width_height = computed(
      () => `w-${16 * sub_size.value} h-${16 * sub_size.value}`
    );

    return {
      sub_size,
      computed_width_height,
      computed_fontSize,
      sub_emoji,
      exportMode,
      border,
    };
  },
};
</script>

<style scoped>
.sub-emoji-box {
  font-size: 2rem;
}
</style>
