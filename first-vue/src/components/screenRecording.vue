<template>
    <a-space>
        <a-button type="primary" @click="startRecording">开始录制</a-button>
        <a-button type="danger" v-show="recordingStatus" @click="stopRecording">停止录制</a-button>
        <a-button type="warning" v-if="showVideo" @click="downloadVideo">下载录屏</a-button>
    </a-space>
    <video class="video-recording" ref="videoBox" v-show="showVideo" controls autoplay></video>
</template>
<script setup>
import { reactive, ref } from "vue"

const videoBox = ref()
const recordingList = reactive([])
const showVideo = ref(false)
const recordingStatus = ref(false)

let currentVideoBlob = reactive(null)
let stream = ref(null)
let mediaRecorder = reactive(null);

const startRecording = async () => {
    recordingStatus.value = true;
    console.log(222)
    stream.value = await navigator.mediaDevices.getDisplayMedia({
        video:true,
    })
    console.log(3333)
    mediaRecorder = new MediaRecorder(stream.value ,{mimeType:"video/webm"})
    mediaRecorder.start();
    //监听录播结束后的回调
    let videoArr = []
    mediaRecorder.ondataavailable = (e) => {
        recordingStatus.value = false;
        if (e.data.size > 0) {
            recordingStatus.value = false;
            recordingList.push(e.data);
            videoArr.push(e.data)
            currentVideoBlob = new Blob(videoArr,{type:"video/mp4"});
            let videourl = URL.createObjectURL(currentVideoBlob);
            showVideo.value = !!videourl 
            videoBox.value.src = videourl;
        }
    };
}

const stopRecording = () => {
    console.log(1111)
    stream.value && stream.value.getTracks().forEach(element => {
        element.stop();
    });
}

const downloadVideo = () => {
    let filename = window.prompt("File name", "screen_recording");
    if(filename){
        let a = document.createElement("a");
        a.href = URL.createObjectURL(currentVideoBlob);
        a.download = `${filename}.mp4`;
        a.click();
        //revokeObjectURL 用于释放 URL.createObjectURL创建对象的URL 让浏览器知道无需保持对文件的引用
        URL.revokeObjectURL(a.href);
    }
}





</script>

<style>
.video-recording{
    margin-top: 18px;
    width: 100%;
    height: calc(100% - 50px);
}
</style>