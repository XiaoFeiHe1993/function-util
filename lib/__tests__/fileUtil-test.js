'use strict';

import { formatBytes } from '../../index';

describe('test-file-util', () => {
    it('formatBytes ', function () {
        expect(formatBytes(1024, 1)).toBe('1.02 KB');
        expect(formatBytes(1000*1024, 1)).toBe('1.02 MB');
        expect(formatBytes(1000*1000*1024, 2)).toBe('1.024 GB');
    });
});