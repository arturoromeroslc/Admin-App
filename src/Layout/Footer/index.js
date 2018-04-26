import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  onLoadFooterLinks,
} from './actions';
import {
  getFooterLinks,
} from './reducer';
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
              {!!this.props.footerLinks && this.props.footerLinks.map(link => (
                <li
                  key={link.title}
                  className="menu-item"
                >
                  <h4>{link.title}</h4>
                  <ul className="sub-menu">
                    {link.links.map(linkItem => (
                      <li
                        key={linkItem.title}
                        className="menu-item"
                      >
                        {linkItem.title}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Footer.defaultProps = {
  footerLinks: [],
};

Footer.propTypes = {
  onLoadFooterLinks: PropTypes.func.isRequired,
  footerLinks: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  footerLinks: getFooterLinks(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onLoadFooterLinks,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
