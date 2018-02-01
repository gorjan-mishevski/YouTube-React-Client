import React, { Component } from 'react'

class Description extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="border-solid mt-8 border-grey-light border p-4">
        <p className="font-sans">Video Title</p>
        <p className="font-sans mt-6">Video Description</p>
      </div>
    )
  }
}

export default Description
