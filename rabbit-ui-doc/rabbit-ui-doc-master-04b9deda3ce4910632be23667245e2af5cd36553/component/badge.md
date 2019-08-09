# Badge

## props

| 属性         | 说明                                 | 类型          | 默认值    | 可选值                                        |
| ------------ | ------------------------------------ | ------------- | --------- | --------------------------------------------- |
| type         | 设置 Badge 类型                      | `string`      | `default` | `default/primary/success/warning/danger`                   |
| value        | Badge上现实的值                      | `string/number`| ` `      |                                               |
| max          | 如果你设置的value为数字，当value超过max时会显示为 'max+'    | `number`      | `99`   |                           |
| show         | 设置是否显示 Badge                   | `bool`        | `true`    | `true/false`                                  |
| dot          | 设置是否显示为小圆点                 | `bool`        | `false`   | `true/false`                                  |
| title        | 鼠标置于Badge时显示的文字，Web端有效 | `string`      | ` `       |                                               |
| showZero     | 设置当`value`为0时，是否显示Badge    | `bool`        | `false`   | `true/false`                                  |