"use strict";
exports.__esModule = true;
var marked = require("marked");
function default_1(options) {
    return {
        name: "vitePluginMarkdown",
        transform: function (src, id) {
            if (id.endsWith(".md")) {
                return {
                    code: "import {h, defineComponent} from \"vue\";\n                const sfc_md_comp = defineComponent({ name: \"Markdown\", });\n                const md_comp_render =() => { \n                  return h(\"div\", { \n                    innerHTML: " + JSON.stringify(marked(src)) + ", \n                  }) \n                };\n                sfc_md_comp.render = md_comp_render ;\n                export default sfc_md_comp",
                    map: null
                };
            }
        }
    };
}
exports["default"] = default_1;
