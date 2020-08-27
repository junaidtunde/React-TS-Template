import { Currency } from 'types';
import { getCurrencyLocale } from 'helpers';

export const toCurrency = (amount: string | number, currency: Currency) => {
    return Number(amount).toLocaleString(getCurrencyLocale(currency), {
        style: 'currency',
        currency: currency
    });
};
