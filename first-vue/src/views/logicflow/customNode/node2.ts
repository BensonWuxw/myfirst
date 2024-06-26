import { HtmlNodeModel, HtmlNode, h} from "@logicflow/core"
import { RectNode, RectNodeModel } from "@logicflow/core";

import { NodeTextTheme } from "@logicflow/core/types/constant/DefaultTheme";
class CustomNodeView extends RectNode {

    getShape() {
        // 获取XxxNodeModel中定义的形状属性
        const { model } = this.props;
        const { x, y, width, height, radius } = model;
        // 获取XxxNodeModel中定义的样式属性
        const style = model.getNodeStyle();
    
        return h('g', {}, [
            h('rect', {
                ...style,
                x: x - width / 2,
                y: y - height / 2,
                width,
                height,
                rx: radius,
                ry: radius,
            }),
            h('svg', {
                x: x - width / 2 + 5,
                y: y - height / 2 + 5,
                width: 25,
                height: 25,
                viewBox: "0 0 1028 1024",
            }, [
                h('path', {
                    fill: style.stroke,
                    d: "<icon-svg-data>",
                })
            ])
        ]);
    }
  }

  class CustomNodeModel extends RectNodeModel {

    getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = 'green';
        return style;
      }
      initNodeData(data: any): void {
        super.initNodeData(data);
        this.width = 120;
        this.height = 80;
        this.radius = 10;
      }
  }

  

  export default {
    type: "CustomNode",
    view: CustomNodeView,
    model: CustomNodeModel,
}