<template>
  <div class="flex flex-col items-center" id="emoji-edior">
    <main-emoji-container width="4" height="4" />
    <div class="flex">
      <sub-emoji-container width="2" height="2" />
      <sub-emoji-container width="2" height="2" />
    </div>
  </div>
</template>

<script>
import MainEmojiContainer from "@/components/MainEmojiContainer.vue";
import SubEmojiContainer from "@/components/SubEmojiContainer.vue";
export default {
  name: "EmojiEditor",
  components: {
    MainEmojiContainer,
    SubEmojiContainer,
  },
};
</script>

<style scoped>
#emoji-edior {
  font-family: monospace;
}
</style>
