# Message

非浮层显示的提示信息

## props

| 属性         | 说明                                                         | 类型          | 默认值    | 可选值                               |
| ------------ | ------------------------------------------------------------ | ------------- | --------- | ------------------------------------ |
| type         | 消息类型                                                     | `string`      | `default` | `default/info/success/warning/error` |
| title        | 消息标题                                                     | `string`      | ` `       |                                      |
| description  | 消息描述                                                     | `string`      | ` `       |                                      |
| closable     | 设置是否可以关闭                                             | `bool`        | `false`   | `true/false`                         |
| bodyClosable | 设置点击消息任何位置是否可以关闭                             | `bool`        | `false`   | `true/false`                         |
| closeText    | 关闭按钮自定义文本                                           | `string`      | ` `       |                                      |
| closeDelay   | 设置是否延时自动关闭，单位：ms                               | `number`      | `0`       |                                      |
| icon         | 设置是否显示图标，如果是bool类型，则显示每个类型各自的图标，如果是string类型，则可以显示自定义图标 | `bool/string` | `false`   |                                      |
| light        | 设置是否显示为浅颜色样式                                     | `bool`        | `false`   | `true/false`                         |



## Event

| 事件名  | 说明                                           | 类型            |
| ------- | ---------------------------------------------- | --------------- |
| onClose | 关闭时触发，如果设置为自动关闭，则不带任何参数 | function(event) |
|         |                                                |                 |

