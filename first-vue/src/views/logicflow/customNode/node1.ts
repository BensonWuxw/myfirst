import { HtmlNodeModel, HtmlNode, h} from "@logicflow/core"
import { NodeTextTheme } from "@logicflow/core/types/constant/DefaultTheme";


  class UmlModel extends HtmlNodeModel {
    setAttributes() {
      this.text.editable = false; // 禁止节点文本编辑
      // 设置节点宽高和锚点
      const width = 200;
      const height = 130;
      this.width = width;
      this.height = height;
      this.color = "red"
      this.anchorsOffset = [
        [width / 2, 0],
        [0, height / 2],
        [-width / 2, 0],
        [0, -height / 2],
      ];
    }
    getTextStyle(): NodeTextTheme {
      const { properties } = this.props.model;
     
      const style = super.getTextStyle();
      style.color = "red";
      return style
    }
  }
  class UmlNode extends HtmlNode {
    setHtml(rootEl: HTMLElement) {
      const { properties } = this.props.model;
      console.log(properties)
      const el = document.createElement("div");
      el.className = "uml-wrapper";
      const html = `
        <div>
          <div class="uml-head">Head</div>
          <div class="uml-body">
            <div>+ ${properties.name}</div>
            <div>+ ${properties.body}</div>
          </div>
          <div class="uml-footer">
            <div>+ setHead(Head $head)</div>
            <div>+ setBody(Body $body)</div>
          </div>
        </div>
      `;
      el.innerHTML = html;
      // 需要先把之前渲染的子节点清除掉。
      rootEl.innerHTML = "";
      rootEl.appendChild(el);
    }
  }
  const customNode1 = {
    type: 'customNode',
    view: HtmlNode,
    model: HtmlNodeModel,
    text: "自定义节点",
    label: '自定义节点label',
    properties: {status: 'reject'}
  }

  export default customNode1