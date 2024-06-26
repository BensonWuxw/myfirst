<template>
  <a-calendar v-model:value="date" @select="onSelect">
    <template #dateCellRender="{ current }">
      <div class="times" :class="{
          'rest': Object(trainingListObj[dayjs(current).format('YYYY-MM-DD')]).type === 'rest',
          'jiaban': Object(trainingListObj[dayjs(current).format('YYYY-MM-DD')]).type === 'jiaban',
          }">
        <h5>{{ Object(trainingListObj[dayjs(current).format('YYYY-MM-DD')]).type}}</h5>
        <h5>{{ Object(trainingListObj[dayjs(current).format('YYYY-MM-DD')]).times }}</h5>
      </div> 
    </template>
  </a-calendar>
  <selectDate ref="selectDateDialog" @addTraining="addTraining"></selectDate>
</template>
<script lang="ts" setup>
import { ref,reactive } from "vue";
import dayjs, { Dayjs } from 'dayjs';
import selectDate from "./selectDate.vue";

type trainingItem = {
  times: number; 
  type: string;
  date: any | string;
}

let list: null | string = window.localStorage.getItem('training-list')
const trainingListObj = reactive<any>(JSON.parse(list) || {})
const selectDateDialog = ref()
const date = ref<Dayjs>();
const selectedValue = ref(dayjs('2024-6-25'));

const onSelect = (value: Dayjs, mode: string) => {
  console.log(dayjs(value).format('YYYY-MM-DD'), mode)
    date.value = value;
    selectedValue.value = value;
    selectDateDialog.value.showModal()
};

const addTraining = (data: {times: number, type: string}) => {
  let item: trainingItem = {
    ...data,
    date: dayjs(date.value).format('YYYY-MM-DD')
  }
  trainingListObj[dayjs(date.value).format('YYYY-MM-DD')] = data.type === 'delete' ? {} : item
  window.localStorage.setItem('training-list', JSON.stringify(trainingListObj))
}

</script>
  <style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
.times{
  display: flex;
  flex-flow: column;
  font-size: 24px;
  
}
.times.rest h5{
  background: #000;
  color: blue;
}
.times.jiaban h5{
  background: #000;
  color: red;
}
</style>