import { Link } from 'react-router'
import React, { PropTypes } from 'react'
import { LoginLink } from 'react-stormpath'
import ChocolateList from '../components/ChocolateList'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <ChocolateList data={this.props.data} />
        <NewChocolateBox />
      </div>
    )
  }
}