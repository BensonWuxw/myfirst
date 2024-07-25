<template>
  <div class="shandian">
    <canvas ref="shandianBpx"></canvas>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue"
const shandianBpx = ref()
let timeID = null;
let timer = null;

const sd1 = (ele) => {
  var width, height
  var step = 0;
  let canvas = shandianBpx.value
  let ctx = canvas.getContext('2d')

  let bg = [4, 10, 11]

  setTimeout(() => {
    timeID = setInterval(() => {
      pt1.x += 10;
      if (pt1.x > width - 10) {
        clearInterval(timeID)
      }
    }, 60);
  }, 1000)

  var pt1
  var pt2



  setup()

  function setup() {
    canvas.width = width = shandianBpx.value.clientWidth
    canvas.height = height = shandianBpx.value.clientHeight
    ctx.beginPath();
    ctx.rect(0, 0, width, height)
    ctx.fill()
    pt1 = { x: 0, y: height / 2 }//闪电起点
    pt2 = { x: 0, y: height / 2 } //闪电终点
    // draw()
  }
  let times = 0
  timer = setInterval(animate, 60)
  // window.requestAnimationFrame(animate);

  function blur(ctx, canvas, amt) {

    ctx.filter = `blur(${amt}px)`
    ctx.drawImage(canvas, 0, 0)
    ctx.filter = 'none'
    // if (times === 5) {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   times = 0
    // }
  }

  function fade(ctx, amt, width, height) {
    ctx.beginPath();
    ctx.rect(0, 0, width, height)
    ctx.fillStyle = `rgba(${bg[0]}, ${bg[1]}, ${bg[2]}, ${amt})`
    ctx.fill()

  }

  function animate() {
    step++
    times++
    blur(ctx, canvas, 1)
    draw()
    fade(ctx, 0.1, width, height)
    // window.requestAnimationFrame(function(){animate()})
  }

  function draw() {
    var iterations = [pt1, pt2]
    var newiterations, i, j
    for (i = 0; i < 8; i++) {
      newiterations = [iterations[0]]
      for (j = 1; j < iterations.length; j++) {
        newiterations.push(getRandMidpoint(iterations[j - 1], iterations[j], 200 / (i * i + 1)))
        newiterations.push(iterations[j])
      }
      iterations = newiterations.concat([])
    }
    ctx.beginPath();
    ctx.moveTo(iterations[0].x, iterations[0].y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#04e4c9';
    // ctx.strokeStyle = `hsla(${Math.sin( step / 30) * 120 + 50},${90}%,${70}%,1)`
    for (i = 1; i < iterations.length; i++) {
      ctx.lineTo(iterations[i].x, iterations[i].y);
    }
    ctx.stroke()
    ctx.closePath()
  }

  function getRandMidpoint(pa, pb, range) {
    var a = Math.atan2(pb.y - pa.y, pb.x - pa.x) + Math.PI / 2
    var half = { y: (pb.y - pa.y) / 2 + pa.y, x: (pb.x - pa.x) / 2 + pa.x }
    var offset = Math.random() * range / 3 - range / 6  //这里控制闪电的抖动幅度
    var ho = {
      x: Math.cos(a) * offset + half.x,
      y: Math.sin(a) * offset + half.y
    }
    return ho
  }
}
onMounted(() => {
  sd1()
})

onUnmounted(() => {
  clearInterval(timer)
  clearInterval(timeID)
})
</script>
<style lang="less" scoped>
.shandian {
  width: 100%;
  height: 100%;
  display: flex;
  canvas{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0;
    animation: lightingShow 0.5s linear forwards 0.8s;
  }
}
@keyframes lightingShow {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
}
</style>>