<template>
  <CommonSearchForm/>
  <UserList/>
  <n-button tertiary type="primary" @click="toHome">
    toHome
  </n-button>
</template>

<script setup lang="ts">
definePageMeta({
  name: "userList"
})
const toHome = async () => {
  await alert("to home~!")
  const router = useRouter();
  router.push("/")
}
</script>
<style scoped>
</style>
