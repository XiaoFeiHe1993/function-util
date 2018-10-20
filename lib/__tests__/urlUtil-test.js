'use strict';

import {getParameterByName} from '../../index';

describe('test-url-util', () => {
    it('getParameterByName ', function () {
        expect(getParameterByName('search', 'http:www.baidu.com?search=123')).toBe('123');
        expect(getParameterByName('search', 'https:www.baidu.com?search=你好')).toBe('你好');
        expect(getParameterByName('name', 'http:www.baidu.com?search=123&name=haha')).toBe('haha');
    });
});