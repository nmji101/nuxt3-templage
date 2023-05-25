<template>
  <CommonSearchForm/>
  <UserList/>
  <n-space>
    <n-button tertiary type="primary" @click="toShowAddUserModal">
      add User
    </n-button>
    <n-button tertiary type="primary" @click="toHome">
      toHome
    </n-button>
  </n-space>
  <UserForm :show-modal="showAddUserModal" @setShowModal="setShowModal"/>
</template>

<script setup lang="ts">
definePageMeta({
  name: "userList"
})


const showAddUserModal = ref<boolean>(false);
const toShowAddUserModal = () => {
  showAddUserModal.value = true;
}
const toHome = async () => {
  const router = useRouter();
  router.push("/")
}

const setShowModal = (isShow:boolean) => {
  showAddUserModal.value = isShow
}
</script>
<style scoped>
</style>
