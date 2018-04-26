import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  onLoadHomePage,
} from './actions';
import './styles/index.less';

class Home extends Component {
  componentDidMount() {
    this.props.onLoadHomePage();
  }

  render() {
    return (
      <div className="home-page">
        <div className="container">
          <div className="hero-container">
            <div className="hero-message">
              <h1>Welcome to the Dev Helper</h1>
              <h2><i>Every Developers trusty assisant</i></h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  onLoadHomePage: null,
};

Home.propTypes = {
  onLoadHomePage: PropTypes.func,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onLoadHomePage,
}, dispatch);

export default connect(null, mapDispatchToProps)(Home);
