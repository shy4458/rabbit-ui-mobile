# Button

## props

| 属性         | 说明                                 | 类型          | 默认值    | 可选值                                        |
| ------------ | ------------------------------------ | ------------- | --------- | --------------------------------------------- |
| disabled     | 设置按钮是否失效                     | `boolean`     | `false`   | `true/false`                                  |
| type         | 设置按钮类型                         | `string`      | `default` | `default/primary/success/warning/danger`      |
| text         | 设置按钮为文字类型                   | `boolean`     | `false`   | `true/false`                                  |
| round        | 设置按钮为全圆角类型                 | `boolean`     | `false`   | `true/false`                                  |
| size         | 设置按钮的大小                       | `string`      | `default` | `small/default/large`                         |
| block        | 设置按钮适应父布局宽度               | `boolean`     | `false`   | `true/false`                                  |
| loading      | 设置按钮处于加载状态                 | `boolean`     | `false`   | `true/false`                                  |
| nativeType   | 原生类型，Web端生效                  | `string`      | `button`  | `button/submit`                               |
| icon         | 设置图标                             | `string/node` | ` `       |                                               |
| iconPosition | 设置图标所在的位置                   | `string`      | `left`    | `left/right`                                  |
| circle       | 设置圆形图标按钮                     | `boolean`     | `false`   | `true/false`                                  |
| href         | 点击跳转的链接，行为与 `a`一致，Web端生效 | `string` | ` ` |                                               |
| target | 相当于 `a` 的 `target`，`href` 属性存在时生效 | `string` | ` ` | `_blank / _self / _parent / _top` |

## event

| 事件名        | 说明           | 类型            |
| ------------- | -------------- | --------------- |
| onClick       | 按钮点击事件   | function(event) |
| onLongClick   | 按钮长点击事件 | function(event) |
| onDoubleClick | 按钮双击事件 | function(event) |