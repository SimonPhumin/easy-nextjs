import React, { Component } from 'react'
import Meta from '../components/Meta'

export default class extends Component {
  render() {
    return (
      <div>
        <Meta />
        <main>
          <h1>easy-nextjs 💅</h1>
          <p>Made with ☕️. &copy; 2019 <a href="https://simonschweikert.com" target="_blank">@simonphumin</a></p>
        </main>
      </div>
    )
  }
}