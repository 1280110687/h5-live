<template>
  <div class="container">
    <div class="view">
      <h1>home page</h1>
      <button>A</button>
      <van-button type="primary">主要按钮</van-button>
    </div>
    <canvas class="my-canvas" ref="myCanvas"></canvas>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    const myCanvas = ref();
    onMounted(() => {
      methods.drawFireworks();
    });
    const methods = {
      drawExplosion: (x: any, y: any) => {
        const ctx = myCanvas.value.getContext("2d");
        // Draw a circle to represent the explosion
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#fefeee";
        ctx.fill();
      },
      drawFireworks: () => {
        console.warn(myCanvas.value, "myCanvas.value");
        for (let i = 0; i < 50; i++) {
          // Generate random coordinates for the explosion
          const x = Math.random() * myCanvas.value.width;
          const y = Math.random() * myCanvas.value.height;
          methods.drawExplosion(x, y);
        }
      },
    };

    return {
      myCanvas,
      ...methods,
    };
  },
};
</script>
<style lang="scss" scoped>
h1 {
  color: var(--primary-color);
}

.container {
  position: relative;
  height: 100%;
  width: 100%;

  .view {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .my-canvas {
    // position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
