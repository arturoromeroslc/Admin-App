import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    onLoadFooterLinks
} from './actions';
import './styles/index.less';

class Footer extends Component {
  componentDidMount() {
    this.props.onLoadFooterLinks();
  }

  render() {
      return (
        <div className="main-footer">
          <div className="container">
            <div className="footer-navigation">
              <ul className="footer-menu">
                <li className="menu-item">
                  <h4>Links</h4>
                  <ul className="sub-menu">
                    <li className="menu-item">github.com</li>
                    <li className="menu-item">linkedin.com</li>
                  </ul>
                </li>
                <li className="menu-item">
                  <h4>Sponsors</h4>
                  <ul className="sub-menu">
                    <li className="menu-item">github.com</li>
                    <li className="menu-item">linkedin.com</li>
                  </ul>
                </li>
                <li className="menu-item">
                  <h4>Affiliates</h4>
                  <ul className="sub-menu">
                    <li className="menu-item">github.com</li>
                    <li className="menu-item">linkedin.com</li>
                  </ul>
                </li>
                <li className="menu-item">
                  <h4>My Account</h4>
                  <ul className="sub-menu">
                    <li className="menu-item">github.com</li>
                    <li className="menu-item">linkedin.com</li>
                  </ul>
                </li>
                <li className="menu-item">
                  <h4>Resources</h4>
                  <ul className="sub-menu">
                    <li className="menu-item">github.com</li>
                    <li className="menu-item">linkedin.com</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
  }
};

Footer.propTypes = {
  onLoadFooterLinks: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({
    onLoadFooterLinks
}, dispatch);

export default connect(null, mapDispatchToProps)(Footer);
