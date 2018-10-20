import {getFirstDate, getFinalDate} from './lib/timeUtil';
import {isUrl, isEmail} from './lib/isUtil';
import {formatBytes} from './lib/fileUtil';
import {getParameterByName, setCookie, getCookie} from './lib/urlUtil';

module.exports = {
    getFirstDate,
    getFinalDate,

    isUrl,
    isEmail,

    formatBytes,

    getParameterByName,
    setCookie,
    getCookie
};
