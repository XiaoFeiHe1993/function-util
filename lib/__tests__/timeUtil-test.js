'use strict';

import {getFirstDate, getFinalDate, formatNumber} from '../../index';

describe('test-time-util', () => {
    it('getFirstDate ', function () {
        expect(getFirstDate(1540003787000)).toBe(1539964800001);
    });

    it('getFinalDate ', function () {
        expect(getFinalDate(1540003787000)).toBe(1540051199999);
    });

    it('formatNumber ', function () {
        expect(formatNumber(5)).toBe('05');
    });
});