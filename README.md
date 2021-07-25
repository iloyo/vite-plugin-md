# vite-plugin-md

## 安装

```
yarn add @iloyo/vite-plugin-md
or
npm i @iloyo/vite-plugin-md
```

## 使用

vite.config.js 配置

```ts
// vite.config.ts

import vitePluginMarkdown from "@iloyo/vite-plugin-md";

export default defineConfig({
  plugins: [vitePluginMarkdown()],
});
```

组件中使用

```vue
<template>
  <Md />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Md from "./vue3.md";

export default defineComponent({
  name: "App",
  components: { Md },
});
</script>
```

