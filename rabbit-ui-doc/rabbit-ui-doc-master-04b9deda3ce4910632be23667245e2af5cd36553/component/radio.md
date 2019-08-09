# Radio

## props

| 属性     | 说明                     | 类型                   | 默认值  | 可选值 |
| -------- | ------------------------ | ---------------------- | ------- | ------ |
| label    | 标签                     | `string`               | ` `     |        |
| checked  | 设置是否选中             | `bool`                 |         |        |
| value    | 值（需要提交到后台的值） | `any`                  | ` `     |        |
| disabled | 设置是否禁用             | `bool`                 | `false` | `true` |
| name     | 表单字段名               | `string`               | ` `     |        |
| onChange | 状态改变的回调           | `func(checked, event)` | ` `     |        |