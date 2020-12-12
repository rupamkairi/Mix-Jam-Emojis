<template>
  <div class="flex flex-col items-center" id="emoji-container">
    <div class="flex">
      <div
        class="rounded border-solid border-4 border-blue-500 outline-none w-64 h-64 select-none main-emoji-box"
      >
        <!-- {{ main_emoji }} -->
        <div class="bg-blue-300 w-full h-full"></div>
      </div>
      <div class="flex flex-col font-bold text-lg text-blue-700 ml-2">
        <span>
          Width:
          <input class="outline-none" type="text" />
        </span>
        <span>
          Height:
          <input class="outline-none" type="text"
        /></span>
      </div>
    </div>
    <div class="flex mt-8">
      <div
        class="rounded border-solid border-4 border-red-500 outline-none w-48 h-48 sub-emoji-box"
      >
        <!-- {{ sub_emoji }} -->
        <div class="bg-red-300 w-full h-full"></div>
      </div>
      <div class="flex flex-col font-bold text-lg text-red-700 ml-2">
        <span>
          Width:
          <input class="outline-none" type="text" />
        </span>
        <span>
          Height:
          <input class="outline-none" type="text"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
export default {
  name: "EmojiContainer",
  props: {},
  setup() {
    // const main_emoji = ref("💻");
    // const sub_emoji = ref("🚀");
    // return { main_emoji, sub_emoji };
  },
};
</script>

<style scoped>
#emoji-container {
  display: flex;
  font-family: monospace;
}

.main-emoji-box {
  font-size: 16rem;
}

.sub-emoji-box {
  font-size: 12rem;
  cursor: pointer;
}
</style>
