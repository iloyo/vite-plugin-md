import * as marked from "marked";

export default function (options) {
  return {
    name: "vitePluginMarkdown",
    transform(src, id) {
      if (id.endsWith(".md")) {
        return {
          code: `import {h, defineComponent} from "vue";
                const sfc_md_comp = defineComponent({ name: "Markdown", });
                const md_comp_render =() => { 
                  return h("div", { 
                    innerHTML: ${JSON.stringify(marked(src))}, 
                  }) 
                };
                sfc_md_comp.render = md_comp_render ;
                export default sfc_md_comp`,
          map: null,
        };
      }
    },
  };
}
