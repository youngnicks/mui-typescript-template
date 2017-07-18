import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import NotFound from '../routes/static/NotFound';
import { Route as RouteType } from '../routes';
import { flatMapDeep } from 'lodash';

type Props = {
  routes: RouteType[]
};

const AppRouter: React.StatelessComponent<Props> = (props) => {
  const routeArray = flatMapDeep(props.routes, (route) => {
    return route.childRoutes
      ? route.childRoutes
      : route;
  });

  return (
    <Switch>
      {routeArray.map(route => route.path && (
        <Route key={route.to} {...route}/>
      ))}

      <Route path="*" component={NotFound}/>
    </Switch>
  );
};

export default AppRouter;
