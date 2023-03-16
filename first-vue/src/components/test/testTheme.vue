<template>
    <div>
        <a-button type="primary" loading />
        <a-button type="primary" shape="circle" loading />
        <a-button danger shape="round" loading />
        <a-date-picker />
        <a-radio>Radio</a-radio>
        <a-slider id="test"  />
    <a-slider  />
    <div>
    <a-tag color="success">success</a-tag>
    <a-tag color="processing">processing</a-tag>
    <a-tag color="error">error</a-tag>
    <a-tag color="warning">warning</a-tag>
    <a-tag color="default">default</a-tag>
    <a-alert message="Success Text" type="success" />
  <a-alert message="Info Text" type="info" />
  <a-alert message="Warning Text" type="warning" />
  <a-alert message="Error Text" type="error" />
  </div>
    </div>
</template>