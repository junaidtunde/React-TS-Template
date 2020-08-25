import { lazy } from 'react';

import { PageRoute } from 'types';
import ROUTES from './routes';

const Login = lazy(() => import(/* webpackChunkName: "login" */ 'pages/login'));

// const ResetPassword = lazy(() =>
//     import(/* webpackChunkName: "reset-password" */ 'pages/reset-password')
// );

const PageRoutes: PageRoute[] = [
    {
        component: Login,
        key: 'login',
        path: ROUTES.LOGIN
    },
    // {
    //     component: ResetPassword,
    //     key: 'reset-password',
    //     path: ROUTES.RESET_PASSWORD
    // },
    // {
    //     // component: Dashboard,
    //     exact: true,
    //     key: 'dashboard',
    //     // path: ROUTES.DASHBOARD_MUSIC,
    //     restrictAccess: true
    // },
];

export default PageRoutes;