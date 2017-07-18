import About from './About';
import Contact from './Contact';
import Home from './Home';
import { RouteProps } from 'react-router-dom';

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
  }
];

export default routes;
