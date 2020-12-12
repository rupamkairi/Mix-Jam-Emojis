<template>
  <div class="container mx-auto h-screen flex items-center justify-center">
    <emoji-editor />
  </div>
</template>

<script>
import EmojiEditor from "./components/EmojiEditor.vue";

export default {
  name: "App",
  components: {
    EmojiEditor,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
