import HomePage from '../containers/HomeTemplate/HomePage';
import DashboardPage from '../containers/AdminTemplate/DashboardPage';
import DetailPage from '../containers/HomeTemplate/DetailPage';

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
    },
    {
        exact: true,
        path: "/detail/:maPhim",
        component: DetailPage,
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