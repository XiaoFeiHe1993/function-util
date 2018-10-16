'use strict';

/**
 * 得到某天的00:00:00:001
 */
const getFirstDate = (date) => {
    return date.setHours(0, 0, 0, 1);
};

/**
 * 得到某天的00:00:00:001
 */
const getFirstTime = (time) => {
    return new Date(time).setHours(0, 0, 0, 1);
};

/**
 *得到某天的23:59:59:999
 */
const getFinalDate = (date) => {
    return date.setHours(23, 59, 59, 999);
};

/**
 *得到某天的23:59:59:999
 */
const getFinalTime = (time) => {
    return new Date(time).setHours(23, 59, 59, 999);
};

/**
 * 判断是否是Url
 */
const regUrl = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

const isUrl = (path) => {
    return regUrl.test(path);
};

/**
 * 判断是否是邮箱
 */
const regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

const isEmail = (email) => {
    return regEmail.test(email);
};

/**
 * 根据文件大小获取格式化后的大小
 */
const formatBytes = (bytes, decimals) => {
    if (bytes === 0) return '0 Bytes';
    let k = 1000,
        dm = decimals + 1 || 3,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * 得到url中的查询字符串
 */
const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

module.exports = {
    getFirstDate,
    getFirstTime,
    getFinalDate,
    getFinalTime,

    isUrl,
    isEmail,

    formatBytes,

    getParameterByName
};
