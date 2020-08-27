import { Locale } from 'types';

export const toPrice = (price: string | number, locale: Locale = 'en') => {
    return Number(price).toLocaleString(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};
