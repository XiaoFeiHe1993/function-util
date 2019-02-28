/**
 * 解决移动端滚动穿透
 * 打开弹框时调用
 */
export const fixedBody = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    document.body.style.cssText += `position:fixed;top:-${scrollTop}px;`;
};

/**
 * 解决移动端滚动穿透
 * 关闭弹框时调用
 */
export const looseBody = () => {
    let body = document.body;
    body.style.position = '';
    let top = body.style.top;
    document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top);
    body.style.top = '';
};

export const addCSS = (cssText) => {
    let style = document.createElement('style') ; // 创建一个style元素
    let head = document.head || document.getElementsByTagName('head')[0]; // 获取head元素
    style.type = 'text/css'; // 这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
    if (style.styleSheet) { // IE
        let func = function() {
            try { // 防止IE中stylesheet数量超过限制而发生错误
                style.styleSheet.cssText = cssText;
            } catch (e) {

            }
        };
        // 如果当前styleSheet还不能用，则放到异步中则行
        if (style.styleSheet.disabled) {
            setTimeout(func, 10);
        } else {
            func();
        }
    } else { // w3c
        // w3c浏览器中只要创建文本节点插入到style元素中就行了
        let textNode = document.createTextNode(cssText);
        style.appendChild(textNode);
    }
    head.appendChild(style); // 把创建的style元素插入到head中
};

export const showText = (texts, colors) => {
    let currentIndex = 0;
    let currentId = 0;
    document.body.addEventListener('click', (e) => {
        // 添加元素
        let newNode = document.createElement('div');
        newNode.innerHTML = texts[currentIndex];
        addCSS(`@keyframes move${currentId}{0% {left: ${e.clientX-16}px;top: ${e.clientY-8}px;opacity: 0.3;} 50% {opacity: 1;} 100% {left: ${e.clientX-16}px;top: ${e.clientY-58}px;opacity: 0.3}}`);
        newNode.style = `display: inline-block;position: fixed;left: ${e.clientX-16}px;top: ${e.clientY-8}px;font-size:16px;font-weight: 600;color:${colors[currentIndex]};animation: move${currentId} 2s;`;
        document.body.appendChild(newNode);

        // 改变索引
        currentIndex = currentIndex < texts.length-1 ? currentIndex += 1 : currentIndex = 0;
        currentId += 1;

        // 移除元素
        setTimeout(() => {
            document.body.removeChild(newNode);
        }, 2000)
    })
};

/**
 * 去除form表单中输入内容的前后的空格(这里只去除第一层级的子属性，如果子对象中的空格没有去除)
 */
export const removeFormEmpty = (form) => {
    Object.keys(form).forEach(function(key) {
        if (typeof form[key] === 'string') {
            form[key] = form[key].trim()
        }
    });
    return form
};

// html转义
export const htmlEncode = (str) => {
    let s = '';
    if (!str || str.length <= 0) {
        return ''
    }
    s = str.replace(/&/g, '&amp;');
    s = s.replace(/</g, '&lt;');
    s = s.replace(/>/g, '&gt;');
    s = s.replace(/ /g, '&nbsp;');
    s = s.replace(/\'/g, '&#39;');
    s = s.replace(/\"/g, '&quot;');
    s = s.replace(/\n/g, '<br/>');
    return s;
};

// html反转义
export const htmlDecode = (str) => {
    let s = '';
    if (!str || str.length <= 0) {
        return '';
    }
    s = str.replace(/&amp;/g, '&');
    s = s.replace(/&lt;/g, '<');
    s = s.replace(/&gt;/g, '>');
    s = s.replace(/&nbsp;/g, ' ');
    s = s.replace(/&#39;/g, '\'');
    s = s.replace(/&quot;/g, '\"');
    s = s.replace(/<br\/>/g, '\n');
    return s;
};
