<template>
  <div>
    <a href="https://css-loaders.com/classic/" target="_blank">css  loading动画合集</a>
  <ul>
    <li class="progress"></li>
    <li class="circle-cut">优惠券</li>
    <li class="box">https://css-loaders.com/classic/</li>
    <li class="polygon "></li>
    <li class="triangle"></li>
    <li v-for="item in 100" :key="item"> <span  :class="`ribbon ribbon-${item}`">测试{{item}}</span> </li>
  </ul>
  </div>
</template>
<script setup>
import {ref} from "vue"
const list = ref(100)
</script>
<style lang="less" scoped>
ul {
  display: flex;
  flex-flow: wrap;
  li{
    width: 320px;
    height: 180px;
    position: relative;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    background: #e1e1e1;
    margin: 25px;
    text-align: center;
  }
}
.progress{
  background-image: linear-gradient(45deg, #98CD8D 25%, #F6F0CF 25%, #F6F0CF 50%, #98CD8D 50%, #98CD8D 75%, #F6F0CF 75%, #F6F0CF 100%);
  background-size: 56.57px 56.57px;
}
/* HTML: <div class="triangle"></div> */
.triangle {
  width: 180px;
  aspect-ratio: 1/cos(30deg);
  clip-path: polygon(50% 0,100% 100%,0 100%);;
  background: linear-gradient(45deg,#FA6900,#C02942);
  
}
.circle-cut {
  display: flex;
  justify-content: center;
  align-items: center;
  --r: 10px; /* cut size */
  aspect-ratio: 1.2;
  background: #F07818;
  mask: 
   radial-gradient(var(--r) at 50% var(--r),#0000 calc(100% - 1px),#000) 0 calc(-1*var(--r)) intersect,
   radial-gradient(var(--r) at var(--r) 50%,#0000 calc(100% - 1px),#000) calc(-1*var(--r));
}

/* HTML: <div class="ribbon">Your text content</div> */
.ribbon {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
}
.ribbon-1 {
  --r: .4em; /* control the ribbon shape (the radius) */

  position: absolute;
  top: 20px;
  inset-inline: calc(-1*var(--r));
  text-align: center;
  line-height: 1.8; 
  padding: 0 .5em calc(2*var(--r));
  border-radius: var(--r);
  --_g:100%/var(--r) calc(2*var(--r)) no-repeat;
  background: 
    radial-gradient(100% 50% at right,#0005 98%,#0000 101%) 0    var(--_g),
    radial-gradient(100% 50% at left ,#0005 98%,#0000 101%) 100% var(--_g),
    conic-gradient(from 90deg at var(--r) calc(100% - 2*var(--r)),#0000 25%,#3FB8AF 0)
     0 0/calc(100% - var(--r)) 100%;
}

.ribbon-2 {
  --d: .8em; /* the depth */
  position: absolute;
  top: 20px;
  inset-inline: calc(-1*var(--d));
  border-bottom: var(--d) solid #0008;
  line-height: 1.8;
  clip-path: polygon(0 0,100% 0,100% calc(100% - var(--d)),calc(100% - var(--d)) 100%,calc(100% - var(--d)) calc(100% - var(--d)),var(--d) calc(100% - var(--d)),var(--d) 100%,0 calc(100% - var(--d)));
  background-color: #3FB8AF; /* the main color */
}

.ribbon-3 {
  --d: .8em; /* the depth */
  
  position: absolute;
  bottom: 20px;
  inset-inline: calc(-1*var(--d));
  border-top: var(--d) solid #0008;
  line-height: 1.8;
  clip-path: polygon(0 100%,100% 100%,100% var(--d),calc(100% - var(--d)) 0%,calc(100% - var(--d)) var(--d),var(--d) var(--d),var(--d) 0%,0 var(--d));
  background-color: #8FBE00; /* the main color */
}

.ribbon-4 {
  --f: .5em; /* control the folded part */
  
  position: absolute;
  top: 0;
  right: 0;
  line-height: 1.8;
  padding-inline: 1lh;
  padding-bottom: var(--f);
  border-image: conic-gradient(#0008 0 0) 51%/var(--f);
  clip-path: polygon(
    100% calc(100% - var(--f)),100% 100%,calc(100% - var(--f)) calc(100% - var(--f)),var(--f) calc(100% - var(--f)), 0 100%,0 calc(100% - var(--f)),999px calc(100% - var(--f) - 999px),calc(100% - 999px) calc(100% - var(--f) - 999px));
  transform: translate(calc((1 - cos(45deg))*100%), -100%) rotate(45deg);
  transform-origin: 0% 100%;
  background-color: #BD1550; /* the main color  */
}

.ribbon-5 {
  --f: .5em; /* control the folded part */
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1.8;
  padding-inline: 1lh;
  padding-bottom: var(--f);
  border-image: conic-gradient(#0008 0 0) 51%/var(--f);
  clip-path: polygon(
    100% calc(100% - var(--f)),100% 100%,calc(100% - var(--f)) calc(100% - var(--f)),var(--f) calc(100% - var(--f)), 0 100%,0 calc(100% - var(--f)),999px calc(100% - var(--f) - 999px),calc(100% - 999px) calc(100% - var(--f) - 999px));
  transform: translate(calc((cos(45deg) - 1)*100%), -100%) rotate(-45deg);
  transform-origin: 100% 100%;
  background-color: #F07818; /* the main color  */
}

.ribbon-6 {
  --f: .5em; /* control the folded part*/
  --r: .8em; /* control the ribbon shape */
  
  position: absolute;
  left: 20px;
  top: calc(-1*var(--f));
  padding: .2em;
  background: #BF4D28;
  border-left: var(--f) solid #0005;
  border-bottom: var(--r) solid #0000;
  clip-path: polygon(var(--f) 0,100% 0,100% 100%,calc(50% + var(--f)/2) calc(100% - var(--r)), var(--f) 100%,var(--f) var(--f),0 var(--f));
}

.ribbon-7 {
  --f: .5em; /* control the folded part*/
  --r: .8em; /* control the ribbon shape */
  position: absolute;
  right: 20px;
  top: calc(-1*var(--f));
  padding: .2em;
  background: #C8CF02;
  border-right: var(--f) solid #0005;
  border-bottom: var(--r) solid #0000;
  clip-path: polygon(calc(100% - var(--f)) 0,0 0,0 calc(100% - var(--r)),calc(50% - var(--f)/2) 100%,calc(100% - var(--f)) calc(100% - var(--r)),calc(100% - var(--f)) var(--f),100% var(--f));
}

.ribbon-8{
  --f: .5em; /* control the folded part*/
  --r: .8em; /* control the ribbon shape */
  
  position: absolute;
  bottom: 20px;
  left: calc(-1*var(--f));
  padding-inline: .25em;
  line-height: 1.8;
  background: #E3AD40;
  border-top: var(--f) solid #0005;
  border-right: var(--r) solid #0000;
  clip-path: 
    polygon(calc(100% - var(--r)) 100%,0 100%,0 var(--f),var(--f) 0,
      var(--f) var(--f),calc(100% - var(--r)) var(--f),
      100% calc(50% + var(--f)/2));
}

.ribbon-9 {
  --r: .4em; /* control the ribbon shape (the radius) */
  --c: #FA6900;
  position: absolute;
  top: 20px;
  left: calc(-1*var(--r));
  line-height: 1.8; 
  padding: 0 .5em calc(2*var(--r));
  border-radius: var(--r) 0 0 var(--r);
  background: 
    radial-gradient(100% 50% at left,var(--c) 98%,#0000 101%)
     100% 0/.5lh calc(100% - 2*var(--r)),
    radial-gradient(100% 50% at right,#0005 98%,#0000 101%) 
     0 100%/var(--r) calc(2*var(--r)),
    conic-gradient(from 90deg at var(--r) calc(100% - 2*var(--r)),#0000 25%,var(--c) 0)
     0 0/calc(101% - .5lh) 100%;
  background-repeat: no-repeat;   
}

.ribbon-10 {
  --r: .4em; /* control the ribbon shape (the radius) */
  --c: #E3AD40;

  position: absolute;
  bottom: 20px;
  right: calc(-1*var(--r));
  line-height: 1.8; 
  padding: calc(2*var(--r)) .5em 0;
  border-radius: 0 var(--r) var(--r) 0;
  background: 
    radial-gradient(100% 50% at right,var(--c) 98%,#0000 101%)
     0 100%/.5lh calc(100% - 2*var(--r)),
    radial-gradient(100% 50% at left,#0005 98%,#0000 101%) 
     100% 0/var(--r) calc(2*var(--r)),
    conic-gradient(at calc(100% - var(--r)) calc(2*var(--r)),var(--c) 75%,#0000 0)
     100% 0/calc(101% - .5lh) 100%;
  background-repeat: no-repeat;   
}

.ribbon-11 {
  --d: .8em; /* the depth */
  
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  inset-inline: calc(-1*var(--d));
  padding-block: var(--d);
  line-height: 1.8;
  clip-path: polygon(100% var(--d),var(--d) var(--d),var(--d) 0,0 var(--d),0 calc(100% - var(--d)),calc(100% - var(--d)) calc(100% - var(--d)),calc(100% - var(--d)) 100%,100% calc(100% - var(--d)));
  border-image: conic-gradient(#0008 0 0) 50%/var(--d);
  background-color: #8FBE00; /* the main color */
}

.box {
  background: linear-gradient(135deg, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  --mask:
    radial-gradient(67.08px at 50% 90px,#000 99%,#0000 101%) calc(50% - 60px) 0/120px 51% repeat-x,
    radial-gradient(67.08px at 50% -60px,#0000 99%,#000 101%) 50% 30px/120px calc(51% - 30px) repeat-x,
    radial-gradient(67.08px at 50% calc(100% - 90px),#000 99%,#0000 101%) 50% 100%/120px 51% repeat-x,
    radial-gradient(67.08px at 50% calc(100% + 60px),#0000 99%,#000 101%) calc(50% - 60px) calc(100% - 30px)/120px calc(51% - 30px) repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}
.polygon {
  width: 200px; /* adjust to control the size */
  background: linear-gradient(135deg, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);

  aspect-ratio: 1;
  clip-path: polygon(100% 50%,90.45% 79.39%,65.45% 97.55%,34.55% 97.55%,9.55% 79.39%,0% 50%,9.55% 20.61%,34.55% 2.45%,65.45% 2.45%,90.45% 20.61%,100% 50%,calc(90.45% - 16.18px) calc(20.61% - -11.76px),calc(65.45% - 6.18px) calc(2.45% - -19.02px),calc(34.55% - -6.18px) calc(2.45% - -19.02px),calc(9.55% - -16.18px) calc(20.61% - -11.76px),calc(0% - -20px) calc(50% - 0px),calc(9.55% - -16.18px) calc(79.39% - 11.76px),calc(34.55% - -6.18px) calc(97.55% - 19.02px),calc(65.45% - 6.18px) calc(97.55% - 19.02px),calc(90.45% - 16.18px) calc(79.39% - 11.76px),calc(100% - 20px) calc(50% - 0px),calc(90.45% - 16.18px) calc(20.61% - -11.76px));
}
</style>