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

        <div className="flex flex-wrap mt-8">
          <div className="lg:flex w-full md:w-1/2 p-1">
            <div
              className={'h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none' +
                'lg:rounded-l text-center overflow-hidden'}
              style={{ backgroundImage: "url('https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg')" }}
              title="PLACEHOLDER"
            />

            <div
              className={'border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light' +
                'bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'}
            >
              <div className="mb-8">
                <div className="text-black font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>

                <p className="text-grey-darker text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4"
                  src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                  alt="Avatar of Jonathan Reinink"
                />

                <div className="text-sm">
                  <p className="text-black leading-none">Jonathan Reinink</p>
                  <p className="text-grey-dark">Aug 18</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex w-full md:w-1/2 p-1">
            <div
              className={'h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none' +
                'lg: rounded-l text-center overflow-hidden'}
              style={{ backgroundImage: "url('https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg')" }}
              title="PLACEHOLDER"
            />

            <div
              className={'border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light' +
                'bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'}
            >
              <div className="mb-8">
                <div className="text-black font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>

                <p className="text-grey-darker text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4"
                  src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                  alt="Avatar of Jonathan Reinink"
                />

                <div className="text-sm">
                  <p className="text-black leading-none">Jonathan Reinink</p>
                  <p className="text-grey-dark">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
