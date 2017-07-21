import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import { Route as RouteType, flattenedRoutes } from '../routes';

type Props = {
  routes: RouteType[]
};

const AppRouter: React.StatelessComponent<Props> = (props) => (
  <Switch>
    {flattenedRoutes.map(route => route.path && (
      <Route key={route.path} {...route}/>
    ))}
  </Switch>
);

export default AppRouter;
