import { Link } from 'react-router'
import React, { PropTypes } from 'react'
import ChocolateList from '../components/ChocolateList'
import NewChocolateCard from '../components/NewChocolateCard'
import Header from './Header';




const IndexPage = React.createClass({
  render() {
    return (
      <div>
      	<Header showSearch />
      	<div>
        	<ChocolateList />
        	<NewChocolateCard />
        </div>
      </div>
    )
  }
})

console.log("IndexPage", IndexPage)

module.exports = IndexPage