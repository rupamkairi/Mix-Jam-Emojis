<template>
  <div ref="emoji_editor" id="emoji-edior" class="bg-transparent">
    <div class="flex flex-col items-center relative z-10">
      <!-- <emoji-container size="4" emoji="💻" color="blue" /> -->
      <main-emoji-container size="4" emoji="💻" />
      <div class="flex z-20" :class="computed_position">
        <!-- <emoji-container size="2" emoji="🌡️" color="red" /> -->
        <sub-emoji-container size="2" emoji="🌡️" />
      </div>
    </div>
  </div>
  <div class="mt-4" id="position-selector">
    <div>
      <input
        class="ml-2 mr-1"
        type="radio"
        v-model="position"
        id="top-left"
        value="top_left"
      />
      <label class="ml-1 mr-2" for="top-left">top-left</label>
    </div>
    <div>
      <input
        class="ml-2 mr-1"
        type="radio"
        v-model="position"
        id="top-right"
        value="top_right"
      />
      <label class="ml-1 mr-2" for="top-right">top-right</label>
    </div>
    <div>
      <input
        class="ml-2 mr-1"
        type="radio"
        v-model="position"
        id="bottom-left"
        value="bottom_left"
      />
      <label class="ml-1 mr-2" for="bottom-left">bottom-left</label>
    </div>
    <div>
      <input
        class="ml-2 mr-1"
        type="radio"
        v-model="position"
        id="bottom-right"
        value="bottom_right"
      />
      <label class="ml-1 mr-2" for="bottom-right">bottom-right</label>
    </div>
  </div>
  <div class="mt-2">
    <input id="export-mode" type="checkbox" v-model="exportMode" />
    <label class="ml-2" for="export-mode">Enable Export Mode</label>
  </div>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    @click="exportImage"
  >
    Export PNG
  </button>
</template>

<script>
import MainEmojiContainer from "@/components/MainEmojiContainer.vue";
import SubEmojiContainer from "@/components/SubEmojiContainer.vue";
// import EmojiContainer from "@/components/EmojiContainer.vue";
import html2canvas from "html2canvas";
import { useExportMode } from "../store";
import { computed, ref } from "vue";
export default {
  name: "EmojiEditor",
  components: {
    MainEmojiContainer,
    SubEmojiContainer,
    // EmojiContainer,
  },
  setup() {
    const { exportMode } = useExportMode();
    const emoji_editor = ref("");
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

    function exportImage() {
      // console.log(emoji_editor.value);

      html2canvas(emoji_editor.value).then((canvas) => {
        // console.log(canvas);

        // TODO: Changing white background into transparent one.
        // let ctx = canvas.getContext("2d");
        // let image = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // let imageData = image.data;
        // let len = imageData.length;
        // for (let i = 0; i < len; i += 4) {
        //   if (
        //     imageData[i] == 255 &&
        //     imageData[i + 1] == 255 &&
        //     imageData[i + 2] == 255
        //   ) {
        //     imageData[i + 3] = 50;
        //   }
        // }
        // console.log(imageData);
        // let newImage = ctx.createImageData(canvas.width, canvas.height);
        // ctx.putImageData(newImage, 0, 0);

        let img = canvas.toDataURL("image/png");

        var link = document.createElement("a");
        link.download = "mixjam-emoji.png";
        link.href = img;
        link.click();
      });
    }

    return {
      position,
      computed_position,
      emoji_editor,
      exportImage,
      exportMode,
    };
  },
};
</script>

<style scoped></style>
