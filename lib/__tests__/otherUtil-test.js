'use strict';

import {checkPwd} from '../../index';

describe('test-other-util', () => {
    it('checkPwd ', function () {
		expect(checkPwd('12345')).toBe(0);
		expect(checkPwd('123456')).toBe(1);
		expect(checkPwd('12345a')).toBe(1);
		expect(checkPwd('12345A')).toBe(1);
		expect(checkPwd('12345aA')).toBe(2);
		expect(checkPwd('12345a.')).toBe(2);
		expect(checkPwd('12345a:')).toBe(2);
		expect(checkPwd('12345a{')).toBe(2);
		expect(checkPwd('12345a(')).toBe(2);
		expect(checkPwd('12345a`')).toBe(2);
		expect(checkPwd('12345a%')).toBe(2);
		expect(checkPwd('12345a$')).toBe(2);
		expect(checkPwd('12345a&')).toBe(2);
		expect(checkPwd('12345a*')).toBe(2);
		expect(checkPwd('12345a^')).toBe(2);
		expect(checkPwd('12345a<')).toBe(2);
    });
});