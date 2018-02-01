import React, { Component } from 'react'
import axios from 'axios'

import SearchYouTube from './SearchYouTube/SearchYouTube'
import VideoPlayer from './Video/Player/Player'
import VideoDescription from './Video/Description/Description'
import VideoSuggestions from './Video/Suggestions/Suggestions'

class App extends Component {
  constructor() {
    super()

    this.state = {
      selectedVideo: null,
      videos: null
    }
  }

  async componentDidMount() {
    const videos = (await axios.get('/api/video/most-popular')).data.items
    this.setState({
      videos,
      selectedVideo: videos[0]
    })
  }

  render() {
    if (this.state.selectedVideo === null) {
      return null
    }

    return (
      <div className="App" >
        <header className="mt-4">
          <h1 className="text-center">Welcome to YouTube React Client</h1>
        </header>

        <SearchYouTube />

        <VideoPlayer selectedVideo={this.state.selectedVideo} />

        <VideoDescription />

        <VideoSuggestions />
      </div>
    )
  }
}

export default App
