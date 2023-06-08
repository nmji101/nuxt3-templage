<template>
  <div style="margin-bottom: 10px">
    <n-icon size="35">
      <heart-circle-outline/>
    </n-icon>
    <n-gradient-text type="info" :size="40">
      jaerong 재롱아 사랑해
    </n-gradient-text>
    <n-icon size="35">
      <heart-circle-sharp/>
    </n-icon>
  </div>
  <div>
    <n-carousel
        :key="'card'"
        :effect="'card'"
        :centered-slides="true"
        :slides-per-view="'auto'"
        draggable
        style="height: 600px"
    >
      <n-carousel-item :style="{ width: '60%'}">
        <img
            class="carousel-img"
            src="/images/main_1.webp"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: '60%'}">
        <img
            class="carousel-img"
            src="/images/main_2.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: '60%'}">
        <img
            class="carousel-img"
            src="/images/main_3.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: '60%' }">
        <img
            class="carousel-img"
            src="/images/main_4.jpg"
        >
      </n-carousel-item>
    </n-carousel>
  </div>
</template>

<script setup lang="ts">
import {HeartCircleOutline,  HeartCircleSharp} from "@vicons/ionicons5";
definePageMeta({
  name: "Main"
})
</script>
<style scoped>
</style>
