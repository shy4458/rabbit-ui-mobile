# Notification

实现 IOS，Android 原生Notification API，以函数形式调用。如果需要其他属性，自行添加，但要保持一致

## props

| 属性     | 说明                                     | 类型     | 默认值 | 可能值 |
| -------- | ---------------------------------------- | -------- | ------ | ------ |
| title    | 标题                                     | `string` | ` `    |        |
| subTitle | 子标题                                   | `string` |        |        |
| message  | 内容                                     | `string` |        |        |
| icon     | 图标                                     | `any`    |        |        |
| type     | （web端有效）                            |          |        |        |
| ticker   | 消息出现时，顶栏显示的内容（移动端有效） | `string` |        |        |