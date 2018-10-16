import {getFirstDate, getFirstTime, getFinalDate, getFinalTime} from './lib/timeUtil';
import {isUrl, isEmail} from './lib/isUtil';
import {formatBytes} from './lib/fileUtil';
import {getParameterByName} from './lib/urlUtil';

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
