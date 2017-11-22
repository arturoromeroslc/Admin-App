import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Layout from '../Layout';
import routes from '../routes';

const Root = () => (
  <div>
    <div>
      <h1>Header</h1>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
      </ul>
    </div>
    <Layout>
      <BrowserRouter>
        <Switch>
          { routes.map((route, i) => <Route key={i} {...route} />) }
        </Switch>
      </BrowserRouter>
    </Layout>
    <div>
      <h4>Footer</h4>
    </div>
  </div>
);

export default Root;
