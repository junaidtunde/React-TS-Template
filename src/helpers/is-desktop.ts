import { DESKTOP_MIN_SIZE } from 'shared/constants';
export const isDesktop = () =>
    window.matchMedia(`(min-width: ${DESKTOP_MIN_SIZE}px)`).matches;
