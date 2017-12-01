import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import Layout from '../Layout';
import routes from '../routes';

const Root = () => (
  <HashRouter>
    <div>
      <div>
        <h1>Header</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
        <Layout>
          {routes.map((route, index) => <Route key={`${route.path}-${index}`} {...route} />)}
        </Layout>
      <div>
        <h4>Footer</h4>
      </div>
    </div>
  </HashRouter>
);

export default Root;
