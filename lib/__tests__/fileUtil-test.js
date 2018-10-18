// 'use strict';

import { formatBytes } from '../../index';

describe('test-file-util', () => {
    it('formatBytes ', function () {
        expect(formatBytes(1024, 1)).toBe('1.02 KB');
    });
});