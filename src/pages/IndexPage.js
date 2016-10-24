import { Link } from 'react-router'
import React, { PropTypes } from 'react'
import ChocolateList from '../components/ChocolateList'
import NewChocolateCard from '../components/NewChocolateCard'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <ChocolateList data={this.props.data} />
        <NewChocolateCard />
      </div>
    )
  }
}