import { Link } from 'react-router'
import React, { PropTypes } from 'react'
import NewChocolateForm from '../components/NewChocolateForm'
import Header from './Header'


export default class NewChocolatePage extends React.Component {
  render() {
    return (
      <div className="container">
      	<Header />
      	<NewChocolateForm />       
      </div>
    )
  }
}
