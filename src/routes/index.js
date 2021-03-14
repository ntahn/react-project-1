import HomePage from "../containers/HomeTemplate/HomePage";
import DashboardPage from "../containers/AdminTemplate/DashboardPage";
import DetailPage from "../containers/HomeTemplate/DetailPage";
import MovieManagement from "../containers/AdminTemplate/MovieManagement";
import MovieDetail from "../containers/AdminTemplate/MovieDetail";
import MovieAdd from "../containers/AdminTemplate/MovieAdd";

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
	},
];

const routesAdmin = [
	{
		exact: true,
		path: "/dashboard/user",
		component: DashboardPage,
	},
	{
		exact: true,
		path: "/dashboard/movie",
		component: MovieManagement,
	},
	{
		exact: true,
		path: "/dashboard/movie/add",
		component: MovieAdd,
	},
	{
		exact: true,
		path: "/dashboard/movie/:id",
		component: MovieDetail,
	},
];

export { routesHome, routesAdmin };
