import About from './About';
import Contact from './Contact';
import Home from './Home';
import NotFound from './static/NotFound';
import { RouteProps } from 'react-router-dom';
import { flatMapDeep } from 'lodash';

export interface Route extends RouteProps {
  childRoutes?: Route[];
  title?: string;
}

const routes: Route[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    title: 'About',
    path: '/about',
    component: About
  },
  {
    title: 'Contact',
    path: '/contact',
    component: Contact
  },
  {
    path: '*',
    component: NotFound
  }
];

export const flattenedRoutes = flatMapDeep(routes, (route) => {
  return route.childRoutes ? route.childRoutes : route;
});

export default routes;
