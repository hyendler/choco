import React from 'react'
import { Link } from 'react-router'
{ /* import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath' */ }

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <div className="navbar-header">
              <Link className="navbar-brand" href="/">
                <img src="imgs/choco-logo.png" />
              </Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
              {/*
              <NotAuthenticated>
                <li>
                  <LoginLink />
                </li>
              </NotAuthenticated>
              <NotAuthenticated>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </NotAuthenticated>
              */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}