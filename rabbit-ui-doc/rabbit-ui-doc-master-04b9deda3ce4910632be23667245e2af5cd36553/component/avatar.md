# Avatar

## props

| 属性          | 说明                                                         | 类型            | 默认值    | 可选值                         |
| ------------- | ------------------------------------------------------------ | --------------- | --------- | ------------------------------ |
| size          | 设置大小                                                     | `number/string` | `default` | `[number]/large/small/default` |
| alt           | 当图片显示错误的时候显示的文字，仅web端有效                  | `string`        | ` `       |                                |
| shape         | 设置形状                                                     | `string`        | `circle`  | `circle/square`                |
| icon          | 设置显示的图标，值为iconmap里面的键                          | `string`        | ` `       |                                |
| src           | 设置显示图片的地址                                           | `string`        | ` `       |                                |
| srcSet        | 仅 web 端有效                                                | `string`        | ` `       |                                |
| showOneChar   | 如果文字类型的头像，控制是否显示一个字符                     | `bool`          | `true`    | `true/false`                   |
| showCharIndex | 如果设置showOneChar为true，可以通过该属性设置要显示字符的索引 | `number`        | `0`       |                                |

## Event

| 事件名  | 说明               | 类型            |
| ------- | ------------------ | --------------- |
| onError | 图片加载失败是调用 | function(event) |
| onClick | 点击事件           | function(event) |

