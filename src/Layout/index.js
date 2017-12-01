import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import './styles/index.less';

export default function Layout(props) {
  return (
    <div className="app-layout">
      <Header />
      {React.Children.map(props.children, child => child)}
      <Footer />
    </div>
  );
}


Layout.defaultProps = {
  children: [],
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()),
};
