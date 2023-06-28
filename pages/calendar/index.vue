<template>
  <div>
    <n-calendar
        v-model:value="value"
        #="{ year, month, date }"
        :is-date-disabled="isDateDisabled"
        @update:value="handleUpdateValue"

    >
      {{ year }}/{{ month }}/{{ date }}
    </n-calendar>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { isYesterday, addDays, isBefore, isToday } from 'date-fns/esm'
definePageMeta({
  name: "calendar"
})

const { data, refresh, error } = await useFetch('/api/calendar', {
  immediate: false,
});
console.log('data', data.value)
console.log('error', error.value)

const message = useMessage()

const value= ref(Date.now());
const handleUpdateValue = (
        _: number,
    { year, month, date }: { year: number; month: number; date: number }
) =>  {
  message.success(`${year}/${month}/${date}`)
};

//달력 disable 날짜
const isDateDisabled  = (timestamp: number)  => {
  if (isBefore(timestamp, new Date()) && !isToday(timestamp)) {
    return true
  }
  return false
};
onMounted(() => {
  refresh();
})
</script>
<style scoped>
</style>
