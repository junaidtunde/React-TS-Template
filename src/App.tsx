import React, { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import PageRoutes from './shared/page-routes';
import ROUTES from 'shared/routes';
import { Empty, Loader, Restricted } from 'components';
import { LocationState } from 'types';

const queryConfig = {
  queries: { refetchOnWindowFocus: false }
  // shared: {
  //     suspense: true
  // }
};

const App = () => {
  const location = useLocation<LocationState>();

  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <Switch>
        {PageRoutes.map(
          ({
            exact,
            path,
            component: Component,
            restrictAccess,
            key,
            ...rest
          }) => {
            const componentKey = key || path;
            return restrictAccess ? (
              <Restricted
                {...rest}
                key={componentKey}
                exact={exact}
                path={path}
                component={Component}
                restrictAccess={restrictAccess}
              />
            ) : (
                location.pathname === '/' ? window.location.href = ROUTES.LOGIN :
                  <Route
                    key={componentKey}
                    exact={exact}
                    path={path}
                    render={props => (
                      <Suspense fallback={<Loader />}>
                        <Component {...props} key={componentKey} />
                      </Suspense>
                    )}
                  />
              );
          }
        )}
        <Route
          render={props => (
            <Empty
              heading='Path not found'
              body='use the search to find what you are looking for'
            >
              path:{' '}
              {`${props.location.pathname}${props.location.search}`}
            </Empty>
          )}
        />
      </Switch>
      <ReactQueryDevtools
        initialIsOpen={false}
        toggleButtonProps={{
          style: { top: 60, right: 30, height: 36, left: 'initial' }
        }}
      />
    </ReactQueryConfigProvider>
  )
};

export default App;
