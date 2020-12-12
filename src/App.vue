<template>
  <div class="container mx-auto h-screen flex items-center justify-center">
    <emoji-container />
  </div>
</template>

<script>
import EmojiContainer from "./components/EmojiContainer.vue";

export default {
  name: "App",
  components: {
    EmojiContainer,
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
