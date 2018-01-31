const YouTubeAPI = require('./YouTubeAPI')

module.exports = app => {
  /* GET youtube video */
  app.get('/api/video/most-popular', async (req, res) => {
    let youtube = new YouTubeAPI('AIzaSyC404eVRoz3CixPTMOHKdlZOMI9EYAMj7E')
    const videos = (await youtube.mostPopularVideos()).data
    res.send(videos)
  })
}
