# Progress

## props

| 属性 | 说明           | 类型     | 默认值 | 可选值 |
| ---- | -------------- | -------- | ------ | ------ |
| type | 设置进度条类型 | `string` | `line`    | `line/circle` |
| progress | 进度，范围 0~100 | `number` | `0` |  |
| width | `type=circle`时有效，设置圆形进度的宽度 | `number` | `126` |  |
| strokeWidth | 设置进度条线宽 | `number` | `6` |  |
| showText | 是否显示提示信息 | `bool` | `true` | `true/false` |
| textPosition | 设置提示信息的显示位置 | `string` | `right` | `right/left/inside/inside-left/inside-right` |
| textFormater | 格式化提示信息函数 | `func(number)` | ` ` |  |
| status | 进度条状态 | `string` | `normal` | `success/error/normal` |