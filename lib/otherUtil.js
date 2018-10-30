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