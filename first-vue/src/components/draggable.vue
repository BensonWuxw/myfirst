<template>
  <draggable  class="list-group" 
        :list="list" 
        ghost-class="ghost"
        itemKey="id"
        handle=".move"
        filter=".forbid"
        :force-fallback="true"
        chosen-class="chosenClass"
        animation="300"
        @start="onStart"
        @end="onEnd"
        group="group1"
        :fallback-class="true"
        :fallback-on-body="true"
        :touch-start-threshold="50"
        :fallback-tolerance="1"
        :move="onMove">
        <template #item="{ element }">
            <div class="list-group-item move">
                
                <label class="move"><b>{{element.id}}  <svg-icon icon-name="arrow"></svg-icon>  </b>{{ element.name }}</label>
            </div>
        </template>
    </draggable>
  
</template>
  
<script setup>
import { computed, reactive, ref } from "vue";
import draggable from "vuedraggable";
const isDragging = ref(false)
const list = reactive([
    { id: 'group', name: `name:'itxst',//分组名称itxst的组之间可以相互拖拽;
    pull:true|false|function,//是否允许拖入当前组，

    
    put:true|false|function,//是否允许拖出当前组；`},
    {id: 'sort', name: `是否开启排序,如果设置为false,它所在组无法排序`},
    {id: 'delay', name: `鼠标按下多少秒之后可以拖拽元素`},
    {id: 'touchStartThreshold', name: `鼠标按下移动多少px才能拖动元素`},
    {id: 'disabled', name: `是否启用拖拽组件`},
    {id: 'animation', name: `拖动时的动画效果，如设置animation=1000表示1秒过渡动画效果`},
    {id: 'handle', name: `:handle=".mover" 只有当鼠标在class为mover类的元素上才能触发拖到事件`},
    {id: 'filter', name: `filter=".unmover" 设置了unmover样式的元素不允许拖动`},
    {id: 'draggable', name: `:draggable=".item" 样式类为item的元素才能被拖动`},
    {id: 'ghost-class', name: ':ghost-class="ghostClass" 设置拖动元素的占位符类名,你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true'},
    {id: 'chosen-class', name: ':ghost-class="hostClass" 被选中目标的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true'},
    {id: 'drag-class', name: ':drag-class="dragClass"拖动元素的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true'},
    {id: 'force-fallback', name: '默认false，忽略HTML5的拖拽行为，因为h5里有个属性也是可以拖动，你要自定义ghostClass chosenClass dragClass样式时，建议forceFallback设置为true'},
    {id: 'fallback-class', name: '默认false，克隆选中元素的样式到跟随鼠标的样式'},
    {id: 'fallback-on-body', name: '默认false，克隆的元素添加到文档的body中'},
    {id: 'fallback-tolerance', name: '按下鼠标移动多少个像素才能拖动元素，:fallback-tolerance="8"'},
    {id: 'scroll', name: '默认true,有滚动区域是否允许拖拽'},
    {id: 'scroll-fn', name: '滚动回调函数'},
    {id: 'scroll-fensitivity', name: '距离滚动区域多远时，滚动滚动条'},
    {id: 'scroll-speed', name: '滚动速度'},
])
const dragOptions = computed(() => {
    return {
      animation: 500,
      ghostClass: "ghost",
      forceFallback: true,
      handle: '.move',
      filter: ".forbid",
      chosenClass: "chosenClass"
    };
  })
//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽");
};

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽");
};

const onMove = (e, originalEvent) => {
  //不允许停靠
  if (e.relatedContext.element.disabledPark == true) return false;

  return true;
};
</script>
  
  <style scoped lang="less">
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #f0f!important;
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  user-select: none;
  
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  cursor: move;
  border: 1px solid rgba(0, 0, 0, 0.125);
 
  .move{
    cursor: move;
  }
  &.chosenClass{
    color: #0ff;
    cursor: pointer!important;
  }
}
.list-group-item+.list-group-item {
    border-top-width: 0;
}

</style>