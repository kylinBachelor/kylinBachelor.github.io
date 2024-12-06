import ChartJS from "F:/my_source_code/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeDemo from "F:/my_source_code/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "F:/my_source_code/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import ECharts from "F:/my_source_code/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import { injectEChartsConfig } from "F:/my_source_code/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import FlowChart from "F:/my_source_code/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import Mermaid from "F:/my_source_code/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "F:/my_source_code/kylinBachelor.github.io/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";

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
