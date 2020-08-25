// import { UserType, User } from 'types';
import { isVerified } from './index';

export const isAllowed = (user: any) => {
    return isVerified(user);
};
