# vue3

[源码最佳实践](https://vue3.w2deep.com/source-code/runtime/renderer.html)

## Change

### diff 比较

```html
<div>
  <p>111</p>
  <p>{{a}}</p>
</div>
```

**vue2 diff: 全量比较**

![](/imgs/001.png)

**vue3 diff: 会发生变化的 dom 添加静态标记，diff 时，有标记的进行对比**

![](/imgs/002.png)

### render function

**vue2.x**:https://template-explorer.vuejs.org/

```jsx
<div id="app">
  <div>Hello World!</div>
  <div>{{ msg }}</div>
</div>;

function render() {
  with (this) {
    return _c(
      "div",
      {
        attrs: {
          id: "app",
        },
      },
      [_c("div", [_v("Hello World!")]), _c("div", [_v(_s(msg))])]
    );
  }
}
```

**vue3.x**: https://vue-next-template-explorer.netlify.app/

```jsx
<div>Hello World!</div>
<div>{{msg}}</div>

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("div", null, "Hello World!"),
    _createElementVNode("div", null, _toDisplayString(_ctx.msg), 1 /* TEXT */)
  ], 64 /* STABLE_FRAGMENT */))
}
```

### patchflags

https://juejin.cn/post/6858955776992968712

```js
export const enum PatchFlags {
  // 动态文字内容
  TEXT = 1,

  // 动态 class
  CLASS = 1 << 1,

  // 动态样式
  STYLE = 1 << 2,

  // 动态 props
  PROPS = 1 << 3,

  // 有动态的key，也就是说props对象的key不是确定的
  FULL_PROPS = 1 << 4,

  // 合并事件
  HYDRATE_EVENTS = 1 << 5,

  // children 顺序确定的 fragment
  STABLE_FRAGMENT = 1 << 6,

  // children中有带有key的节点的fragment
  KEYED_FRAGMENT = 1 << 7,

  // 没有key的children的fragment
  UNKEYED_FRAGMENT = 1 << 8,

  // 只有非props需要patch的，比如`ref`
  NEED_PATCH = 1 << 9,

  // 动态的插槽
  DYNAMIC_SLOTS = 1 << 10,

  // SPECIAL FLAGS -------------------------------------------------------------

  // 以下是特殊的flag，不会在优化中被用到，是内置的特殊flag

  // 表示他是静态节点，他的内容永远不会改变，对于hydrate的过程中，不会需要再对其子节点进行diff
  HOISTED = -1,

  // 用来表示一个节点的diff应该结束
  BAIL = -2,
}
```
