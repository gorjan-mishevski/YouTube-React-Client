const axios = require('axios')

class YouTubeAPI {
  constructor(key, part = 'snippet') {
    if (key === '') {
      throw new Error('key parameter is required.')
    }

    this.part = part
    this.url = `https://www.googleapis.com/youtube/v3/search?key=${key}&part=${this.part}`
  }

  async mostPopularVideos(regionCode = 'US') {
    const completeURL = this.url + `&chart=mostPopular&regionCode=${regionCode}`
    let videos = {}
    try {
      videos = await axios.get(completeURL)
    } catch (e) {
      return undefined
    }

    return videos
  }
}

module.exports = YouTubeAPI
