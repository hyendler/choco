import { Link } from 'react-router'
import React, { PropTypes } from 'react'
import ChocolateList from '../components/ChocolateList'
import NewChocolateCard from '../components/NewChocolateCard'
import Header from './Header';
import { connector } from '../store'



const IndexPage = React.createClass({
  getInitialState () {
  	return {
  		searchTerm: "",
  		data: {}
  	}
  },
  render() {
    return (
      <div>
      	<Header showSearch />
      	<div>
        	<ChocolateList chocolates={this.props.chocolates} searchTerm={this.props.searchTerm} />
        	<NewChocolateCard />
        </div>
      </div>
    )
  }
})

module.exports = connector(IndexPage)