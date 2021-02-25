import './App.scss';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Component } from 'react';
import Login from '../src/containers/LoginTemplate';
import PageNotFound from '../src/containers/PageNotFound';
import { routesHome, routesAdmin } from '../src/routes';
import HomeTemplate from '../src/containers/HomeTemplate';
import AdminTemplate from '../src/containers/AdminTemplate';

class App extends Component {

  showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />     
        )
      });
    }
  }
  
  showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
        )
      });
    }
  }

  render() {
    return (
      <Switch>
        {this.showLayoutHome(routesHome)}
        {this.showLayoutAdmin(routesAdmin)}
        <Route path="/login" component={Login} />
        <Route path="" component={PageNotFound} />
      </Switch>
    );
  }
}

export default withRouter(App);
