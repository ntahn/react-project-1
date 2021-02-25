import HomePage from '../containers/HomeTemplate/HomePage';
import DashboardPage from '../containers/AdminTemplate/DashboardPage';

const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        exact: true,
        path: "/home",
        component: HomePage,
    }
]

const routesAdmin = [
    {
        exact: true,
        path: "/dashboard",
        component: DashboardPage,
    },
]

export { routesHome, routesAdmin };