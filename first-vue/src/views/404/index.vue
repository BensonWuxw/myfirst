<template>
    <session class="box-content-404">
        <div class="rail">
            <div class="stamp" v-for="item in 20" :key="item"  :class="item % 2 === 0 ? 'four' : 'zero'">{{item % 2 === 0 ? 4 : 0}}</div>
        </div>
        <div class="world">
            <div class="forward">
                <div class="box">
                    <div class="wall" v-for="item in 6" :key="item" >{{item === 1 || item === 5 ? 404 : ''}}</div>
                </div>
            </div>
        </div>
    </session>
</template>
<script setup>

</script>
<style lang="less" scoped>
.head-picture(@n, @i:1) when (@i <= @n) {
  &:nth-child(@{i}) {
    animation: stampSlide 20 * 2000ms (@i * -2000) - 300ms linear infinite;
  }
  .head-picture(@n,(@i + 1));
}
@wallSize: 400px;
@wallSizeNum: calc(@wallSize / 2);
@translateNum: calc(130px - 20 * @wallSize);

.box-content-404 {
  background: #fff;
  height: 100%;
  overflow: hidden;
  display: flex;
  font-family: 'Anton', sans-serif;
  justify-content: center;
  align-items: flex-start;
  perspective: 1000px;
}

div {
  transform-style: preserve-3d;
}
.rail {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transform: rotateX(-30deg) rotateY(-30deg);
  .stamp {
    position: absolute;
    width: @wallSize;
    height: @wallSize;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(20, 20, 20, 1);
    color: #fff;
    font-size: 3rem;
    font-family: 'LCdd';
    .head-picture(20)
  }
}
@keyframes stampSlide {
  0% {
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-@wallSize) translateY(130px);
  }
  100% {
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-@wallSize) translateY(@translateNum);
  }
}
.world {
  transform: rotateX(-30deg) rotateY(-30deg) translateY(365px);
  
  .forward {
    position: absolute;
    animation: slide 2000ms linear infinite;
  }
  .box {
    width: @wallSize;
    height: @wallSize;
    transform-origin: 100% 100%;
    animation: roll 2000ms cubic-bezier(1.000, 0.010, 1.000, 1.000) infinite;
    .wall {
      position: absolute;
      width: @wallSize;
      height: @wallSize;
      background: rgba(10, 10, 10, 0.8);
      border: 1px solid rgba(250, 250, 250, 1);
      box-sizing: border-box;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 3rem;
        font-family: 'LCdd';
      }
      &:nth-child(1) {
        transform: translateZ(@wallSizeNum);
        &::before{
            content: '404';
            font-size: 5em;
        }
      }
      &:nth-child(2) {
        transform: rotateX(180deg) translateZ(@wallSizeNum);
      }
      &:nth-child(3) {
        transform: rotateX(90deg) translateZ(@wallSizeNum);
        &::before {
          transform: rotateX(180deg) rotateZ(90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
        }
      }
      &:nth-child(4) {
        transform: rotateX(-90deg) translateZ(@wallSizeNum);
        &::before {
          transform: rotateX(180deg) rotateZ(-90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
        }
      }
      &:nth-child(5) {
        transform: rotateY(90deg) translateZ(@wallSizeNum);
        &::before {
          transform: rotateX(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
        }
      }
      &:nth-child(6) {
        transform: rotateY(-90deg) translateZ(@wallSizeNum);
        &::before {
          transform: rotateX(180deg) rotateZ(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
        }
      }
    }
  }
}

@keyframes zeroFour {
  0% {
    content: '4';
  }
  100% {
    content: '0';
  }
}

@keyframes roll {
  0% {
    transform: rotateZ(0deg);
  }
  85% {
    transform: rotateZ(90deg);
  }
  87% {
    transform: rotateZ(88deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-@wallSize);
  }
}
</style>