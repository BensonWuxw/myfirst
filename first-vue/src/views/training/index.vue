<template>
  <a-calendar>
    <template #dateCellRender="{ current }">
      <div v-if="trainingListObj[dayjs(current).format('YYYY-MM-DD')]" class="times" :class="{
          'rest': Object(trainingListObj[dayjs(current).format('YYYY-MM-DD')]).type === 'rest',
          'jiaban': Object(trainingListObj[dayjs(current).format('YYYY-MM-DD')]).type === 'jiaban',
          }">
        <h5>{{ Object(trainingListObj[dayjs(current).format('YYYY-MM-DD')]).type}}</h5>
        <h5>{{ Object(trainingListObj[dayjs(current).format('YYYY-MM-DD')]).times }}</h5>
      </div> 
      <div v-else class="none-write">
        <a-button class="tracing-add-btn" @click="onSelect(dayjs(current).format('YYYY-MM-DD'))">添加标记</a-button>
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
// window.localStorage.removeItem('training-list')
let list: null | string = window.localStorage.getItem('training-list')
const sixMonthData = {
    "2024-06-01": {
        "type": "rest",
        "times": 4,
        "date": "2024-06-01"
    },
    "2024-06-02": {
        "type": "rest",
        "times": 4,
        "date": "2024-06-02"
    },
    "2024-06-04": {
        "type": "HIIT",
        "times": 4,
        "date": "2024-06-04"
    },
    "2024-06-12": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-12"
    },
    "2024-06-24": {
        "type": "HIIT",
        "times": 10,
        "date": "2024-06-24"
    },
    "2024-06-03": {
        "type": "HIIT",
        "times": 4,
        "date": "2024-06-03"
    },
    "2024-06-05": {
        "type": "HIIT",
        "times": 6,
        "date": "2024-06-05"
    },
    "2024-06-06": {
        "type": "HIIT",
        "times": 6,
        "date": "2024-06-06"
    },
    "2024-06-07": {
        "type": "jiaban",
        "times": 6,
        "date": "2024-06-07"
    },
    "2024-06-08": {
        "type": "HIIT",
        "times": 6,
        "date": "2024-06-08"
    },
    "2024-06-09": {
        "type": "HIIT",
        "times": 6,
        "date": "2024-06-09"
    },
    "2024-06-10": {
        "type": "HIIT",
        "times": 6,
        "date": "2024-06-10"
    },
    "2024-06-16": {
        "type": "rest",
        "times": 6,
        "date": "2024-06-16"
    },
    "2024-06-11": {
        "type": "HIIT",
        "times": 6,
        "date": "2024-06-11"
    },
    "2024-06-13": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-13"
    },
    "2024-06-14": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-14"
    },
    "2024-06-15": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-15"
    },
    "2024-06-17": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-17"
    },
    "2024-06-18": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-18"
    },
    "2024-06-19": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-19"
    },
    "2024-06-20": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-20"
    },
    "2024-06-21": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-21"
    },
    "2024-06-22": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-22"
    },
    "2024-06-23": {
        "type": "HIIT",
        "times": 6,
        "date": "2024-06-23"
    },
    "2024-06-25": {
        "type": "HIIT",
        "times": 10,
        "date": "2024-06-25"
    },
    "2024-06-26": {
        "type": "rest",
        "times": 4,
        "date": "2024-06-26"
    },
    "2024-06-27": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-27"
    },
    "2024-06-28": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-28"
    },
    "2024-06-29": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-29"
    },
    "2024-06-30": {
        "type": "HIIT",
        "times": 8,
        "date": "2024-06-30"
    }
}
const trainingListObj = reactive<any>({...sixMonthData, ...JSON.parse(list)})
const selectDateDialog = ref()
const date = ref<Dayjs>();

const onSelect = (value: Dayjs) => {
  console.log(value)
  date.value = value;
  selectDateDialog.value.showModal()
};

const addTraining = (data: {times: number, type: string}) => {
  let item: trainingItem = {
    ...data,
    date: date.value
  }
  trainingListObj[date.value] = data.type === 'delete' ? {} : item
  window.localStorage.setItem('training-list', JSON.stringify(trainingListObj))
}

</script>
  <style scoped lang="less">
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

::v-deep .ant-picker-calendar-date{
  .none-write{
    width: 100%;
    height: 100%;
    .tracing-add-btn{
      display: none;
    }
    
  }
  &:hover{
      .tracing-add-btn{
        display: block;
      }
    }
  }
</style>