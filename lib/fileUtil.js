/**
 * 根据文件大小获取格式化后的大小
 */
export const formatBytes = (bytes, decimals) => {
    if (bytes === 0) return '0 Bytes';
    let k = 1000,
        dm = decimals + 1 || 3,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
