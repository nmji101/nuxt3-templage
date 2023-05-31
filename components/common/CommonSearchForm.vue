<template>
  <n-form
      ref="formRef"
      inline
      :label-width="80"
      v-model="formValue"
      :rules="rules"
  >
    <n-form-item label="Name" path="user.name">
      <n-input v-model="formValue.user.name" placeholder="Input Name" />
    </n-form-item>
    <n-form-item label="Age" path="user.age">
      <n-input v-model="formValue.user.age" placeholder="Input Age" />
    </n-form-item>
    <n-form-item label="Address" path="address">
      <n-input v-model="formValue.address" placeholder="Address" />
    </n-form-item>
    <n-form-item>
      <n-button @click="search">
        search
      </n-button>
    </n-form-item>
  </n-form>
</template>

<script setup lang="ts">
import { FormInst, useMessage } from 'naive-ui'
const formRef = ref<FormInst | null>(null)
const formValue =  ref({
  user: {
    name: '',
    age: ''
  },
  phone: '',
  address: ''
});

const rules = {
  user: {
    name: {
      required: true,
          message: 'Please input your name',
          trigger: 'blur'
    },
    age: {
      required: true,
          message: 'Please input your age',
          trigger: ['input', 'blur']
    }
  },
  phone: {
    required: true,
        message: 'Please input your number',
        trigger: ['input']
  },
  address: {
    required: true,
        message: 'Please input your address',
        trigger: ['input']
  }
};

const search = () => {
  alert("search click!")
}
</script>

<style scoped>

</style>
