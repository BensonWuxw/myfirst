<template>
  <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
    <a-form :model="formState" ref="form" name="nest-messages" :validate-messages="validateMessages">
      <a-form-item :name="['training', 'type']" label="类型" :rules="[{ required: true }]">
        <a-select ref="select" v-model:value="formState.training.type" style="width: 120px">
          <a-select-option value="HIIT">HIIT</a-select-option>
          <a-select-option value="RUN">跑步</a-select-option>
          <a-select-option value="rest">休息</a-select-option>
          <a-select-option value="jiaban">加班</a-select-option>
          <a-select-option value="delete">shanchu</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :name="['training', 'times']" label="组数" :rules="[{ type: 'number', min: 4, max: 20 }]">
        <a-input-number v-model:value="formState.training.times" :min="4" :max="20" />
      </a-form-item>

    </a-form>
  </a-modal>
</template>
  <script setup lang="ts">
import { ref, reactive } from "vue";
const visible = ref<boolean>(false);
const form = ref()
const emits = defineEmits(['addTraining'])
const validateMessages = {
  required: "${label} is required!",
  types: {
    type: "${label} is not a valid email!",
    times: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const formState = reactive({
  training: {
    type: "HIIT",
    times: 4,
  },
});

const showModal = () => {
  visible.value = true;
  
  
};

const handleOk = async (e: MouseEvent) => {
  await form.value.validateFields().then((res:any) => {
    let data = {
      ...res.training
    }
    visible.value = false;
    emits('addTraining', data)
  }).catch((error:any) => {
    console.log(error)
  })
};
defineExpose({ showModal, handleOk });
</script>
  
  