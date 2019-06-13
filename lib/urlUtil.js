import { parse } from 'url';

/**
 * 得到url中的查询字符串
 */
export const getParameterByName = (name, url) => {
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

/**
 * 设置cookie
 */
export const setCookie = (name, value, exdays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + "; " + expires;
};

/**
 * 得到cookie
 */
export const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
};

/**
 * 检测url是否跨域
 * @param  {String}  requestUrl    需检测的url
 * @param  {String}  currentLocation 需检测的当前网址，如果留空，用location.href取代
 * @return {Boolean}               true跨域，false不跨域
 */
export const isCrossOrigin = (requestUrl, currentLocation) => {
  if (typeof requestUrl !== 'string') {
    throw new Error('Request url must be a string');
  }

  if (!currentLocation && typeof window !== 'undefined' && window.location) {
    currentLocation = window.location.href;
  }

  if (typeof currentLocation !== 'string') {
    throw new Error('Current location must be a string');
  }

  const parsedRequestUrl = parse(requestUrl);
  const parsedCurrentLocation = parse(currentLocation);

  return parsedRequestUrl.protocol !== parsedCurrentLocation.protocol ||
        parsedRequestUrl.host !== parsedCurrentLocation.host;
}
