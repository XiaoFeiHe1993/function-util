import {getFirstDate, getFinalDate, formatNumber, getUUID} from './lib/timeUtil';
import {isUrl, isEmail} from './lib/isUtil';
import {formatBytes} from './lib/fileUtil';
import {getParameterByName, setCookie, getCookie} from './lib/urlUtil';

module.exports = {
    getFirstDate,
    getFinalDate,
    formatNumber,
    getUUID,

    isUrl,
    isEmail,

    formatBytes,

    getParameterByName,
    setCookie,
    getCookie
};
