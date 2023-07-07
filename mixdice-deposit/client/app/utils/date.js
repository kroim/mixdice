import moment from 'moment';
/**
 * Convert the date to a standardized form
 * @param  {Date} date
 */
export const formatDateToStandard = date => moment(date).format('h:mm A');
