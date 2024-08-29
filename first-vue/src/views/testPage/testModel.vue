<template>
  <a-card title="洪水过程线">
    <a-row :gutter="16">
      <a-col :span="4">
        <a-card title="设计工程">
            <a-skeleton active />
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card title="典型年">
            <a-skeleton active />
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card title="洪水频率（%）">
            <a-skeleton active />
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card title="地区组成">
            <a-skeleton active />
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="现存过程线">
            <a-skeleton active />
        </a-card>
      </a-col>
    </a-row>
  </a-card>
  <a-card title="水库特性" style="margin-top: 20px;height: 20%">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card title="龙羊峡">
            <a-skeleton active />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="刘家峡">
            <a-skeleton active />
        </a-card>
      </a-col>
    </a-row>
  </a-card>
  <a-card title="调洪原则" style="margin-top: 20px;">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card title="龙羊峡">
            <a-skeleton active />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="刘家峡">
            <a-skeleton active />
        </a-card>
      </a-col>
    </a-row>
  </a-card>
  <a-row :gutter="16" style="margin-top: 20px;">
      <a-col :span="12">
        <a-card title="选项">
            <a-skeleton active />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="操作">
            <a-skeleton active />
        </a-card>
      </a-col>
    </a-row>
  
</template>
<script>
export default {
  setup() {
    return {
      dataSource: [1,1,1,1,1,1,1,1,1],
      columns: [],
    };
  },
};
</script>
<style lang="less" scoped>
</style>