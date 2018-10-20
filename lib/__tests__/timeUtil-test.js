'use strict';

import {getFirstDate, getFirstTime, getFinalDate, getFinalTime} from '../../index';

describe('test-time-util', () => {
    it('getFirstDate ', function () {
        expect(getFirstDate(new Date())).toBe(1539964800001);
    });

    it('getFirstDate ', function () {
        expect(getFirstTime(1540003787000)).toBe(1539964800001);
    });

    it('getFirstDate ', function () {
        expect(getFinalDate(new Date())).toBe(1540051199999);
    });

    it('getFirstDate ', function () {
        expect(getFinalTime(1540003787000)).toBe(1540051199999);
    });
});