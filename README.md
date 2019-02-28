### this is a test package, I recommend you can get one function from the source code rather than use the Lib。

npm install function-util --save

part1：getFirstDate()得到某天的0点0分0秒1毫秒，getFinalDate()得到某天的23点59分59秒999毫秒。

part2: isUrl()判断是否是url，isEmail()判断是否是邮箱

part3: formatBytes()根据文件大小得到格式化后的'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'

part4: getParameterByName()得到url中的查询字符串

part5: setCookie()设置cookie、getCookie()得到cookie

part6: getUUID()得到UUID

part7: 解决移动端滚动穿透，弹窗出现时调用fixedBody()，弹窗关闭时调用looseBody()

part8: rem()适配移动端rem解决方案
```
应用程序初始化时调用，例如react app.js中
rem({
  baseWidth: 375, // 375设计稿宽度
  resize: true // 自动调整
});
```

part9: 点击网页显示['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']
```
showText(['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'], ['#1d4c94', '#7c5dc7', 'red', 'pink', 'green', '#FC993D', '#4169E2', '#0ABB03', '#FC993D', '#999999', '#FF00FF', '#3A55DC'])
```

part10：removeFormEmpty()移除表单对象中字符串前后的空格(这里只去除第一层级的子属性，如果子对象中的空格没有去除)

part11: htmlEncode()，html转义，htmlDecode()，html反转义
