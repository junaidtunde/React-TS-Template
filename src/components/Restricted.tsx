import React, { Suspense } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

import ROUTES from 'shared/routes';
import { Loader } from 'components';
// import { getIsLoggedIn } from 'queries';
import { PageRoute, LocationState } from 'types';
import { isAllowed } from 'helpers';

const Restricted = ({
    component: Component,
    restrictAccess,
    restrictDirectAccess,
    ...rest
}: PageRoute) => {
    const isLoggedIn = true;
    const user = '';
    const location = useLocation<LocationState>();

    return (
        <Route
            {...rest}
            render={props => {
                if (!isLoggedIn) {
                    return (
                        <Redirect
                            to={{
                                pathname: ROUTES.LOGIN,
                                state: {
                                    from: location.pathname,
                                    isRedirect: true
                                }
                            }}
                        />
                    );
                }
                const isUserAccess = restrictAccess;
                const hasAccess =
                    isUserAccess && isAllowed(user);
                if (!hasAccess) {
                    return (
                        <Redirect
                            to={{
                                pathname: ROUTES.LOGIN
                            }}
                        />
                    );
                }

                if (typeof restrictDirectAccess === 'function') {
                    const pathname = restrictDirectAccess(
                        location,
                        props.match.params
                    );
                    if (pathname) {
                        return (
                            <Redirect
                                to={{
                                    pathname
                                }}
                            />
                        );
                    }
                }
                return (
                    <Suspense fallback={<Loader />}>
                        <Component {...props} />
                    </Suspense>
                );
            }}
        />
    );
};

export default Restricted;