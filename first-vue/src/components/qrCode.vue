<template>
    <div class="qrcode-box">
        <img :src="qrImg">
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import QRCode from 'qrcode'

const qrImg = ref('')
var opts = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  quality: 0.3,
  margin: 2,
  color: {
    dark:"#010599FF",
    light:"#FFBF60FF"
  }
}
onMounted(() => {
    QRCode.toDataURL('text', opts, function (err, url) {
        if (err) throw err
        qrImg.value = url
    
    })
})
</script>
<style scoped>
.qrcode-box{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.qrcode-box img{
  width: 25vmin;
  height: 25vmin;
}
</style>