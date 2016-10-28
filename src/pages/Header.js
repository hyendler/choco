import React from 'react'
import { Link } from 'react-router'
import { connector } from '../store'
{ /* import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath' */ }

const Header = React.createClass({
  handleSearchTermEvent (event) {
    console.log(this.props)
    this.props.setSearchTerm(event.target.value)
  },
  render() {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <div className="navbar-form navbar-right"><div className="form-group"><input type='text' placeholder='search' className="form-control" value={this.props.searchTerm} onChange={this.handleSearchTermEvent} /></div></div>
    } else {
      utilSpace = <span></span>
    }
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <div className="navbar-header">
              <Link className="navbar-brand" href="/">
                <img src="imgs/choco-logo.png" />
              </Link>
            </div>
            {utilSpace}
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
})

module.exports = connector(Header)