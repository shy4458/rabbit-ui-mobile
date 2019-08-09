# Switch

## props

| 属性           | 说明                         | 类型                          | 默认值  | 可能值 |
| -------------- | ---------------------------- | ----------------------------- | ------- | ------ |
| disabled       | 设置是否禁用                 | `bool`                        | `false` |        |
| name           | 表单 name                    | `string`                      | ` `     |        |
| checked        | 设置是否选中                 | `bool`                        | `false` |        |
| checkedLabel   | 选中时的文本                 | `string`                      | ` `     |        |
| uncheckedLabel | 未选中时的文本               | `string`                      | ` `     |        |
| checkedValue   | 选中时的值（用于表单提交）   | `any`                         |         |        |
| uncheckedValue | 未选中时的值（用于表单提交） | `any`                         | ` `     |        |
| onChange       | 改变时的回调                 | `func(value, checked, event)` | ` `     |        |