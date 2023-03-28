<template>
    <a-card title="流程图">
        <div id="flow-container" ref="flowContainer"></div>
    </a-card>
</template>
<script lang="ts" setup>
import LogicFlow from "@logicflow/core";
import { DndPanel, SelectionSelect, Control, Menu } from "@logicflow/extension"
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css"
import { onMounted ,ref} from "vue";
let lf:any;
const flowContainer = ref()
onMounted(() => {
    lf = new LogicFlow({
        container: flowContainer.value,
        plugins: [DndPanel, SelectionSelect, Control, Menu],
        grid: true,
        textEdit: false,
        nodeTextEdit: false,
        edgeTextEdit: false
    });

    lf.render({
    nodes: [
        {
        id: "1",
        type: "rect",
        x: 100,
        y: 100,
        text: "节点1",
        },
        {
        id: "2",
        type: "circle",
        x: 300,
        y: 200,
        text: "节点2",
        },
    ],
    edges: [
        {
        sourceNodeId: "1",
        targetNodeId: "2",
        type: "polyline",
        text: "连线",
        },
    ],
    });
})
  
</script>
<style>
#flow-container {
    width: 100%;
    height: 100%;
}
</style>