/**
 * 得到某天的00:00:00:001
 */
export const getFirstDate = (date) => {
    return date.setHours(0, 0, 0, 1);
};

/**
 * 得到某天的00:00:00:001
 */
export const getFirstTime = (time) => {
    return new Date(time).setHours(0, 0, 0, 1);
};

/**
 *得到某天的23:59:59:999
 */
export const getFinalDate = (date) => {
    return date.setHours(23, 59, 59, 999);
};

/**
 *得到某天的23:59:59:999
 */
export const getFinalTime = (time) => {
    return new Date(time).setHours(23, 59, 59, 999);
};