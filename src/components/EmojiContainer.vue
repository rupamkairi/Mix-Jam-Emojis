<template>
  <div class="flex">
    <div
      class="bg-transparent select-none main-emoji-box"
      :class="[computed_width_height, !exportMode ? computed_border : '']"
    >
      <div
        class=" w-full h-full bg-transparent"
        :style="{ fontSize: computed_fontSize + 'rem' }"
      >
        {{ container_emoji }}
      </div>
    </div>
    <div
      v-if="!exportMode"
      class="flex flex-col font-bold text-lg text-blue-700 ml-2"
    >
      <span>
        Size:
        <input class="outline-none w-10" type="text" v-model="container_size" />
      </span>
      <span>
        Emoji:
        <input
          class="outline-none w-10"
          type="text"
          v-model="container_emoji"
        />
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
    color: {
      type: String,
      required: true,
    },
    sub: {
      type: Boolean,
    },
  },
  setup(props) {
    const { exportMode } = useExportMode();
    const container_size = ref(props.size);
    const container_emoji = ref(props.emoji);
    const container_color = ref(props.color);

    // TODO: Can't seem to render border maybe because of rendering order messes with tailwind. I will later use style binding
    const computed_border = computed(
      () => `rounded border-solid border-3 border-${container_color.value}-500`
    );
    const computed_fontSize = computed(() => 2.5 * container_size.value);
    const computed_width_height = computed(
      () => `w-${16 * container_size.value} h-${16 * container_size.value}`
    );

    return {
      container_size,
      computed_width_height,
      computed_fontSize,
      container_emoji,
      exportMode,
      computed_border,
    };
  },
};
</script>

<style scoped></style>
