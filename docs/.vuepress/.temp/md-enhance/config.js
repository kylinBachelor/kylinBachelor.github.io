import ChartJS from "C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeDemo from "C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import ECharts from "C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import { injectEChartsConfig } from "C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import FlowChart from "C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import Mermaid from "C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";

export default {
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("ECharts", ECharts);
    injectEChartsConfig(app);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
  },
};
