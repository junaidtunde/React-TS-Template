import { PHONE_MAX_SIZE, DESKTOP_MIN_SIZE } from 'shared/constants';

export const isTablet = () =>
    window.matchMedia(
        `(min-width : ${PHONE_MAX_SIZE}px) and (max-width : ${DESKTOP_MIN_SIZE}px)`
    ).matches;
