import moment from 'moment';

export const getFormatDate = (date: string) => {
    return moment(date).format('LL')
}