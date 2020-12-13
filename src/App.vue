<template>
  <div
    class="container mx-auto h-screen flex flex-col items-center justify-center"
  >
    <p class="text-5xl font-black">Mix&Jam Emojis</p>
    <p class="text-lg font-semibold ">Instruction...</p>
    <p class="text-lg font-semibold">Change the size.</p>
    <p class="text-lg font-semibold">
      Change emoji(put only one character).
    </p>
    <p class="text-lg font-semibold">Set the overlay emoji position.</p>
    <p class="text-lg font-semibold">Check the Export Mode.</p>
    <p class="text-lg font-semibold">
      Downlaod the custom emoji as png file.
    </p>
    <p class="text-lg font-semibold">
      Contribute to
      <a class="underline" href="https://github.com/rupamkairi/MixJam-Emojis"
        >MixJam-Emojis on GitHub</a
      >.
    </p>

    <span class="mb-24"></span>
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

div {
  background-color: transparent;
}
</style>
