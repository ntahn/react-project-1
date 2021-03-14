import "./App.scss";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { Component } from "react";
import Login from "../src/containers/LoginTemplate";
import AlertTimeOut from "./components/AlertTimeOut";
import PageNotFound from "../src/containers/PageNotFound";
import { routesHome, routesAdmin } from "../src/routes";
import HomeTemplate from "../src/containers/HomeTemplate";
import AdminTemplate from "../src/containers/AdminTemplate";

class App extends Component {
	showLayoutHome = (routes) => {
		if (routes && routes.length > 0) {
			return routes.map((item, index) => {
				return (
					<HomeTemplate
						key={index}
						exact={item.exact}
						path={item.path}
						Component={item.component}
					/>
				);
			});
		}
	};

	showLayoutAdmin = (routes) => {
		if (routes && routes.length > 0) {
			return routes.map((item, index) => {
				return (
					<AdminTemplate
						key={index}
						exact={item.exact}
						path={item.path}
						Component={item.component}
					/>
				);
			});
		}
	};

	render() {
		return (
			<Switch>
				{this.showLayoutHome(routesHome)}
				{this.showLayoutAdmin(routesAdmin)}
				<Redirect exact from="/dashboard" to="/dashboard/user" />
				<Route path="/login" exact component={Login} />
				<Route path="/alert" exact component={AlertTimeOut} />
				<Route path="" component={PageNotFound} />
			</Switch>
		);
	}
}

export default withRouter(App);
