/**
 * 得到某天的00:00:00:001
 */
export function getFirstDate(date) {
    return date.setHours(0, 0, 0, 1);
}

/**
 * 得到某天的00:00:00:001
 */
export function getFirstTime(time) {
    return new Date(time).setHours(0, 0, 0, 1);
}

/**
 *得到某天的23:59:59:999
 */
export function getFinalDate(date) {
    return date.setHours(23, 59, 59, 999);
}

/**
 *得到某天的23:59:59:999
 */
export function getFinalTime(time) {
    return new Date(time).setHours(23, 59, 59, 999);
}