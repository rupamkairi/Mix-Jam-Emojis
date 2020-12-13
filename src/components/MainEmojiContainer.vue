<template>
  <div class="flex">
    <div
      class="bg-transparent outline-none select-none main-emoji-box"
      :class="[computed_width_height, !exportMode ? border : '']"
    >
      <!-- {{ main_emoji }} -->
      <div
        class=" w-full h-full bg-transparent"
        :style="{ fontSize: computed_fontSize + 'rem' }"
      >
        {{ main_emoji }}
      </div>
    </div>
    <div
      v-if="!exportMode"
      class="flex flex-col font-bold text-lg text-blue-700 ml-2"
    >
      <span>
        Size:
        <input class="outline-none w-10" type="text" v-model="main_size" />
      </span>
      <span>
        Emoji:
        <input class="outline-none w-10" type="text" v-model="main_emoji" />
      </span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useExportMode } from "../store";
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
    const { exportMode } = useExportMode();
    const main_size = ref(props.size);
    const main_emoji = ref(props.emoji);

    const border = "rounded border-solid border-2 border-blue-500";
    const computed_fontSize = computed(() => 2.5 * main_size.value);
    const computed_width_height = computed(
      () => `w-${16 * main_size.value} h-${16 * main_size.value}`
    );

    return {
      main_size,
      computed_width_height,
      computed_fontSize,
      main_emoji,
      exportMode,
      border,
    };
  },
};
</script>

<style scoped></style>
