'use strict';

import {getFirstDate, getFinalDate} from '../../index';

describe('test-time-util', () => {
    it('getFirstDate ', function () {
        expect(getFirstDate(1540003787000)).toBe(1539964800001);
    });

    it('getFinalDate ', function () {
        expect(getFinalDate(1540003787000)).toBe(1540051199999);
    });
});