import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
  constructor(props) {
    super(props)

    console.log(props)

    this.state = {
      selectedVideo: props.selectedVideo
    }
  }

  componentDidMount() {

  }

  render() {
    return (

      <div className="mt-8 player-wrapper">
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=' + this.state.selectedVideo.id.videoId}
          width='100%'
          height='100%'
          className="react-player"
        />
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  selectedVideo: PropTypes.shape({
    id: {
      videoId: PropTypes.string.isRequired
    }
  }).isRequired
}

export default VideoPlayer
