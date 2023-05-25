<template>
  <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      preset="dialog"
      positive-text="save"
      negative-text="Cancel"
      @positive-click="addUser"
      @negative-click="closeModal"
      @close="closeModal"
  >
    <template #header>
      <div>Add User</div>
    </template>
    <div>
      <n-form ref="formRef" :model="user">
        <n-form-item path="name" label="Name">
          <n-input v-model="user.name" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="age" label="Age">
          <n-input v-model="user.age" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="address" label="Address">
          <n-input v-model="user.address" @keydown.enter.prevent />
        </n-form-item>
      </n-form>
    </div>
  </n-modal>
</template>

<script setup lang="ts">
// import { useDialog } from 'naive-ui'
const props = defineProps({
  showModal: {
    Type: Boolean,
    default: false,
  }
})
const emit = defineEmits(["setShowModal"]);

const {showModal} = toRefs(props)
const user = ref<User>({
  key:0,
  name:"",
  age:0,
  address:"",
  tags: [],
});
const addUser = () => {
  console.log(user.value)
  emit("setShowModal", false)
}
const closeModal = () => {
  emit("setShowModal", false)
}
</script>

<style scoped>

</style>
