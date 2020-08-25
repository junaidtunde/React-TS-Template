import { RouteProps } from 'react-router-dom';
import { Location } from 'history';
import { UserType, LocationState } from 'types';
import { ComponentType } from 'react';

export type PageRoute = RouteProps & {
    component: ComponentType<any>;
    key: string;
    path: string;
    restrictAccess?: UserType[];
    restrictDirectAccess?: (
        location: Location<LocationState>,
        params: { [key: string]: string }
    ) => string | false;
};
