import { Currency, Locale } from 'types';

type CurrencyToLocaleMap = {
    [key in Currency]: Locale;
};
const currencyToLocaleMap: CurrencyToLocaleMap = {
    NGN: 'en-NG',
    USD: 'en-US',
    JPY: 'ja-JP',
    EUR: 'en',
    AUD: 'en',
    BRL: 'en'
};

export const getCurrencyLocale = (currency: Currency) =>
    currencyToLocaleMap[currency];
