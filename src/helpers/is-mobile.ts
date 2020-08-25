import { PHONE_MAX_SIZE } from 'shared/constants';
export const isMobile = () =>
    window.matchMedia(`(max-width : ${PHONE_MAX_SIZE}px)`).matches;
