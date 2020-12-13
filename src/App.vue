<template>
  <div
    class="container mx-auto h-screen flex flex-col items-center justify-center"
  >
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
  setup() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input {
  background-color: transparent;
}
</style>
