<script setup lang="ts">
</script>

<template>
    <canvas class="glslCanvas" data-fragment-url="/shaders/Art1.frag" width="500" height="500"></canvas>
  <canvas class="glslCanvas" data-fragment-url="/shaders/HelloWorld.frag" width="500" height="500"></canvas>
  <canvas class="glslCanvas" data-fragment-url="/shaders/SineFunction.frag" width="500" height="500"></canvas>
  <canvas class="glslCanvas" data-fragment-url="/shaders/FragCoord.frag" width="500" height="500"></canvas>
  <canvas class="glslCanvas" data-fragment-url="/shaders/AlDrawingLinePlot.frag" width="500" height="500"></canvas>
  <canvas class="glslCanvas" data-fragment-url="/shaders/AlDrawingLinePlotPOW5.frag" width="500" height="500"></canvas>
  <canvas class="glslCanvas" data-fragment-url="/shaders/Step.frag" width="500" height="500"></canvas>
  <canvas class="glslCanvas" data-fragment-url="/shaders/SmoothStep.frag" width="500" height="500"></canvas>



</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
