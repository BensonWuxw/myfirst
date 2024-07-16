<template>
  <a-table :data-source="tableData" bordered :scroll="{ x: 1500 }">
    <a-table-column title="名称" key="name" align="center" data-index="name" :width="200" :fixed="'left'"></a-table-column>
    <a-table-column-group v-for="(months, year) in dateList" :key="year" :title="`${year}年`">
      <a-table-column v-for="month in months" align="center" :width="100" :key="month" :title="`${month}月`">
        <template #default="{ record }">
          <div class="process-box" v-if="record.plan_process[year] && record.plan_process[year].includes(month) || record.actual_process[year] && record.actual_process[year].includes(month)">
            <div class="plan-process" v-if="record.plan_process[year] && record.plan_process[year].includes(month)">
              <div class="item" v-if="record.planSameYearMonth" :style="record.planProcessStyle"></div>
              <div v-else>
                <div class="item start" v-if="record.plan_start.Y == year && record.plan_start.M == month" :style="record.plan_start.itemStyle"></div>
                <div class="item end" v-if="record.plan_end.Y == year && record.plan_end.M == month" :style="record.plan_end.itemStyle"></div>
                <div class="item" v-if="!(record.plan_start.Y == year && record.plan_start.M == month || record.plan_end.Y == year && record.plan_end.M == month)"></div>
              </div>
            </div>
            <div class="actual-process" v-if="record.actual_process[year] && record.actual_process[year].includes(month)">
              <div class="item" v-if="record.actualSameYearMonth" :style="record.actualProcessStyle">
                <div class="percent_item start" v-if="record.percentSameYearMonth" :style="record.percentProcessStyle"></div>
              </div>
              <div class="item-box" v-else>
                <div class="item start" v-if="record.actual_start.Y == year && record.actual_start.M == month" :style="record.actual_start.itemStyle">
                  <div class="percent_item start" v-if="record.percent_process[year] && record.percent_process[year].includes(month) && record.percent_start.Y == year && record.percent_start.M == month" :style="record.percent_start.itemStyle"></div>
                </div>
                <div class="item end" v-if="record.actual_end.Y == year && record.actual_end.M == month" :style="record.actual_end.itemStyle">
                  <div class="percent_item end" v-if="record.percent_process[year] && record.percent_process[year].includes(month) && record.percent_end.Y == year && record.percent_end.M == month" :style="record.percent_end.itemStyle"></div>
                </div>
                <div class="item" v-if="!(record.actual_start.Y == year && record.actual_start.M == month || record.actual_end.Y == year && record.actual_end.M == month)">
                  <div class="percent_item" v-if="record.percent_process[year] && record.percent_process[year].includes(month) && record.percent_end.Y == year && record.percent_end.M == month" :style="record.percent_end.itemStyle"></div>
                  <div class="percent_item" v-if="record.percent_process[year] && record.percent_process[year].includes(month) && !(record.percent_end.Y == year && record.percent_end.M == month)"></div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </a-table-column>
    </a-table-column-group>
  </a-table>
</template>
<script setup>
import { reactive, ref } from 'vue';
const tableData = reactive(
  [
    {
      name: "单位A施工期间",
      plan_start_time: "2023-02-1",
      plan_end_time: "2023-2-28",
      actual_start_time: "2023-2-7",
      actual_end_time: "2023-6-22",
      percent: 85,
    },
    {
      name: "单位B施工期间",
      plan_start_time: "2023-07-12",
      plan_end_time: "2024-01-12",
      actual_start_time: "2023-11-10",
      actual_end_time: "2024-01-10",
      percent: 76,
    }
  ]
)
const dateList = ref({})

const handleDate = (date) => {
    let monthHasDay = 30;
    let currentDate = new Date(date)
    let day = currentDate.getDate()
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        monthHasDay = 31
    } else {
        if (month === 2) {
            if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
            monthHasDay = 29;
            } else {
            monthHasDay = 28;
            }
        } else {
            monthHasDay = 30;
        }
    }
    return {d: day, M: month, Y: year, monthHasDay: monthHasDay}
}
const getDataBetweenDates = (startTime, endTime) => {
    let start = handleDate(startTime);
    let end = handleDate(endTime);
    let data = {}
    data[start.Y] = [];
    data[end.Y] = [];
    let year = end.Y - start.Y
    if (year === 0) {
        for(let m = start.M; m <= end.M; m++) {
            data[start.Y].push(m)
        }
    } else if (year === 1) {
        for(let m = start.M; m <= 12; m++) {
            data[start.Y].push(m)
        }
        for(let n = 1; n <= end.M; n++) {
            data[end.Y].push(n)
        }
    } else {
        for(let m = start.M; m <= 12; m++) {
            data[start.Y].push(m)
        }
        for(let mid = 1; mid < year; mid++) {
            data[start.Y + mid] = [1,2,3,4,5,6,7,8,9,10,11,12];
        }
        for(let n = 1; n <= end.M; n++) {
            data[end.Y].push(n)
        }
    }
    return data;
}
const getDaysBetweenDates = (startTime, endTime) => {
    let d1 = new Date(startTime);
    let d2 = new Date(endTime);
    let timeDiff = Math.abs(d2.getTime() - d1.getTime());
    let days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return days;
}
const handleDateStyle = (startDate, endDate) => {
    let start = handleDate(startDate)
    let end = handleDate(endDate);
    let sameYearMonth = false;
    let processStyle = null;
    if (end.Y === start.Y && end.M === start.M) {
    processStyle = {
        "left": ((start.d - 1) * 100 / start.monthHasDay) + "%",
        "right": ((start.monthHasDay -  end.d) * 100 / start.monthHasDay) + "%",
        "border-radius": '4px'
    }
    if (end.d > start.monthHasDay) processStyle.right = 0
        sameYearMonth = true
    } else {
        start.itemStyle = {
            "left": ((start.d + 1)  * 100 / start.monthHasDay)  + "%",
            "right": 0
        }
        end.itemStyle = {
            "left": 0,
            "right": ((start.monthHasDay -  (end.d + 1))  * 100 / start.monthHasDay)  + "%"
        }
    }
    return {
        start: start,
        end: end,
        sameYearMonth: sameYearMonth,
        processStyle: processStyle
    }
}
const handlePercentDateStyle = (actualStartTime, actualEndTime, percent) => {
      let start = handleDate(actualStartTime)
      let end = handleDate(actualEndTime);
      let days = getDaysBetweenDates(actualStartTime, actualEndTime)
      let percentTime = new Date(actualStartTime).getTime() +  days * percent * 24 * 36000
      let percentProcess = getDataBetweenDates(actualStartTime, percentTime)
      let startBorderRadius = '4px 0 0 4px' 
      let endBorderRadius = '0 4px 4px 0'
      let percentDate = handleDate(percentTime)
      let sameYearMonth = false;
      let processStyle = null;
      if (end.Y === start.Y) {
        if (end.M === start.M) {
          processStyle = {
            "left": 0,
            "right": ((end.d -  (percentDate.d)) * 100 / end.d) + "%",
            "border-radius": '4px'
          }
          sameYearMonth = true
        } else {
          if(percentDate.M === start.M) {
            start.itemStyle = {
              "left": 0,
              "right": ((start.monthHasDay -  percentDate.d)  * 100 / (start.monthHasDay - start.d))  + "%",
              "border-radius": '4px'
            }
            percentDate.itemStyle = {
              "left": 0,
              "right": ((start.monthHasDay -  percentDate.d)  * 100 / start.monthHasDay)  + "%",
              "border-radius": '4px'
            }
          } else if (percentDate.M > start.M &&  percentDate.M < end.M) {
            start.itemStyle = {
              "left": 0,
              "right": 0,
              "border-radius": startBorderRadius
            }
            percentDate.itemStyle = {
              "left": 0,
              "right": ((percentDate.monthHasDay - percentDate.d)  * 100 / percentDate.monthHasDay)  + "%",
              "border-radius": endBorderRadius
            }
          } else if (percentDate.M === end.M) {
            start.itemStyle = {
              "left": 0,
              "right": 0,
              "border-radius": startBorderRadius
            }
            percentDate.itemStyle = {
              "left": 0,
              "right": ((end.d -  percentDate.d)  * 100 / end.d)  + "%",
              "border-radius": endBorderRadius
            }
          }
        }
      } else {
        
        if (percentDate.M === start.M) {
          start.itemStyle = {
            "left": 0,
            "right": ((start.monthHasDay -  percentDate.d) * 100 / (start.monthHasDay - start.d)) + "%",
            "border-radius": '4px'
          }
        } else if (percentDate.M === end.M && percentDate.Y === end.Y) {
          start.itemStyle = {
            "left": 0,
            "right": 0,
            "border-radius": startBorderRadius
          }
          percentDate.itemStyle = {
            "left": 0,
            "right": ((end.d -  percentDate.d)  * 100 / end.d)  + "%",
            "border-radius": endBorderRadius
          }
        } else {
          start.itemStyle = {
            "left": 0,
            "right": 0,
            "border-radius": startBorderRadius
          }
          percentDate.itemStyle = {
            "left": 0,
            "right": ((percentDate.monthHasDay - percentDate.d)  * 100 / percentDate.monthHasDay)  + "%",
            "border-radius": endBorderRadius
          }
        }
      }
   
      return {
        start: start,
        end: percentDate,
        sameYearMonth: sameYearMonth,
        processStyle: processStyle,
        percentProcess: percentProcess
      }
    }
const initTableData = (startTime, endTime) => {
    dateList.value = getDataBetweenDates(startTime, endTime);
    tableData.map(item => {
        item.plan_process = getDataBetweenDates(item.plan_start_time, item.plan_end_time);
        item.actual_process = getDataBetweenDates(item.actual_start_time, item.actual_end_time);
        let dateStyle = handleDateStyle(item.plan_start_time,item.plan_end_time) ;
        item.planSameYearMonth = dateStyle.sameYearMonth;
        item.planProcessStyle = dateStyle.processStyle ? dateStyle.processStyle : '';
        item.plan_start = dateStyle.start;
        item.plan_end = dateStyle.end;
        let actualDateStyle = handleDateStyle(item.actual_start_time,item.actual_end_time);
        item.actualSameYearMonth = actualDateStyle.sameYearMonth;
        item.actualProcessStyle = actualDateStyle.processStyle ? actualDateStyle.processStyle : '';
        item.actual_start = actualDateStyle.start;
        item.actual_end = actualDateStyle.end;
        let percentDateStyle = handlePercentDateStyle(item.actual_start_time, item.actual_end_time, item.percent);
        item.percent_start = percentDateStyle.start;
        item.percent_end = percentDateStyle.end;
        item.percentProcessStyle = percentDateStyle.processStyle ? percentDateStyle.processStyle : '';
        item.percentSameYearMonth = percentDateStyle.sameYearMonth;
        item.percent_process = percentDateStyle.percentProcess
        console.log(item)
    })
}
initTableData("2023-01-12", "2025-01-30")
</script>
<style lang="less" scoped>
::v-deep .ant-table {
    tfoot>tr>td, tfoot>tr>th, .ant-table-tbody>tr>td{
        padding: 0 0!important;
    }
}
.process-box{
  width: 100px;
  height: 40px;
  position: relative;
  margin: 10px 0;
  .plan-process{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 15px;
  }
  .actual-process{
    position: absolute;
    top: 25px;
    left: 0;
    right: 0;
    height: 15px;
  }
  .percent_item{
    position: absolute;
    height: 15px;
    left: 0;
    right: 0;
    background-color: red;
  }

}
.item {
  position: absolute;
  left: 0;
  right: 0;
  background: greenyellow;
  height: 15px;
  &.start{
    border-radius: 4px 0 0 4px;
  }
  &.end{
    border-radius: 0 4px 4px 0 ;
  }
}
</style>