import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import fontawesome from '@fortawesome/fontawesome'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

fontawesome.library.add(faCheckSquare, faSearch)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
