### function-util，本仓库为本人收集的js util工具方法。

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

