import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ReactPlayer from 'react-player'

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
        <header className="mt-4">
          <h1 className="text-center">Welcome to YouTube React Client</h1>
        </header>

        <div className="flex content-start flex-wrap justify-center">
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

        <div className="mt-8 player-wrapper">
          <ReactPlayer
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            width='100%'
            height='100%'
            className="react-player"
          />
        </div>

        <div className="border-solid mt-8 border-grey-light border p-4">
          <p className="font-sans">Video Title</p>
          <p className="font-sans mt-6">Video Description</p>
        </div>

      </div>
    )
  }
}

export default App
