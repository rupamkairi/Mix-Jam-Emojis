<template>
  <div id="emoji-edior">
    <div class="flex flex-col items-center relative z-10">
      <main-emoji-container size="4" emoji="💻" />
      <div class="flex z-20" :class="computed_position">
        <sub-emoji-container size="2" emoji="🌡️" />
        <!-- <sub-emoji-container width="2" height="2" /> -->
      </div>
    </div>
  </div>
  <div class="mt-4" id="position-selector">
    <input
      class="ml-2 mr-1"
      type="radio"
      v-model="position"
      id="top-left"
      value="top_left"
    />
    <label class="ml-1 mr-2" for="top-left">top-left</label>
    <input
      class="ml-2 mr-1"
      type="radio"
      v-model="position"
      id="top-right"
      value="top_right"
    />
    <label class="ml-1 mr-2" for="top-right">top-right</label>
    <input
      class="ml-2 mr-1"
      type="radio"
      v-model="position"
      id="bottom-left"
      value="bottom_left"
    />
    <label class="ml-1 mr-2" for="bottom-left">bottom-left</label>
    <input
      class="ml-2 mr-1"
      type="radio"
      v-model="position"
      id="bottom-right"
      value="bottom_right"
    />
    <label class="ml-1 mr-2" for="bottom-right">bottom-right</label>
  </div>
</template>

<script>
import MainEmojiContainer from "@/components/MainEmojiContainer.vue";
import SubEmojiContainer from "@/components/SubEmojiContainer.vue";
import { computed, ref } from "vue";
export default {
  name: "EmojiEditor",
  components: {
    MainEmojiContainer,
    SubEmojiContainer,
  },
  setup() {
    const position = ref("");
    const computed_position = computed(() => {
      switch (position.value) {
        case "top_right":
          return "absolute right-0 top-0";
        case "bottom_left":
          return "absolute left-0 bottom-0";
        case "bottom_right":
          return "absolute right-0 bottom-0";
        default:
          return "absolute left-0 top-0";
      }
    });
    return { position, computed_position };
  },
};
</script>

<style scoped>
#emoji-edior,
#position-selector {
  font-family: monospace;
}
</style>
