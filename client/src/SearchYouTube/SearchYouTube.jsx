import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class SearchYouTube extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="flex content-start flex-wrap justify-center">
        <div className="text-center w-full mt-4">
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon="search" className="mr-1" />

            <input
              className={'search text-grey-darker text-center ' +
                'w-4/5 bg-grey-light rounded-full py-2 px-4'}
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchYouTube
