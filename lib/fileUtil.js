/**
 * 根据文件大小获取格式化后的大小
 */
export const formatBytes = (bytes, decimals, unit) => {
    if (bytes <= 0)
        return '0 B';
    let k = unit || 1024,
        dm = decimals || 0,
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
