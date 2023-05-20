<template>
<!--  //TODO header footer-->
  <n-layout>
    <n-layout-header> <h1 style="margin-left: 10px">{{ $route.name }} 페이지</h1> </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          style="max-height: 320px"
      >
        <client-only>
          <MenuList/>
        </client-only>
      </n-layout-sider>
      <n-layout style="min-height:750px; margin: 10px 10px 0px 10px">
        <slot />
      </n-layout>
    </n-layout>
    <n-layout-footer>footer </n-layout-footer>
  </n-layout>
</template>

<script lang="ts" setup>
</script>

<style scoped></style>
