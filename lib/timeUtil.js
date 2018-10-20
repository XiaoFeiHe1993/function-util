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