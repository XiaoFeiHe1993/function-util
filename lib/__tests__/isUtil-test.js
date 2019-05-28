'use strict';

import { isUrl, isEmail } from '../../index';

describe('test-is-util', () => {
    it('isUrl ', function () {
        expect(isUrl('http://www.baidu.com')).toBe(true);
        expect(isUrl('https://www.baidu.com')).toBe(true);
        expect(isUrl('http://baidu.com')).toBe(true);
        expect(isUrl('http://www.baidu.com?search=start')).toBe(true);
        expect(isUrl('https://www.baidu.com?search=start&time=15578458474')).toBe(true);
        expect(isUrl('http//baidu.com')).toBe(false);
    });

    it('isEmail ', function () {
        expect(isEmail('1712776213@qq.com')).toBe(true);
        expect(isEmail('stephenhe@qq.com')).toBe(true);
        expect(isEmail('stephen123@qq.com')).toBe(true);
        expect(isEmail('stephenhe@163.cn')).toBe(true);
        expect(isEmail('stephenhe@')).toBe(false);
    });
});