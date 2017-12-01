import React from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import Layout from '../Layout';
import routes from '../routes';

const Root = () => (
  <HashRouter>
    <Layout>
      {routes.map((route, index) => <Route key={`${route.path}-${index}`} {...route} />)}
    </Layout>
  </HashRouter>
);

export default Root;
