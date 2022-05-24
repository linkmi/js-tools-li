###使用

```
npm i js-tools-li -S

import { filterNumberFormat, formatDecimal } from 'js-tools-li'
```

### github 地址

[github](https://github.com/zw-li/js-tools-li)

### 说明

|          说明           |       方法名       |             参数             |             例子             |
| :---------------------: | :----------------: | :--------------------------: | :--------------------------: |
| 数字千分符,不包括小数点 | filterNumberFormat | (数字,保留小数点位数,默认 2) | filterNumberFormat(5.2365,2) |
|     小数不四舍五入      |   formatDecimal    | (数字,保留几位小数，默认 2)  |  formatDecimal(263.36521,2)  |
