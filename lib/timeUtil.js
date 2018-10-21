/**
 * 得到某天的00:00:00:001
 */
export const getFirstDate = (date) => {
    return (typeof date === "number") ? new Date(date).setHours(0, 0, 0, 1) : date.setHours(0, 0, 0, 1);
};

/**
 *得到某天的23:59:59:999
 */
export const getFinalDate = (date) => {
    return (typeof date === "number") ? new Date(date).setHours(23, 59, 59, 999) : date.setHours(23, 59, 59, 999);
};

/**
 * 得到uuid
 * http://www.broofa.com/Tools/Math.uuid.js
 */
export const getUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};