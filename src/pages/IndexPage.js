import { Link } from 'react-router'
import React, { PropTypes } from 'react'
import ChocolateList from '../components/ChocolateList'
import NewChocolateCard from '../components/NewChocolateCard'
import Header from './Header';
import data from '../../static/data'



const IndexPage = React.createClass ({
  getInitialState () {
  	return {
  		searchTerm: ""
  	}
  },
  handleSearchTermChange (searchTerm) {
  	this.setState({ searchTerm })
  },
  render() {
    return (
      <div>
      	<Header handleSearchTermChange={this.handleSearchTermChange}
      		searchTerm={this.state.searchTerm} 
      		showSearch />
      	<div>
        	<ChocolateList data={data} searchTerm={this.state.searchTerm} />
        	<NewChocolateCard />
        </div>
      </div>
    )
  }
})

module.exports = IndexPage