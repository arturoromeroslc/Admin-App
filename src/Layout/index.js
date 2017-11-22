import React, { Component } from 'react';

const Layout = props => (
  <div>
    {React.Children.map(props.children, (child, i) => child) }
  </div>
);

export default Layout;
