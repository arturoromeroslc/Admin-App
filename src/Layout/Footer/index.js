import React from 'react';
import './styles/index.less';

export default function Footer() {
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
