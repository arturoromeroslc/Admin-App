import React from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import Layout from '../Layout';
import { routes } from '../routes';

const Root = () => (
  <HashRouter>
    <Layout>
      {routes.map(route => <Route key={route.path} {...route} />)}
    </Layout>
  </HashRouter>
);

export default Root;
