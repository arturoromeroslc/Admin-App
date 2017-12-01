import Home from '../Pages/Home';
import About from '../Pages/About';

export const appRoutes = [
  {
    path: '/',
    pageType: 'Home'
  },
  {
    path: '/about',
    pageType: 'About'
  }
];

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];
