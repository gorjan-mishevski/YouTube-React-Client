import React, { Component } from 'react'
import logo from './logo.svg'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.callApi = this.callApi.bind(this)

    this.state = {
      response: ''
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err))
  }

  async callApi() {
    const response = await fetch('/api/hello')
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="flex content-start flex-wrap h-48 justify-center">
          <div className="text-center w-full mt-4">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon icon="search" className="mr-1" />

              <input
                className="search text-grey-darker text-center w-4/5 bg-grey-light rounded-full py-2 px-4"
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. {this.state.response}
        </p>
      </div>
    )
  }
}

export default App
