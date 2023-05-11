<script lang="ts" setup>
definePageMeta({
  name: "layout-custom"
})
</script>

<template>
<!--  //TODO header footer-->
  <n-layout>
    <n-layout-header> header </n-layout-header>
    <n-layout-content content-style="padding: 24px;">
      <slot/>
    </n-layout-content>
    <n-layout-footer>footer </n-layout-footer>
  </n-layout>
</template>

<style scoped></style>
