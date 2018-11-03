function getWindowSize() {
    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    return {x, y};
}

function adjustRem(num) {
    num = typeof num === 'number' ? num : 750; // 设计稿宽度
    let width = getWindowSize().x;
    width = Math.max(width, 320); // 最小宽度 320px
    width = Math.min(width, 750); // 最小宽度 750px
    let rem = width / num;
    if (/dxy/.test(navigator.userAgent) && /android 4\.4\.2/.test(navigator.userAgent.toLocaleLowerCase())) {
        rem = Math.min(rem, 1);
    }
    const precent = 62.5 * rem * 10;
    console.log('old precent' + precent);
    document.getElementsByTagName('html')[0].style.fontSize = `${precent}%`;
}

/**
 * baseWidth设计稿宽度
 * resize自动调整
 */
export const rem = ({baseWidth = 750, resize = false}) => {
    adjustRem(baseWidth);
    if (resize) {
        window.addEventListener('resize', () => {
            adjustRem(baseWidth);
        });
    }
};

