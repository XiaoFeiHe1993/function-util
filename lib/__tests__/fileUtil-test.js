'use strict';

import { formatBytes } from '../../index';

describe('test-file-util', () => {
    it('formatBytes normal', function () {
        expect(formatBytes(1024, 2)).toBe('1 KB');
        expect(formatBytes(1024, 2, 1000)).toBe('1.02 KB');
        expect(formatBytes(1024*1024, 2)).toBe('1 MB');
        expect(formatBytes(1000*1024, 2, 1000)).toBe('1.02 MB');
        expect(formatBytes(1024*1024*1024, 3)).toBe('1 GB');
        expect(formatBytes(1000*1000*1024, 3, 1000)).toBe('1.024 GB');
    });
    
    it('formatBytes bad', function () {
        expect(formatBytes(0, 1)).toBe('0 B');
        expect(formatBytes(0)).toBe('0 B');
        expect(formatBytes(-1024)).toBe('0 B');
    });
});