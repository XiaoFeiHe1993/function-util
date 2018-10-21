import {getFirstDate, getFinalDate, getUUID} from './lib/timeUtil';
import {isUrl, isEmail} from './lib/isUtil';
import {formatBytes} from './lib/fileUtil';
import {getParameterByName, setCookie, getCookie} from './lib/urlUtil';

module.exports = {
    getFirstDate,
    getFinalDate,
    getUUID,

    isUrl,
    isEmail,

    formatBytes,

    getParameterByName,
    setCookie,
    getCookie
};
