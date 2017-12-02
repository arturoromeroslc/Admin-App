import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import { appRoutes } from '../../routes';
import Button from '../../Components/Buttons';
import './styles/index.less';

export default function Header() {
  return (
    <div className="main-header">
      <div className="container header-container">
        <div className="branding">
          <h1>Dev Helper</h1>
        </div>
        <div className="navigation">
          <ul className="menu">
            {appRoutes.map(route => (
              <li className="menu-item" key={route.pageType}>
                <NavLink to={route.path}>{route.pageType}</NavLink>
              </li>))}
          </ul>
        </div>
        <div className="cta-container">
          <Button
            title="Sign up now"
            buttonType="btn-signup"
          />
          <Button
            title="Log in"
          />
        </div>
      </div>
    </div>
  );
}
