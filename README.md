### this is a test package, I recommend you can get one function from the source code rather than use the Lib。

npm install function-util --save

#### 1：getFirstDate()得到某天的0点0分0秒1毫秒，getFinalDate()得到某天的23点59分59秒999毫秒。

#### 2: isUrl()，isEmail()

#### 3: formatBytes()根据文件大小得到格式化后的'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'

#### 4: getParameterByName()得到url中的查询字符串

#### 5: setCookie()、getCookie()

#### 6: getUUID()

#### 7: 解决移动端滚动穿透，弹窗出现时调用fixedBody()，弹窗关闭时调用looseBody()

#### 8: rem()适配移动端rem解决方案
```
应用程序初始化时调用，例如react app.js中
rem({
  baseWidth: 375, // 375设计稿宽度
  resize: true // 自动调整
});
```

#### 9: 点击网页显示['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']
```
showText(['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'], ['#1d4c94', '#7c5dc7', 'red', 'pink', 'green', '#FC993D', '#4169E2', '#0ABB03', '#FC993D', '#999999', '#FF00FF', '#3A55DC'])
```

#### 10：removeFormEmpty()移除表单对象中字符串前后的空格(这里只去除第一层级的子属性，如果子对象中的空格没有去除)

#### 11: htmlEncode()，htmlDecode()

#### 12：detect password strength
```
checkPwd(str) // 0 low, 1 middle, 2 high
```
